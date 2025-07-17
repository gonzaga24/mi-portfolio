# Portfolio Personal de Álex Gonzaga

Este proyecto es un portfolio personal desarrollado con React y Vite, diseñado para mostrar mi experiencia, proyectos y facilitar el contacto profesional.

## Descripción

El portfolio incluye:
- **Página principal**: Presentación personal, descarga de CV y resumen de habilidades.
- **Sección de proyectos**: Muestra de proyectos destacados, cada uno con su descripción e imagen representativa.
- **Formulario de contacto**: Permite a los visitantes enviarme mensajes directamente, usando la API de Formspree (sin backend propio).
- **Navegación**: Menú intuitivo y diseño responsive gracias a Bootstrap.

## Proceso de creación

1. **Inicialización del proyecto**
   - Se creó el proyecto con Vite y React para aprovechar la velocidad de desarrollo y recarga en caliente.
   - Se configuró ESLint para mantener buenas prácticas de código.

2. **Estructura y estilos**
   - Se organizó el código en componentes reutilizables: `Header`, `Footer`, `ProjectCard`, etc.
   - Se utilizó Bootstrap para el diseño responsive y algunos estilos personalizados en CSS.

3. **Gestión de rutas**
   - Se implementó React Router para la navegación entre páginas: inicio, proyectos, contacto y página de error 404.

4. **Listado de proyectos**
   - Los proyectos se gestionan desde un archivo JSON, facilitando su edición y escalabilidad.

5. **Formulario de contacto**
   - Se integró Formspree para enviar mensajes sin necesidad de backend propio.
   - Se añadió validación y feedback visual tras el envío.

6. **Recursos y assets**
   - Imágenes, iconos y el CV se almacenan en la carpeta `public/assets` y `src/assets`.

7. **Despliegue y pruebas**
   - El proyecto se probó localmente y está listo para ser desplegado en cualquier hosting estático compatible con React (por ejemplo, Vercel o Netlify).

## Tecnologías utilizadas
- React
- Vite
- Bootstrap
- Formspree
- ESLint

## Autor
Álex Gonzaga
- [GitHub](https://github.com/gonzaga24)
- [LinkedIn](https://www.linkedin.com/in/alex-josue-gonzaga-tinitana-867a17367)

---
¡Gracias por visitar mi portfolio!
