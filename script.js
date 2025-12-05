// ===== Menu toggle (mobile) =====
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');

    // Mise à jour aria-expanded pour accessibilité
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });
}

// ===== Formulaire de contact (validation front-end) =====
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
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

    status.textContent = 'Message prêt à être envoyé (placeholder).';
    form.reset();
    setTimeout(() => (status.textContent = ''), 4000);
  });
}

// ===== Affichage automatique de l'année =====
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ===== Garantir le fonctionnement des liens du menu =====
if (nav) {
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      // Fermer le menu mobile après clic sur un lien
      nav.classList.remove('show');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
