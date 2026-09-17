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

Repositorio: https://github.com/SergioIniesta/PAGINA-WEB-LUZ-PROXIMA. El proyecto local utiliza este repositorio como remoto `origin`. Subir el código no publica automáticamente la web en Internet.

## Publicación en Cloudflare Pages

Web pública: https://luz-proxima.pages.dev/

Proveedor: Cloudflare Pages, plan gratuito, manteniendo el repositorio privado. Proyecto `luz-proxima` conectado a GitHub y primera publicación completada.

Configuración para la integración con GitHub:

- Repositorio: `SergioIniesta/PAGINA-WEB-LUZ-PROXIMA`.
- Rama de producción: `main`.
- Framework: `None`.
- Comando de compilación: `node --check dist/app.js`.
- Directorio de salida: `dist`.
- Directorio raíz: raíz del repositorio.
- Sin variables de entorno, funciones, bases de datos ni servicios de pago.

Los cambios subidos a `main` se publican automáticamente en https://luz-proxima.pages.dev/. Las ramas de revisión pueden generar vistas previas para recibir el OK del cliente antes de incorporarlas a `main`.

Guía oficial: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Antes de publicación comercial

Confirmar información de la empresa y aportar los datos del titular y el texto de privacidad que corresponda a la operativa real. La tipografía utiliza Google Fonts con alternativa local del sistema. No se han añadido analítica ni cookies propias.
