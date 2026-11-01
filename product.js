const views = {
  dqe: ['product-dqe.png', 'Table DQE : lots de travaux, montants et génération du récapitulatif.'],
  quantites: ['product-quantites.png', 'Feuilles de quantités : comptages, longueurs, surfaces et volumes.'],
  accueil: ['product-accueil.png', 'Accueil : palettes de construction et recherche de prix Mercurial.'],
  projets: ['product-projets.png', 'Profil : liste des projets enregistrés sur le poste.']
};
const tabs = [...document.querySelectorAll('[data-view]')];
const panel = document.querySelector('#tour-panel');
const picture = document.querySelector('#tour-image');
const caption = document.querySelector('#tour-caption');
function selectView(tab) {
  const view = views[tab.dataset.view];
  if (!view || !picture) return;
  tabs.forEach(item => {
    item.setAttribute('aria-selected', String(item === tab));
    item.tabIndex = item === tab ? 0 : -1;
  });
  picture.src = '/assets/' + view[0];
  picture.alt = view[1];
  panel.setAttribute('aria-labelledby', tab.id);
  caption.textContent = view[1] + ' Cliquez sur la capture pour l’agrandir.';
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectView(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectView(tabs[next]); tabs[next].focus(); }
  });
});
const dialog = document.querySelector('.image-dialog');
let previousFocus;
if (dialog) {
  document.querySelectorAll('[data-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      const source = button.querySelector('img');
      const enlarged = dialog.querySelector('img');
      enlarged.src = source.src;
      enlarged.alt = source.alt;
      dialog.querySelector('p').textContent = source.alt;
      previousFocus = button;
      dialog.showModal();
    });
  });
  dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
  dialog.addEventListener('close', () => previousFocus?.focus());
}
