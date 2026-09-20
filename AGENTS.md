# Copias de seguridad obligatorias

El usuario requiere una copia local versionada de cada actualización de esta web.

- Al terminar cada conjunto de modificaciones, crear y verificar una copia antes de dar el trabajo por finalizado o publicar.
- Carpeta: Documentos del usuario / `Copias de seguridad página web luz próxima`. El script resuelve Documentos con la API de Windows; no asumir que es la carpeta de OneDrive.
- Ejecutar `powershell.exe -NoProfile -ExecutionPolicy Bypass -File scripts/backup.ps1`.
- Nombres: `Luz-Proxima_V1.0_AAAA-MM-DD_HH-mm-ss.zip`, V1.1, V1.2, etc. No sobrescribir ni eliminar copias anteriores.
- En este equipo, `core.hooksPath=scripts/git-hooks` activa una copia tras cada commit local. Si el hook ya creó y verificó la copia del estado final, no duplicarla. Si hubo modificaciones después del commit o no se hizo commit, ejecutar el script manualmente.
- Comprobar el mensaje «Copia verificada»; un commit exitoso no garantiza que el hook haya completado la copia. Si falla, resolverlo antes de publicar.
- Mantener fuera de las copias datos de clientes, Excel, credenciales, archivos ignorados e historial Git. Son copias del código y recursos de la página.
- Al comunicar el resultado, indicar la versión y la ubicación de la copia.
