/* ================================================================
   CHECKEN — main.js
   ================================================================ */

/* --- År i footer --- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* --- Mobil-nav --- */
function toggleMobileNav(btn) {
  const nav = document.querySelector('.navbar nav');
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  btn.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
}
function closeMobileNav() {
  const nav = document.querySelector('.navbar nav');
  const toggle = document.querySelector('.nav-mobile-toggle');
  if (!nav || !toggle || !nav.classList.contains('open')) return;
  nav.classList.remove('open');
  toggle.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Öppna meny');
}
document.addEventListener('click', function (e) {
  const nav = document.querySelector('.navbar nav');
  const toggle = document.querySelector('.nav-mobile-toggle');
  if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) closeMobileNav();
  if (e.target.closest('.navbar nav a')) closeMobileNav();
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMobileNav(); });

/* --- Scroll-reveal (innehållet syns alltid om JS eller IntersectionObserver saknas) --- */
const revealEls = document.querySelectorAll('.reveal, .reveal-img');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('visible'));
}

/* --- Navbar-linje vid scroll + lätt parallax på hero-bilden --- */
const navbar = document.querySelector('.navbar');
const heroImg = document.querySelector('.hero-image-wrap');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking = false;
function onScroll() {
  const y = window.scrollY;
  if (navbar) navbar.classList.toggle('scrolled', y > 8);
  if (heroImg && !reduceMotion && y < window.innerHeight) {
    heroImg.style.transform = 'translate3d(0,' + (y * 0.18).toFixed(1) + 'px,0)';
  }
  ticking = false;
}
window.addEventListener('scroll', () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();
