(() => {
  const storageKey = 'telapreta-theme';
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const root = document.documentElement;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  let preference = 'light';

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'system' || saved === 'dark') preference = saved;
  } catch {}

  function applyTheme() {
    const theme = preference === 'system' ? (system.matches ? 'dark' : 'light') : preference;
    root.dataset.theme = theme;
    root.dataset.themePreference = preference;
    themeColor.content = theme === 'dark' ? '#171817' : '#f7f7f5';
  }

  applyTheme();
  system.addEventListener('change', () => {
    if (preference === 'system') applyTheme();
  });

  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.theme-menu');
    menu.querySelector(`[value="${preference}"]`).checked = true;
    menu.addEventListener('change', (event) => {
      preference = event.target.value;
      applyTheme();
      try {
        window.localStorage.setItem(storageKey, preference);
      } catch {}
    });
  });
})();
