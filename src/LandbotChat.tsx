import { useEffect } from 'react';

export default function LandbotChat() {
  useEffect(() => {
    let myLandbotInstance: any = null;
    let checkInterval: any = null;

    // 1. Crear el elemento script de forma tradicional
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    script.async = true;

    script.onload = () => {
      // 2. Cuando el script cargue, revisamos periódicamente hasta que 'Landbot' exista en el objeto window
      checkInterval = setInterval(() => {
        const globalWindow = window as any;
        
        if (globalWindow.Landbot && globalWindow.Landbot.Container) {
          // Detenemos el intervalo porque ya encontramos la librería
          clearInterval(checkInterval);

          const containerElement = document.querySelector('#myLandbot');
          if (containerElement) {
            myLandbotInstance = new globalWindow.Landbot.Container({
              container: '#myLandbot',
              configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
            });
          }
        }
      }, 50); // Revisa cada 50ms (es súper rápido)
    };

    script.onerror = (err) => {
      console.error("Error al cargar el script de Landbot:", err);
    };

    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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
        minHeight: '500px',
        backgroundColor: 'transparent'
      }} 
    />
  );
}
