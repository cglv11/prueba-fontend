# TestFrontend

**Versión:** 0.0.1

Este repositorio contiene la aplicación móvil **TestFrontend**, construida con React Native y UI Kitten, que consume una API de usuarios y presenta:

- Lista de usuarios obtenida vía `@tanstack/react-query`.
- Detalle de cada usuario (nombre, correo, avatar, compañía, dirección y contacto).
- Navegación entre pantallas con React Navigation.
- Estado UI global (por ejemplo, filtros o flags) manejado con Zustand.

---

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión >= 18) y npm o Yarn.
- **React Native CLI** o **Expo CLI** (según tu flujo).
- Emuladores o dispositivos físicos con Android/iOS configurados.

Además, si vas a usar variables de entorno, configura tu archivo `.env` en la raíz, por ejemplo:

```env
API_BASE_URL=https://tu-api.com
```

> Este proyecto usa `react-native-dotenv` para leer variables.

---

## 🛠️ Instalación y ejecución

1. Clona tu fork:

   ```bash
   git clone https://github.com/TU_USUARIO/TestFrontend.git
   cd TestFrontend
   ```

2. Instala dependencias:

   ```bash
   npm install
   # o con Yarn:
   # yarn install
   ```

3. Corre el Metro Bundler:

   ```bash
   npm start
   ```

4. Abre la app en emulador o dispositivo:

   ```bash
   # Android
   npm run android

   # iOS
   npm run ios
   ```

---

## 🚀 Scripts disponibles

En `package.json` encontrarás:

| Script    | Descripción                         |
| --------- | ----------------------------------- |
| `start`   | Levanta Metro Bundler               |
| `android` | Compila y lanza en emulador Android |
| `ios`     | Compila y lanza en simulador iOS    |
| `lint`    | Corre ESLint en todo el proyecto    |
| `test`    | Ejecuta pruebas con Jest            |

---

## 🏗️ Dependencias principales

- **react-native** `0.79.2`
- **@ui-kitten/components** `^5.3.1` (UI basada en EVA Design)
- **@react-navigation/native** & **stack** (navegación)
- **@tanstack/react-query** (cache y fetch de datos)
- **zustand** (estado UI local/global)
- **axios** (peticiones HTTP)
- **react-native-dotenv** (variables de entorno)

Revisa el `package.json` para más detalles.

---

## 📂 Estructura del proyecto

```text
src
  ├─ actions/users       # funciones de fetch a API
  │    ├ get-users.ts
  │    └ get-user-by-id.ts
  ├─ assets              # imágenes estáticas (logo, avatar genérico)
  ├─ config/api          # configuración de instancia Axios
  │    └ testApi.ts
  ├─ domain/entities     # entidades y tipos de TypeScript
  │    └ user.ts
  ├─ infrastructure      # mappers e interfaces de respuesta
  │    ├ interfaces
  │    └ mappers
  │         └ user.mapper.ts
  ├─ presentation        # capa de presentación
  │    ├ components      # componentes reutilizables
  │    ├ hooks           # hooks personalizados
  │    ├ layouts         # layouts globales
  │    ├ navigation      # React Navigation setup
  │    ├ screens         # pantallas principales
  │    └ store           # Zustand slices y stores UI
  ├─ types               # tipos globales adicionales
  └─ UsersApp.tsx        # punto de entrada de la app
```

---

## 💡 Notas y comentarios

- **State management**: usamos React-Query para _server state_ (peticiones, cache, refetch) y Zustand para el estado de UI (flags, filtros, seleccionado).
- **Avatares**: generados dinámicamente desde `https://i.pravatar.cc/` con la ID de usuario.
- **FadeInImage**: componente personalizado que añade animación de opacidad al cargar imágenes.
- **Estilos**: UI Kitten (EVA Design) elegido sobre `styled-components` o Tailwind CSS por flexibilidad y velocidad de desarrollo.
- **Dark Mode**: la app detecta automáticamente el tema del dispositivo y aplica el modo oscuro usando el sistema de theming de UI Kitten.
- **Filtrado en tiempo real**: búsqueda instantánea de usuarios por nombre o correo electrónico.

---
