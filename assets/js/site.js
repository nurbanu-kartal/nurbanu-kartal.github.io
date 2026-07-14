const button = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');
if (button && nav) {
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'CLOSE' : 'MENU';
  });
  nav.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = 'MENU';
    }
  });
}
document.querySelectorAll('[data-current-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});
