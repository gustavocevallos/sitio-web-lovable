(function () {
  // 1. Cargamos el script estándar de Landbot
  const script = document.createElement('script');
  script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
  script.async = true;

  script.onload = function () {
    if (window.Landbot) {
      // 2. IMPORTANTE: Cambiamos "Container" por "Livechat" para que sea flotante
      new window.Landbot.Livechat({
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
      });
    }
  };

  document.body.appendChild(script);
})();
