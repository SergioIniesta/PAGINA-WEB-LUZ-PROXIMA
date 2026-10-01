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
Object.assign(english, {
  "Servicios": "Services",
  "Cómo funciona": "How it works",
  "Dudas": "FAQs",
  "Así te ayudamos": "How we help",
  "Servicios de luz, gas y energía solar": "Electricity, gas and solar services",
  "ENERGÍA A TU MEDIDA": "ENERGY THAT FITS",
  "No hay dos consumos iguales.": "No two energy needs are alike.",
  "Por eso, empezamos por escucharte.": "That’s why we start by listening.",
  "Hogares": "Homes",
  "Tu casa, tus horarios.": "Your home, your routine.",
  "Para entender lo que pagas y encontrar una tarifa que se adapte a tu día a día.": "Understand what you pay and find a plan that fits your daily routine.",
  "Quiero revisar la energía de mi hogar.": "I’d like to review my home energy.",
  "Revisar la energía de mi hogar": "Review my home energy",
  "Negocios": "Businesses",
  "Tu energía también cuenta.": "Your energy matters, too.",
  "Para comercios, oficinas y pequeños negocios que quieren revisar sus costes de luz y gas.": "For shops, offices and small businesses looking to review their electricity and gas costs.",
  "Quiero revisar la energía de mi negocio.": "I’d like to review my business energy.",
  "Revisar la energía de mi negocio": "Review my business energy",
  "Industria": "Industry",
  "Cada consumo es distinto.": "Every energy need is different.",
  "Para instalaciones con mayores necesidades energéticas y proyectos de autoconsumo solar.": "For sites with greater energy needs and solar self-consumption projects.",
  "Quiero asesoramiento para una instalación industrial.": "I’d like advice for an industrial site.",
  "Consultar sobre mi instalación": "Discuss my site",
  "02 / ASÍ DE FÁCIL": "02 / KEEPING IT SIMPLE",
  "De la duda a la decisión.": "From questions to clarity.",
  "Contigo, paso a paso.": "With you, step by step.",
  "Empezamos por tu factura": "Let’s start with your bill",
  "Nos cuentas tu caso": "Tell us about your needs",
  "Hogar, negocio o industria. Hablamos de tu consumo y de lo que te gustaría mejorar.": "Home, business or industry. We discuss your energy use and what you would like to improve.",
  "Revisamos las opciones": "We review the options",
  "Estudiamos tu tarifa y las alternativas de las compañías con las que trabajamos.": "We review your plan and alternatives from the companies we work with.",
  "Tú decides con claridad": "You make an informed choice",
  "Te explicamos las condiciones para que valores si te interesa dar el siguiente paso.": "We explain the terms so you can decide whether to take the next step.",
  "Asesoramiento gratuito. La decisión siempre es tuya.": "Free advice. The decision is always yours.",
  "TU FACTURA, MÁS CLARA": "YOUR BILL, MADE CLEAR",
  "Miramos el conjunto.": "We look at the whole picture.",
  "Consumo y horarios": "Consumption and timing",
  "Cuánta energía usas y en qué momentos.": "How much energy you use and when.",
  "Potencia y costes fijos": "Power capacity and fixed costs",
  "Lo que pagas además de tu consumo.": "What you pay beyond your energy use.",
  "Condiciones y extras": "Terms and extras",
  "Permanencia, servicios y duración de descuentos.": "Commitments, services and discount periods.",
  "Entender antes de elegir": "Understand before you choose",
  "LOS DETALLES IMPORTAN": "DETAILS MATTER",
  "Una buena tarifa es más": "A good plan is more",
  "que un buen precio.": "than a good price.",
  "Un descuento llamativo no cuenta toda la historia. Te ayudamos a entender las condiciones y a valorar las opciones según tu forma de consumir.": "An eye-catching discount does not tell the whole story. We help you understand the terms and assess options based on how you use energy.",
  "¿Tienes una factura a mano? Te servirá para consultar tu consumo y tu tarifa cuando hablemos. Para empezar, basta con contarnos qué necesitas.": "Have a bill handy? It will help you check your consumption and plan when we talk. To get started, just tell us what you need.",
  "Quiero entender mi factura": "I want to understand my bill",
  "03 / SIN DUDAS": "03 / YOUR QUESTIONS",
  "Las cosas claras.": "Let’s make it clear.",
  "Desde el principio.": "From the start.",
  "Respuestas sencillas para dar el primer paso con tranquilidad.": "Simple answers to help you take the first step with confidence.",
  "Tengo otra pregunta": "I have another question",
  "¿Cuánto cuesta vuestro asesoramiento?": "How much does your advice cost?",
  "Nuestro asesoramiento es gratuito y sin compromiso. Los importes y condiciones de una tarifa o de una instalación solar se valoran por separado, antes de que decidas contratar.": "Our advice is free and comes with no obligation. The costs and terms of an energy plan or solar installation are assessed separately before you decide to sign up.",
  "¿Qué necesitáis para empezar?": "What do you need to get started?",
  "Cuéntanos si buscas ayuda con luz, gas o energía solar y si es para tu hogar o tu negocio. Una factura reciente puede ayudarte a consultar los datos de consumo cuando hablemos; no necesitas adjuntarla en esta web.": "Tell us whether you need help with electricity, gas or solar energy, and whether it is for your home or business. A recent bill can help you check consumption details when we talk; you do not need to upload it here.",
  "¿Tengo que cambiar de compañía?": "Do I have to change supplier?",
  "Pedir asesoramiento no te obliga a cambiar ni a contratar. Revisamos tu situación y te explicamos las alternativas para que decidas si alguna encaja contigo.": "Asking for advice does not commit you to switching or signing up. We review your situation and explain the alternatives so you can decide whether one suits you.",
  "¿Podéis decirme cuánto voy a ahorrar?": "Can you tell me how much I will save?",
  "El posible ahorro depende de tu consumo, tu contrato actual y las condiciones de las opciones disponibles. Necesitamos revisar tu caso antes de hablar de cifras; no hay un ahorro garantizado para todos.": "Potential savings depend on your consumption, current contract and the terms of available options. We need to review your situation before discussing figures; there is no guaranteed saving for everyone.",
  "¿También asesoráis a negocios e industria?": "Do you also advise businesses and industry?",
  "Sí. Estudiamos las necesidades de hogares, negocios e instalaciones industriales. Cuéntanos tu actividad y qué te gustaría revisar para orientar la consulta.": "Yes. We look at the needs of homes, businesses and industrial sites. Tell us about your activity and what you would like to review so we can guide your enquiry.",
  "¿Instaláis las placas solares vosotros?": "Do you install solar panels yourselves?",
  "Colaboramos con empresas de instalación solar. Te orientamos para explorar una solución para tu vivienda o instalación industrial; la viabilidad, el presupuesto y las condiciones deben concretarse para cada proyecto.": "We work with solar installation companies. We help you explore a solution for your home or industrial site; feasibility, pricing and terms must be established for each project.",
  "¿Qué pasa cuando relleno el formulario?": "What happens when I complete the form?",
  "La web prepara un mensaje que puedes revisar y enviar por WhatsApp. No se envía automáticamente ni se guarda aquí. Si prefieres, puedes llamarnos o escribirnos por correo.": "The website prepares a message for you to review and send through WhatsApp. It is not sent automatically or stored here. You can also call or email us.",
  "04 / CONTÁCTANOS": "04 / CONTACT US",
  "Cuéntanos tu caso. Revisarás el mensaje antes de enviarlo.": "Tell us about your needs. You can review the message before sending it.",
  "¿Por dónde empezamos?": "Where shall we start?",
  "Quiero revisar mi tarifa de luz.": "I’d like to review my electricity plan.",
  "Luz": "Electricity",
  "Quiero revisar mi tarifa de gas.": "I’d like to review my gas plan.",
  "Gas": "Gas",
  "Me gustaría informarme sobre una instalación de energía solar.": "I’d like to find out about a solar installation.",
  "Energía solar": "Solar energy",
  "05 / COMERCIALES": "05 / SALES PARTNERS",
  "La buena energía": "Good energy",
  "también se comparte.": "is worth sharing.",
  "¿Eres profesional del sector y quieres hablar con Luz Próxima? Cuéntanos tu experiencia o tu propuesta de colaboración.": "Are you an energy professional interested in talking to Luz Próxima? Tell us about your experience or partnership proposal.",
  "Me gustaría hablar sobre una colaboración comercial con Luz Próxima.": "I’d like to discuss a sales partnership with Luz Próxima.",
  "Hablemos de colaboración": "Let’s discuss a partnership",
  "CONECTAMOS BUENA ENERGÍA": "CONNECTING GOOD ENERGY",
  "Preguntas frecuentes": "Frequently asked questions",
  "Comerciales": "Sales team",
  "Contacto rápido": "Quick contact",
  "Llamar": "Call",
  "Revisar mi tarifa": "Review my plan"
});
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
