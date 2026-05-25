(function () {
  // 1. Crear el contenedor del chatbot e insertarlo al final del cuerpo de la web
  const div = document.createElement('div');
  div.id = 'myLandbot';
  div.style.width = '100%';
  div.style.height = '500px';
  div.style.minHeight = '500px';
  div.style.backgroundColor = 'transparent';
  document.body.appendChild(div);

  // 2. Cargar el script de Landbot
  const script = document.createElement('script');
  script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
  script.async = true;

  script.onload = function () {
    if (window.Landbot && window.Landbot.Container) {
      new window.Landbot.Container({
        container: '#myLandbot',
        configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
      });
    }
  };

  document.body.appendChild(script);
})();
