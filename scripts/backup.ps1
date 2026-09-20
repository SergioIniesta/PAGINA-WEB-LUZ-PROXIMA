param([string]$Destination)
$ErrorActionPreference = 'Stop'
$projectRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
function Get-BackupHash([string]$FilePath) {
    $inputStream = [IO.File]::OpenRead($FilePath)
    $algorithm = [Security.Cryptography.SHA256]::Create()
    try { return [BitConverter]::ToString($algorithm.ComputeHash($inputStream)).Replace('-','') }
    finally { $algorithm.Dispose(); $inputStream.Dispose() }
}
if (-not $Destination) {
    $Destination = Join-Path ([Environment]::GetFolderPath('MyDocuments')) 'Copias de seguridad página web luz próxima'
}
$backupRoot = [IO.Path]::GetFullPath($Destination)
if ($backupRoot.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -or $backupRoot -eq $projectRoot) {
    throw 'La carpeta de copias debe estar fuera del proyecto.'
}
[IO.Directory]::CreateDirectory($backupRoot) | Out-Null
$lock = $null
$stage = $null
$temporaryZip = $null
try {
    $lock = [IO.File]::Open((Join-Path $backupRoot '.backup.lock'), 'OpenOrCreate', 'ReadWrite', 'None')
    $versions = @(Get-ChildItem -LiteralPath $backupRoot -Filter 'Luz-Proxima_V1.*.zip' | ForEach-Object {
        if ($_.Name -match '^Luz-Proxima_V1\.(\d+)_') { [int]$Matches[1] }
    })
    $minor = 0
    if ($versions.Count) { $minor = 1 + ($versions | Measure-Object -Maximum).Maximum }
    $version = 'V1.' + $minor
    $now = Get-Date
    $name = 'Luz-Proxima_' + $version + '_' + $now.ToString('yyyy-MM-dd_HH-mm-ss')
    $finalZip = Join-Path $backupRoot ($name + '.zip')
    $stage = Join-Path $backupRoot ('.preparando-' + [guid]::NewGuid().ToString('N'))
    [IO.Directory]::CreateDirectory($stage) | Out-Null
    # Git's file list excludes ignored customer data, credentials and build caches.
    $files = @(& git -C $projectRoot -c core.quotepath=false ls-files --cached --others --exclude-standard)
    if ($LASTEXITCODE -ne 0) { throw 'No se ha podido obtener la lista de archivos.' }
    $files = @($files | Sort-Object -Unique | Where-Object {
        $_ -notmatch '(^|/)(\.git|node_modules|artifacts|private|data)(/|$)' -and
        $_ -notmatch '(^|/)\.env($|\.)' -and
        $_ -notmatch '\.(xlsx?|csv|tsv|sqlite3?|db|bak|log)$'
    })
    $records = @()
    foreach ($relative in $files) {
        $source = [IO.Path]::GetFullPath((Join-Path $projectRoot $relative))
        if (-not $source.StartsWith($projectRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Ruta fuera del proyecto.' }
        if (-not (Test-Path -LiteralPath $source -PathType Leaf)) { continue }
        if ((Get-Item -LiteralPath $source).Attributes -band [IO.FileAttributes]::ReparsePoint) { throw 'No se permiten enlaces a archivos externos.' }
        $target = Join-Path $stage $relative
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($target)) | Out-Null
        Copy-Item -LiteralPath $source -Destination $target
        $hash = Get-BackupHash $target
        if ($hash -ne (Get-BackupHash $source)) { throw 'Un archivo cambió durante la copia. Reintenta.' }
        $records += [ordered]@{ path=$relative.Replace('\','/'); sha256=$hash }
    }
    if (-not ($records.path -contains 'dist/index.html')) { throw 'Falta la página principal en la copia.' }
    $commit = & git -C $projectRoot rev-parse HEAD
    $status = @(& git -C $projectRoot status --porcelain)
    $manifest = [ordered]@{
        version=$version; createdAt=$now.ToString('o'); timeZone=[TimeZoneInfo]::Local.Id
        source=$projectRoot; commit=$commit; uncommittedChanges=($status.Count -gt 0)
        scope='Código y recursos de la web. Sin datos de clientes, credenciales ni historial Git.'
        files=$records
    }
    [IO.File]::WriteAllText((Join-Path $stage 'BACKUP-MANIFEST.json'), ($manifest | ConvertTo-Json -Depth 6), [Text.UTF8Encoding]::new($false))
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $temporaryZip = Join-Path $backupRoot ('.' + $name + '.' + [guid]::NewGuid().ToString('N') + '.tmp')
    [IO.Compression.ZipFile]::CreateFromDirectory($stage, $temporaryZip)
    $archive = [IO.Compression.ZipFile]::OpenRead($temporaryZip)
    try {
        foreach ($record in $records) {
            $entry = @($archive.Entries | Where-Object { $_.FullName.Replace('\','/') -eq $record.path })
            if ($entry.Count -ne 1) { throw ('Archivo ausente o duplicado: ' + $record.path) }
            $stream = $entry[0].Open()
            $sha = [Security.Cryptography.SHA256]::Create()
            try { $actual = [BitConverter]::ToString($sha.ComputeHash($stream)).Replace('-','') }
            finally { $sha.Dispose(); $stream.Dispose() }
            if ($actual -ne $record.sha256) { throw ('Error de integridad: ' + $record.path) }
        }
    } finally { $archive.Dispose() }
    [IO.File]::Move($temporaryZip, $finalZip)
    Write-Output ('Copia verificada: ' + $finalZip)
    Write-Output ('Archivos: ' + $records.Count)
} finally {
    # Only remove the temporary paths created by this invocation, under this root.
    if ($stage -and [IO.Path]::GetFullPath($stage).StartsWith($backupRoot + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase) -and (Split-Path $stage -Leaf) -like '.preparando-*') {
        if (Test-Path -LiteralPath $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
    }
    if ($temporaryZip -and [IO.Path]::GetDirectoryName($temporaryZip) -eq $backupRoot -and (Test-Path -LiteralPath $temporaryZip)) { Remove-Item -LiteralPath $temporaryZip -Force }
    if ($lock) { $lock.Dispose() }
}
