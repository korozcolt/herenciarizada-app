# Herencia Rizada - Salud Capilar

## Descripción del Proyecto
El proyecto consiste en una aplicación web llamada **"Herencia Rizada"**, enfocada en la salud capilar. La aplicación permite a los usuarios realizar encuestas para determinar su tipo de cabello y recibir recomendaciones personalizadas de tratamientos. Además, cuenta con un panel de administración para gestionar usuarios y tratamientos.

La aplicación está desarrollada con las siguientes tecnologías:
- **Vue.js** (con TypeScript) para el frontend.
- **Vite** como herramienta de compilación y desarrollo.
- **Tailwind CSS** para los estilos.
- **Vue Router** para la navegación entre páginas.

El objetivo es que la aplicación sea completamente estática (sin backend) y se ejecute del lado del cliente, optimizada para dispositivos móviles.

---

## Estructura del Proyecto
El proyecto tiene la siguiente estructura de carpetas:
```bash
/herenciarizada-app/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── Login.vue
│ │ ├── Survey.vue
│ │ ├── AdminPanel.vue
│ │ └── UserView.vue
│ ├── router/
│ │ └── index.ts
│ ├── styles/
│ │ └── tailwind.css
│ ├── App.vue
│ └── main.ts
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

---

## Configuración del Proyecto

### Tecnologías Utilizadas
- **Vue.js**: Framework de JavaScript para construir interfaces de usuario.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript.
- **Vite**: Herramienta de compilación rápida para desarrollo moderno.
- **Tailwind CSS**: Framework de CSS utilitario para diseñar interfaces rápidamente.
- **Vue Router**: Biblioteca para manejar la navegación en aplicaciones Vue.js.

### Dependencias Principales
- `vue`: Framework principal.
- `vue-router`: Para manejar rutas en la aplicación.
- `tailwindcss`: Para estilos CSS.
- `@tailwindcss/vite`: Plugin oficial de Tailwind para Vite.
- `postcss` y `autoprefixer`: Para procesar CSS.

---

## Lo que ya se ha hecho
1. **Configuración inicial del proyecto**:
   - Creación del proyecto con **Vite** usando **Vue.js** y **TypeScript**.
   - Instalación de dependencias básicas (`vue`, `vue-router`, `tailwindcss`, `postcss`, `autoprefixer`).
   - Configuración de **Tailwind CSS** usando el plugin oficial de Vite (`@tailwindcss/vite`).

2. **Estructura del proyecto**:
   - Creación de la estructura básica de carpetas y archivos.

3. **Configuración de Tailwind CSS**:
   - Creación del archivo `tailwind.config.js`.
   - Agregado de las directivas de Tailwind en `src/styles/tailwind.css`.

4. **Configuración de Vue Router**:
   - Configuración de rutas básicas en `src/router/index.ts` para las páginas de Login, Encuesta, Panel de Administración y Vista de Usuario.

5. **Componentes básicos**:
   - Creación de componentes Vue para cada ruta (`Login.vue`, `Survey.vue`, `AdminPanel.vue`, `UserView.vue`).

6. **Compilación para producción**:
   - Configuración de Vite para compilar el proyecto en archivos estáticos (`npm run build`), generando la carpeta `dist/`.

---

## Lo que se quiere lograr
1. **Finalizar la lógica de la encuesta**:
   - Implementar la lógica en `Survey.vue` para que los usuarios puedan responder preguntas y obtener recomendaciones basadas en su tipo de cabello.

2. **Integrar el panel de administración**:
   - Desarrollar el componente `AdminPanel.vue` para gestionar usuarios y tratamientos.
   - Implementar funcionalidades como agregar, editar y eliminar tratamientos.

3. **Mejorar la experiencia de usuario**:
   - Asegurar que la aplicación sea completamente responsive y optimizada para dispositivos móviles.
   - Agregar animaciones y transiciones para mejorar la interacción.

4. **Optimización y despliegue**:
   - Optimizar el proyecto para producción (minificación de archivos, tree-shaking, etc.).
   - Desplegar la aplicación en un servidor estático (por ejemplo, GitHub Pages, Netlify, o un servidor propio).

5. **Integración con WordPress (opcional)**:
   - Si es necesario, integrar la aplicación con WordPress para reutilizar usuarios y roles existentes.

---

## Próximos pasos
1. **Desarrollar la lógica de la encuesta**:
   - Crear un formulario dinámico en `Survey.vue` que permita a los usuarios responder preguntas.
   - Implementar la lógica para determinar el tipo de cabello y mostrar recomendaciones.

2. **Finalizar el panel de administración**:
   - Desarrollar las funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar) en `AdminPanel.vue`.

3. **Mejorar los estilos**:
   - Ajustar los estilos con Tailwind CSS para que la aplicación sea más atractiva y responsive.

4. **Probar y desplegar**:
   - Probar la aplicación en diferentes dispositivos y navegadores.
   - Compilar el proyecto para producción (`npm run build`) y desplegarlo en un servidor.

---

## Comandos clave
1. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
2. Compilar para producción:
    ```bash
    npm run build
    ```
3. Servir la carpeta dist/ localmente:
    ```bash
    npx serve dist
    ```

---

Este archivo `README.md` contiene toda la información necesaria para entender el proyecto, su estructura, las tecnologías utilizadas, lo que ya se ha hecho, los objetivos futuros y los comandos clave. ¡Espero que te sea útil! 😊