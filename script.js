/* ===================================================================
   Hollywood Pães e Conveniência — Interações
   =================================================================== */

// Menu mobile (abrir/fechar)
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const aberto = nav.classList.toggle('open');
  navToggle.classList.toggle('open', aberto);
  navToggle.setAttribute('aria-expanded', aberto);
});

// Fecha o menu ao clicar em um link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Animação de entrada das seções ao rolar
const reveals = document.querySelectorAll('.card, .menu-col, .review, .section-head, .delivery-card');
reveals.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));
