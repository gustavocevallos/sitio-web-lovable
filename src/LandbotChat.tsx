import { useEffect } from 'react';

export default function LandbotChat() {
  useEffect(() => {
    // 1. Crear dinámicamente el script de Landbot
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
    script.async = true;

    script.onload = () => {
      // 2. Inicializar Landbot una vez que el script se cargue
      // @ts-ignore - Para que TypeScript no proteste por la variable global Landbot
      if (window.Landbot) {
        // @ts-ignore
        new window.Landbot.Container({
          container: '#myLandbot',
          configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3412687-R7QF0JBGNGWE21NU/index.json',
        });
      }
    };

    document.body.appendChild(script);

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="myLandbot" 
      style={{ width: '100%', height: '500px', marginBottom: '20px' }} 
    />
  );
}
