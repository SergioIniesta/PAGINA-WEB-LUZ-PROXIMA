const links = [...document.querySelectorAll('nav a')];
function markActive(id) { for (const link of links) { const active = link.hash === `#${id}`; link.classList.toggle('active', active); if(active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); } }
const observer = new IntersectionObserver(entries => { for(const entry of entries) if(entry.isIntersecting) markActive(entry.target.id); }, {rootMargin: '-20% 0px -45% 0px', threshold: 0});
document.querySelectorAll('main>section[id]').forEach(section => observer.observe(section));
links.forEach(link => link.addEventListener('click', () => markActive(link.hash.slice(1))));
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => { const field = document.querySelector('[name="descripcion"]'); if (!field.value.trim()) field.value = link.dataset.interest; invalidateQuery(); }));
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const send = document.querySelector('#send-query');
function invalidateQuery(){ send.hidden = true; send.removeAttribute('href'); status.textContent = ''; }
form.addEventListener('input', invalidateQuery);
const isEnglish = () => document.documentElement.lang === 'en';
// Localised errors also work when the browser's own UI uses another language.
form.noValidate = true;
function validateField(field) {
  field.setCustomValidity('');
  const validity = field.validity;
  let error = '';
  if (validity.valueMissing) error = isEnglish() ? 'Please complete this field.' : 'Completa este campo.';
  else if (validity.typeMismatch) error = isEnglish() ? 'Please enter a valid email address.' : 'Introduce un correo electrónico válido.';
  else if (validity.patternMismatch) error = isEnglish() ? 'Enter a valid phone number with at least 9 digits.' : 'Introduce un teléfono válido con al menos 9 dígitos.';
  else if (field.minLength > 0 && field.value && field.value.length < field.minLength) error = isEnglish() ? `Please enter at least ${field.minLength} characters.` : `Escribe al menos ${field.minLength} caracteres.`;
  field.setCustomValidity(error);
}
form.addEventListener('input', event => { if (event.target.matches('input, textarea')) validateField(event.target); });
document.addEventListener('languagechange', () => {
  invalidateQuery();
  form.querySelectorAll('input, textarea').forEach(field => field.setCustomValidity(''));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  for (const field of form.querySelectorAll('input, textarea')) { field.value = field.value.trim(); validateField(field); }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = isEnglish()
    ? `Hello, Luz Próxima. I would like some advice.\n\nName: ${data.get('nombre')} ${data.get('apellidos')}\nPhone: ${data.get('telefono')}\nEmail: ${data.get('email')}\n\nMy enquiry:\n${data.get('descripcion')}`
    : `Hola, Luz Próxima. Me gustaría recibir asesoramiento.\n\nNombre: ${data.get('nombre')} ${data.get('apellidos')}\nTeléfono: ${data.get('telefono')}\nCorreo: ${data.get('email')}\n\nMi consulta:\n${data.get('descripcion')}`;
  send.href = `https://wa.me/34661114453?text=${encodeURIComponent(message)}`;
  send.hidden = false;
  status.textContent = isEnglish() ? 'Your enquiry is ready. Open WhatsApp to review and send it. No details have been sent yet.' : 'Consulta preparada. Abre WhatsApp para revisarla y enviarla. Todavía no se ha enviado ningún dato.';
  send.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
