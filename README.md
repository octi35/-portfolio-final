# Portfolio - Octavio Fakiani

Portfolio personal desarrollado con Next.js, React, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Animaciones fluidas con Framer Motion
- 📱 Optimizado para mobile, tablet y desktop
- 🎯 SEO optimizado
- ⚡ Rendimiento optimizado con Next.js 15
- 🎭 Tema oscuro con acentos violeta y verde

## 📦 Stack Técnico

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 18
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React + React Icons

## 🛠️ Instalación

1. **Instalar dependencias:**

   Usando npm:
   ```bash
   npm install
   ```

   O usando pnpm (recomendado):
   ```bash
   pnpm install
   ```

2. **Ejecutar en modo desarrollo:**

   ```bash
   npm run dev
   ```
   
   O con pnpm:
   ```bash
   pnpm dev
   ```

3. **Abrir en el navegador:**
   
   Visita [http://localhost:3000](http://localhost:3000)

## 🏗️ Build para Producción

```bash
npm run build
npm start
```

O con pnpm:
```bash
pnpm build
pnpm start
```

## 🌐 Deploy en Vercel

### Opción 1: Deploy desde GitHub

1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Click en "New Project"
4. Importa tu repositorio
5. Vercel detectará automáticamente Next.js y configurará el build
6. Click en "Deploy"

### Opción 2: Deploy con Vercel CLI

1. Instala Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Desde la carpeta del proyecto:
   ```bash
   vercel
   ```

3. Sigue las instrucciones en pantalla

## 📁 Estructura del Proyecto

```
.
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx      # Layout principal (lang y metadata por idioma)
│   │   └── page.tsx        # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección hero
│   ├── TechStack.tsx       # Stack tecnológico
│   ├── WhatIDo.tsx         # Servicios (acordeón)
│   ├── Projects.tsx        # Grid de proyectos
│   ├── Contact.tsx         # Formulario de contacto
│   └── Footer.tsx          # Footer
├── lib/
│   ├── i18n.ts             # Idiomas disponibles y helpers de traducción
│   └── projects.ts         # Datos de proyectos
├── public/                 # Archivos estáticos
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## 🌍 Idiomas

El portfolio está en español e inglés:

- **Español:** `/` (la raíz se reescribe internamente a `/es` en `next.config.mjs`)
- **Inglés:** `/en`

El botón `EN` / `ES` del navbar cambia de idioma manteniendo la sección actual.

Cada texto visible tiene sus dos versiones una al lado de la otra:

- **Textos de la interfaz** (títulos, botones, formulario): objeto `copy` con `es` y `en` al inicio de cada componente.
- **Contenido** (`lib/projects.ts`, `lib/timeline.ts`, `lib/certifications.ts`, `lib/caseStudies.ts`): los campos de texto son `{ es: "...", en: "..." }`. Los valores que no cambian entre idiomas (nombres, tecnologías, años, URLs) se escriben una sola vez como string.

TypeScript marca un error si a un texto traducible le falta alguno de los dos idiomas.

## ✏️ Personalización

### Actualizar Proyectos

Edita el archivo `lib/projects.ts` para agregar o modificar proyectos:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: { es: "Nombre del Proyecto", en: "Project Name" },
    description: { es: "Descripción del proyecto...", en: "Project description..." },
    status: "Deployed" | "In development",
    tech: "Tecnologías utilizadas",
    image: "gradient-1",
    demoUrl: "https://...",
    repoUrl: "https://github.com/...",
  },
  // ...más proyectos
];
```

### Actualizar Información Personal

- **Hero:** Edita `components/Hero.tsx`
- **Contacto:** Edita `components/Contact.tsx`
- **Tech Stack:** Edita `components/TechStack.tsx`

### Cambiar Colores

Los colores principales se pueden cambiar en `tailwind.config.ts` o directamente en los componentes usando clases de Tailwind.

## 📝 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 📄 Licencia

© 2025 Octavio Fakiani. All rights reserved.

## 📧 Contacto

- **Email:** octifaki@gmail.com
- **LinkedIn:** [Octavio Fakiani](https://www.linkedin.com/in/octavio-fakiani-6662b5274)
- **GitHub:** [octaviofakiani](https://github.com/octaviofakiani)
- **Ubicación:** Córdoba, Argentina
