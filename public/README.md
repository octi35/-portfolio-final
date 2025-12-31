# Carpeta Public

Esta carpeta contiene archivos estáticos que se sirven directamente desde la raíz del sitio.

## Estructura:

- **images/**: Guarda aquí tus imágenes (fotos de perfil, logos, etc.)
- **documents/**: Guarda aquí tu CV y otros documentos PDF

## Cómo usar:

### Para imágenes:
Coloca tus imágenes en `public/images/` y úsalas así:
```jsx
<img src="/images/nombre-imagen.jpg" alt="descripción" />
```

### Para el CV:
1. Coloca tu CV en `public/documents/cv.pdf`
2. Para crear un botón de descarga:
```jsx
<a href="/documents/cv.pdf" download>
  Descargar CV
</a>
```

## Ejemplo de uso en el Hero:
Puedes agregar un botón para descargar el CV junto a los íconos sociales.
