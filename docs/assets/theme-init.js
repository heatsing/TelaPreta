(() => {
  const storageKey = 'telapreta-theme';
  let theme = 'light';
  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') theme = saved;
    if (saved === 'system') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      window.localStorage.setItem(storageKey, theme);
    }
  } catch {}

  const root = document.documentElement;
  root.dataset.theme = theme;
  root.dataset.themePreference = theme;
  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = theme === 'dark' ? '#171817' : '#f7f7f5';
})();
