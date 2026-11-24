(() => {
  const link = document.querySelector('[data-redirect]');
  const fallback = document.querySelector('[data-legacy-routes]');
  const path = location.pathname.replace(/\/(?:index\.html)?$/, '') + '/';
  const target = link?.href || (fallback && JSON.parse(fallback.dataset.legacyRoutes)[path]);
  if (!target) return;

  const destination = new URL(target, location.href);
  destination.search = location.search;
  destination.hash = location.hash;
  if (destination.href !== location.href) location.replace(destination.href);
})();
