# Luz Próxima

Primera versión de la web corporativa, adaptable a móviles, sin dependencias de compilación.

## Ver la web

Abre esta carpeta en Visual Studio Code y pulsa F5 (configuración «Ver Luz Próxima»), o ejecuta `node server.mjs`. La dirección local es http://127.0.0.1:4173.

## Contenido

- `dist/index.html`: portada, Conócenos, Contáctanos y Comerciales.
- `dist/styles.css`: diseño adaptable y colores corporativos.
- `dist/app.js`: navegación y preparación de consulta por WhatsApp.
- `dist/assets/logo-original.jpeg`: logotipo aportado, sin modificar.

## Formulario

Valida nombre, apellidos, teléfono, correo y descripción. Prepara un enlace de WhatsApp al 661 114 453. El visitante revisa y envía el mensaje en WhatsApp. No se almacena ni envía automáticamente información desde esta web. No hay backend, bandeja de consultas ni confirmación ficticia de envío. Para recepción directa por correo se necesitará conectar un servicio de envío.

## GitHub

Repositorio: https://github.com/SergioIniesta/PAGINA-WEB-LUZ-PROXIMA. El proyecto local utiliza este repositorio como remoto `origin`.

## Enlace de revisión en GitHub Pages

Enlace para el cliente: https://sergioiniesta.github.io/PAGINA-WEB-LUZ-PROXIMA/

El repositorio es público. El flujo `.github/workflows/pages.yml` publica la carpeta `dist` automáticamente en GitHub Pages con cada actualización de `main`.

## Antes de publicación comercial

Confirmar información de la empresa y aportar los datos del titular y el texto de privacidad que corresponda a la operativa real. Las tipografías se sirven desde la propia web y sus licencias están en `dist/assets/fonts`. No se han añadido analítica ni cookies propias. La política de seguridad bloquea envíos HTML convencionales y conexiones de scripts a servicios externos; deberá revisarse al conectar un servicio de recepción.

Los archivos con datos de clientes no deben guardarse en `dist` ni en el repositorio público. Las extensiones habituales de hojas de cálculo y bases de datos están excluidas de Git como protección adicional; esto no sustituye permisos, copias de seguridad ni cifrado. La carpeta de este proyecto está dentro de OneDrive: no debe utilizarse como ubicación de una base de datos que se pretenda exclusivamente local.
