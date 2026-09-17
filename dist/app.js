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
form.addEventListener('submit', event => {
  event.preventDefault();
  for (const field of form.querySelectorAll('input, textarea')) field.value = field.value.trim();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const message = `Hola, Luz Próxima. Me gustaría recibir asesoramiento.\n\nNombre: ${data.get('nombre')} ${data.get('apellidos')}\nTeléfono: ${data.get('telefono')}\nCorreo: ${data.get('email')}\n\nMi consulta:\n${data.get('descripcion')}`;
  send.href = `https://wa.me/34661114453?text=${encodeURIComponent(message)}`;
  send.hidden = false;
  status.textContent = 'Consulta preparada. Abre WhatsApp para revisarla y enviarla. Todavía no se ha enviado ningún dato.';
  send.focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
