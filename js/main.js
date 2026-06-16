/* ================================================================
   CHECKEN — main.js
   ================================================================ */

/* --- Sätt rätt år i footer automatiskt --- */
document.getElementById('year').textContent = new Date().getFullYear();

/* --- Cookie-banner --- */
function acceptCookies() {
  localStorage.setItem('checken_cookies', 'accepted');
  document.getElementById('cookie-banner').classList.add('hidden');
  // Aktivera Google Analytics om det inte redan är aktivt
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
}
function declineCookies() {
  localStorage.setItem('checken_cookies', 'declined');
  document.getElementById('cookie-banner').classList.add('hidden');
  if (typeof gtag === 'function') {
    gtag('consent', 'update', { analytics_storage: 'denied' });
  }
}
// Visa inte banner om användaren redan svarat
(function() {
  const consent = localStorage.getItem('checken_cookies');
  if (consent) {
    document.getElementById('cookie-banner').classList.add('hidden');
    if (consent === 'declined' && typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  }
})();

/* --- Mobil-nav toggle --- */
function toggleMobileNav() {
  const nav = document.querySelector('.navbar nav');
  const toggle = document.querySelector('.nav-mobile-toggle');
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', isOpen);
  toggle.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
}

/* --- Scroll-animation med IntersectionObserver --- */
const fadeEls = document.querySelectorAll('.step, .about-inner, .gallery-grid figure, .placeholder-card, .cta-section');
fadeEls.forEach(el => el.classList.add('fade-in'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observer.observe(el));

/* --- Navbar: mörkna vid scroll --- */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(15, 9, 4, 0.97)';
  } else {
    navbar.style.background = 'rgba(26, 16, 8, 0.85)';
  }
}, { passive: true });
