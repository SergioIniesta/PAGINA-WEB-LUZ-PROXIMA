// Static editorial translations. Original text nodes are retained so changing
// language never rebuilds the form or overwrites anything the visitor typed.
const english = {
  'Saltar al contenido':'Skip to content',
  'ASESORES ENERGÉTICOS':'ENERGY ADVISERS',
  'Conócenos':'About us', 'Contáctanos':'Contact us', 'Comerciales':'Sales team',
  'TU ASESORÍA ENERGÉTICA, CERCA DE TI':'YOUR ENERGY ADVISERS, CLOSE TO YOU',
  'Menos factura.':'Lower bills.', 'Más':'More', 'tranquilidad':'peace of mind',
  'La energía ya es bastante complicada.':'Energy is complicated enough.',
  'Nosotros te lo ponemos fácil: buscamos una tarifa que encaje contigo, sin cobrarte por nuestro asesoramiento.':'We make it simple: we look for an energy plan that suits you, with no charge for our advice.',
  'Quiero revisar mi tarifa':'Review my energy plan',
  'Asesoramiento gratuito':'Free advice', 'Sin compromiso':'No obligation',
  'UNA BUENA IDEA PARA TU ENERGÍA':'A BRIGHT IDEA FOR YOUR ENERGY',
  'Luz':'Electricity', 'Gas':'Gas', 'Energía solar':'Solar energy',
  'Tu ahorro empieza':'Your savings start', 'con una conversación.':'with a conversation.',
  'compañías de luz y gas':'electricity and gas companies', 'con las que trabajamos':'we work with',
  'por nuestro':'for our', 'asesoramiento':'advice', 'Soluciones para hogares,':'Solutions for homes,',
  'negocios e industria':'businesses and industry', 'BUENA ENERGÍA.':'GOOD ENERGY.',
  'MEJORES DECISIONES.':'BETTER DECISIONS.', '01 / CONÓCENOS':'01 / ABOUT US',
  'De tu lado.':'On your side.', 'Y del de tu bolsillo.':'And your budget’s, too.',
  'Somos Luz Próxima. Creemos que entender tu factura y elegir bien tu energía debería ser fácil.':'We are Luz Próxima. We believe understanding your bill and choosing the right energy plan should be easy.',
  'Por eso escuchamos lo que necesitas, estudiamos tu consumo y buscamos entre las opciones de más de 50 compañías de luz y gas con las que trabajamos. Te explicamos las alternativas con claridad para ayudarte a encontrar la tarifa que mejor se adapte a ti.':'We listen to your needs, review your consumption and explore options from more than 50 electricity and gas companies we work with. We explain the alternatives clearly to help you find the plan that suits you best.',
  'Sin cobrarte por nuestro asesoramiento y sin decisiones a ciegas. Tanto si quieres revisar la energía de tu hogar como la de tu negocio, tienes un equipo cercano para acompañarte.':'Our advice comes at no cost to you, so you can make an informed choice. Whether you want to review your home or business energy plan, our friendly team is here to help.',
  'Luz que encaja contigo':'Electricity that suits you',
  'Revisamos tus hábitos de consumo y las condiciones de tu tarifa para buscar oportunidades de ahorro.':'We review your energy use and the terms of your plan to look for ways to save.',
  'Hablemos de luz':'Let’s talk electricity', 'Gas, con las cosas claras':'Gas, made clear',
  'Te ayudamos a comparar opciones y entender qué estás contratando, sin perderte entre condiciones.':'We help you compare options and understand what you are signing up for, without getting lost in the small print.',
  'Hablemos de gas':'Let’s talk gas', 'El sol también suma':'Put the sun to work',
  'Colaboramos con empresas de instalación solar para acercar el autoconsumo a viviendas e instalaciones industriales.':'We work with solar installation companies to help homes and industrial sites generate their own energy.',
  'Hablemos de solar':'Let’s talk solar', '02 / CONTÁCTANOS':'02 / CONTACT US',
  'Vamos a darle':'Let’s take', 'una vuelta':'another look', 'a tu':'at your', 'factura.':'bill.',
  'Cuéntanos qué necesitas. El primer paso para elegir mejor tu energía empieza aquí.':'Tell us what you need. Your first step towards a better energy choice starts here.',
  'LLÁMANOS':'CALL US', 'ESCRÍBENOS':'EMAIL US', 'Cerca de ti. Sin complicaciones.':'Here for you. Keeping it simple.',
  'Tu próxima buena decisión.':'Your next smart decision.',
  'Déjanos los detalles y prepara tu consulta.':'Fill in your details and prepare your enquiry.',
  'Nombre':'First name', 'Apellidos (opcional)':'Last name (optional)', 'Teléfono':'Phone number',
  'Correo electrónico (opcional)':'Email (optional)', '¿Qué estás buscando?':'What are you looking for?',
  'Primero prepararemos tu consulta. Al pulsar «Abrir WhatsApp», los datos que hayas incluido se comunicarán a WhatsApp para preparar el mensaje; tú decides si lo envías. Esta página no guarda el formulario. No incluyas DNI, datos bancarios ni información sensible.':'First, we will prepare your enquiry. When you select “Open WhatsApp”, the details you entered will be shared with WhatsApp to prepare the message; you decide whether to send it. This page does not store your form details. Do not include identity documents, bank details or sensitive information.',
  'Preparar consulta por WhatsApp':'Prepare WhatsApp enquiry', 'Abrir WhatsApp y enviar ↗':'Open WhatsApp and send ↗',
  '03 / COMERCIALES':'03 / SALES TEAM', 'Estamos preparando':'We’re getting ready', 'lo que viene.':'for what’s next.',
  'Estamos actualizando el área de comerciales.':'We are updating the sales team area.',
  'Pronto encontrarás aquí todas las novedades.':'You’ll find all the latest updates here soon.',
  'Mientras tanto, contacta con nosotros':'In the meantime, get in touch', 'PÁGINA EN ACTUALIZACIÓN':'PAGE BEING UPDATED',
  'Tu energía, bien asesorada.':'Expert advice for your energy.', 'Volver arriba ↑':'Back to top ↑',
  'Luz Próxima, inicio':'Luz Próxima, home', 'Navegación principal':'Main navigation', 'Idioma':'Language',
  'Ilustración de una bombilla con los servicios luz, gas y energía solar':'Illustration of a light bulb representing electricity, gas and solar energy',
  'Luz Próxima · Ahorra en tu factura energética':'Luz Próxima · Save on your energy bill',
  'Tu nombre':'Your first name', 'Tus apellidos':'Your last name', 'tu@email.com':'you@email.com',
  'Introduce al menos 9 dígitos. Puedes incluir espacios y el prefijo +.':'Enter at least 9 digits. You may include spaces and the + prefix.',
  'Quiero revisar mi tarifa, informarme sobre placas solares…':'I’d like to review my energy plan, find out about solar panels…',
  'Quiero revisar mi tarifa de luz.':'I’d like to review my electricity plan.',
  'Quiero revisar mi tarifa de gas.':'I’d like to review my gas plan.',
  'Me gustaría informarme sobre una instalación de energía solar.':'I’d like to find out about a solar installation.',
  'Luz Próxima · Tu energía, bien asesorada':'Luz Próxima · Expert advice for your energy',
  'Asesoramiento energético gratuito. Te ayudamos a encontrar una tarifa de luz y gas que encaje contigo y soluciones solares para viviendas e industria.':'Free energy advice. We help you find electricity and gas plans that suit you, and solar solutions for homes and industry.'
};
const translations = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
  const node = walker.currentNode;
  const source = node.textContent;
  if (Object.hasOwn(english, source.trim())) translations.push({node, source});
}
const translatedAttributes = [];
document.querySelectorAll('[aria-label], [placeholder], [title], [alt], [data-interest], meta[name="description"]').forEach(node => {
  for (const attr of ['aria-label', 'placeholder', 'title', 'alt', 'data-interest', 'content']) {
    const source = node.getAttribute(attr);
    if (source && Object.hasOwn(english, source)) translatedAttributes.push({node, attr, source});
  }
});
const spanishTitle = document.title;
const languageSelect = document.querySelector('#language');
function applyLanguage(language, updateUrl = false) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'es';
  languageSelect.value = document.documentElement.lang;
  for (const {node, source} of translations) node.textContent = isEnglish ? source.replace(source.trim(), english[source.trim()]) : source;
  for (const {node, attr, source} of translatedAttributes) node.setAttribute(attr, isEnglish ? english[source] : source);
  document.title = isEnglish ? english[spanishTitle] : spanishTitle;
  if (updateUrl) {
    const url = new URL(location.href);
    url.searchParams.set('lang', document.documentElement.lang);
    history.replaceState(null, '', url);
    document.dispatchEvent(new Event('languagechange'));
  }
}
languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value, true));
window.addEventListener('popstate', () => { applyLanguage(new URL(location.href).searchParams.get('lang')); document.dispatchEvent(new Event('languagechange')); });
applyLanguage(new URL(location.href).searchParams.get('lang'));
document.querySelector('.language-picker').hidden = false;
