document.addEventListener('DOMContentLoaded', () => {
  /* HAMBURGER & MOBILE NAV */
  const hamburger = document.querySelector('.rm-hamburger');
  const nav = document.querySelector('.rm-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      nav.classList.toggle('open');
    });
  }

  /* J.D. POWER ACCORDION */
  const toggle = document.querySelector('.rm-disclaimer-toggle');
  const text   = document.querySelector('.rm-disclaimer-text');
  if (toggle && text) {
    text.hidden = true;                      // start collapsed
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      text.hidden = expanded;
    });
  }
});