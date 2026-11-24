(() => {
  const { hostname } = window.location;
  if (hostname !== 'telapreta.cc' && hostname !== 'www.telapreta.cc') return;

  const scriptId = 'telapreta-gtm-container';
  if (document.getElementById(scriptId)) return;

  const dataLayer = window.dataLayer ??= [];
  const started = new Date();
  dataLayer.push({ 'gtm.start': started.getTime(), event: 'gtm.js' });
  window.gtag ??= function gtag() { dataLayer.push(arguments); };
  window.gtag('js', started);

  const script = document.createElement('script');
  script.id = scriptId;
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WVJNH9TJ';
  document.head.append(script);
})();
