# Bienvenido a tu proyecto de sitio web con IA

## Instalación y uso

Asegúrate de tener **Node.js 18+** instalado.

```bash
# Clonar el repositorio
git clone https://github.com/gustavocevallos/sitio-web-lovable.git
cd sitio-web-lovable

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en https://sitio-web-lovable.vercel.app/.

## Scripts disponibles

| Comando           | Descripción                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo con hot-reload      |
| `npm run build`   | Genera el build de producción                        |
| `npm run build:dev` | Genera el build en modo desarrollo                 |
| `npm run preview` | Previsualiza el build de producción localmente       |
| `npm run lint`    | Ejecuta ESLint para revisar el código                |
| `npm run test`    | Ejecuta los tests una vez                            |
| `npm run test:watch` | Ejecuta los tests en modo observador              |

## Despliegue

El proyecto está desplegado en **Vercel** con integración continua desde la rama `main`. Cada push a `main` genera un nuevo despliegue automáticamente.

Para desplegar tu propia instancia:

1. Haz fork del repositorio
2. Importa el proyecto en [Vercel](https://vercel.com/)
3. Vercel detectará automáticamente la configuración de Vite

## Contribuir

1. Haz fork del repositorio
2. Crea una rama para tu feature: `git checkout -b feature/mi-feature`
3. Realiza tus cambios y haz commit: `git commit -m 'feat: agregar mi feature'`
4. Haz push a la rama: `git push origin feature/mi-feature`
5. Abre un Pull Request

## Licencia

Este proyecto es privado. Todos los derechos reservados.
