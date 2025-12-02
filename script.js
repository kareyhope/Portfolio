// Menu toggle (mobile)
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
menuToggle && menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('show');
});

// Simple contact form validation (front-end)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email || !message) {
      status.textContent = 'Veuillez remplir tous les champs.';
      return;
    }
    if (!email.includes('@') || email.length < 5) {
      status.textContent = 'Veuillez saisir un email valide.';
      return;
    }

    // Ici normalement on enverrait les données à un serveur.
    status.textContent = 'Message prêt à être envoyé (placeholder).';
    form.reset();
    setTimeout(()=> status.textContent = '', 4000);
  });
}

// Current year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
