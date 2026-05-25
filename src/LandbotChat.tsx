import { useEffect } from 'react';

export default function LandbotChat() {
  useEffect(() => {
    let myLandbotInstance: any = null;

    const initLandbot = async () => {
      try {
        // 1. Importamos dinámicamente el módulo de Landbot
        // Esto garantiza que el archivo .mjs se descargue y ejecute correctamente en Vite
        await import('https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs' as any);

        // 2. Esperamos un breve instante (un tick de reloj) para asegurar que el DOM y la variable global estén listos
        setTimeout(() => {
          // @ts-ignore
          const LandbotGlobal = window.Landbot;

          if (LandbotGlobal && document.querySelector('#myLandbot')) {
            // @ts-ignore
            myLandbotInstance = new LandbotGlobal.Container({
              container: '#myLandbot',
              configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
            });
          } else {
            console.error("Landbot no se encontró en el objeto window o el contenedor #myLandbot no está en el DOM.");
          }
        }, 100);

      } catch (error) {
        console.error("Error al cargar el script de Landbot:", error);
      }
    };

    initLandbot();

    // Limpieza al desmontar el componente para evitar duplicados en React
    return () => {
      if (myLandbotInstance && typeof myLandbotInstance.destroy === 'function') {
        myLandbotInstance.destroy();
      }
    };
  }, []);

  return (
    <div 
      id="myLandbot" 
      style={{ 
        width: '100%', 
        height: '500px', 
        backgroundColor: '#f9f9f9', // Un fondo temporal para que veas si el contenedor se dibuja
        border: '1px dashed #ccc'   // Una línea punteada para verificar visualmente el espacio
      }} 
    />
  );
}
