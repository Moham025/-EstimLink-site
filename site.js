const button = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
if (button && menu) {
  const close = (focus = false) => {
    button.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    if (focus) button.focus();
  };
  button.hidden = false;
  document.documentElement.classList.add('has-js');
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    menu.classList.toggle('is-open', expanded);
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') close(true);
  });
  document.addEventListener('click', event => { if (!event.target.closest('.site-header')) close(); });
  matchMedia('(min-width: 960px)').addEventListener('change', () => close());
}
