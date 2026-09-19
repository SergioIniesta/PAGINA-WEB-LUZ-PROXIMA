# Luz Próxima

Primera versión de la web corporativa, adaptable a móviles, sin dependencias de compilación.

## Ver la web

Abre esta carpeta en Visual Studio Code y pulsa F5 (configuración «Ver Luz Próxima»), o ejecuta `node server.mjs`. La dirección local es http://127.0.0.1:4173.

## Contenido

- `dist/index.html`: portada, Conócenos, Contáctanos y Comerciales.
- `dist/styles.css`: diseño adaptable y colores corporativos.
- `dist/app.js`: navegación y preparación de consulta por WhatsApp.
- `dist/languages.js`: traducciones editoriales al inglés y selector de idioma.
- `dist/assets/logo-original.jpeg`: logotipo aportado, sin modificar.

## Formulario

Apellidos y correo son opcionales. El idioma seleccionado se aplica a etiquetas, instrucciones, errores y mensaje preparado para WhatsApp; nunca se traduce ni reemplaza lo escrito por el visitante.

## Idiomas

Selector nativo accesible en la cabecera, con Español y English. Español por defecto; `?lang=en` abre la versión inglesa y `?lang=es` la española. La selección se conserva en la URL al recargar, sin cookies, almacenamiento local ni servicio externo de traducción. El logotipo original mantiene su diseño y texto de marca.

Los textos españoles están en HTML. Si se modifica uno, actualizar su entrada en `dist/languages.js`; los mensajes dinámicos del formulario están en `dist/app.js`. Las traducciones modifican nodos de texto y atributos, conservando los campos y los iconos. El HTML sigue disponible en español sin JavaScript.

Referencias consultadas para las versiones y selección de idioma: https://glovoapp.com/es y https://www.ikea.com/es/es/customer-service/knowledge/articles/52d3fd61-b558-4fg6-bd66-e95f96dg8156.html .

## Envío de consultas

Valida nombre, apellidos, teléfono, correo y descripción. Prepara un enlace de WhatsApp al 661 114 453. El visitante revisa y envía el mensaje en WhatsApp. No se almacena ni envía automáticamente información desde esta web. No hay backend, bandeja de consultas ni confirmación ficticia de envío. Para recepción directa por correo se necesitará conectar un servicio de envío.

## GitHub

Repositorio: https://github.com/SergioIniesta/PAGINA-WEB-LUZ-PROXIMA. El proyecto local utiliza este repositorio como remoto `origin`.

## Enlace de revisión en GitHub Pages

Enlace para el cliente: https://sergioiniesta.github.io/PAGINA-WEB-LUZ-PROXIMA/

El repositorio es público. El flujo `.github/workflows/pages.yml` publica la carpeta `dist` automáticamente en GitHub Pages con cada actualización de `main`.

## Antes de publicación comercial

Confirmar información de la empresa y aportar los datos del titular y el texto de privacidad que corresponda a la operativa real. Las tipografías se sirven desde la propia web y sus licencias están en `dist/assets/fonts`. No se han añadido analítica ni cookies propias. La política de seguridad bloquea envíos HTML convencionales y conexiones de scripts a servicios externos; deberá revisarse al conectar un servicio de recepción.

Los archivos con datos de clientes no deben guardarse en `dist` ni en el repositorio público. Las extensiones habituales de hojas de cálculo y bases de datos están excluidas de Git como protección adicional; esto no sustituye permisos, copias de seguridad ni cifrado. La carpeta de este proyecto está dentro de OneDrive: no debe utilizarse como ubicación de una base de datos que se pretenda exclusivamente local.
