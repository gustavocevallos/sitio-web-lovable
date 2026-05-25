import { useEffect } from 'react';

// Declaramos la interfaz para que TypeScript sepa exactamente qué es Landbot
declare global {
  interface Window {
    Landbot: any;
  }
}

export default function LandbotChat() {
  useEffect(() => {
    // 1. Crear el elemento script clásico (no módulo) para evitar restricciones de importación
    const script = document.createElement('script');
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
    script.async = true;

    // 2. Ejecutar la inicialización SOLO cuando el script garantice que terminó de cargarse
    script.onload = () => {
      if (window.Landbot && window.Landbot.Container) {
        new window.Landbot.Container({
          container: '#myLandbot',
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
        });
      }
    };

    script.onerror = () => {
      console.error('No se pudo cargar el script de Landbot');
    };

    document.body.appendChild(script);

    // 3. Limpieza al desmontar el componente
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      id="myLandbot"
      style={{
        width: '100%',
        height: '500px',
        minHeight: '500px',
        backgroundColor: 'transparent',
      }}
    />
  );
}
