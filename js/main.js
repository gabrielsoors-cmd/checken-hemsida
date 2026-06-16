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
function toggleMobileNav(btn) {
  const nav = document.querySelector('.navbar nav');
  const isOpen = nav.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
  btn.setAttribute('aria-label', isOpen ? 'Stäng meny' : 'Öppna meny');
}

/* Stäng meny om man klickar utanför */
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.navbar nav');
  const toggle = document.querySelector('.nav-mobile-toggle');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Öppna meny');
  }
});

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

/* --- Navbar: förstärk vid scroll --- */
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(248, 244, 237, 0.98)';
    navbar.style.boxShadow = '0 1px 12px rgba(35,31,32,0.08)';
  } else {
    navbar.style.background = 'rgba(248, 244, 237, 0.95)';
    navbar.style.boxShadow = 'none';
  }
}, { passive: true });
