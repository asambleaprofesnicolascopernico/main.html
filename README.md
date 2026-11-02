# Información para las familias | IES Nicolás Copérnico

Sitio estático construido con Next.js y publicado en GitHub Pages.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre <http://localhost:3000>. Para validar el proyecto:

```bash
npm run lint
npm run build
```

Para probar la compilación estática que usa Pages:

```bash
NEXT_PUBLIC_BASE_PATH=/nicolas-copernico-huelga npm run build
```

Esta compilación genera `out/`. Sin esa variable, el proyecto conserva el build
Next.js habitual para desarrollo u otros proveedores.

## Publicación en GitHub Pages

El workflow de GitHub Actions publica automáticamente cada cambio en `main`.
En la configuración del repositorio, selecciona **Settings → Pages → Build and
deployment → Source: GitHub Actions**.

El sitio usa la URL predeterminada de Pages:
<https://mario-rodriguez-salinero.github.io/nicolas-copernico-huelga/>.
GitHub Pages sirve esa URL por HTTPS y redirige las solicitudes HTTP a HTTPS.

La ruta base `/nicolas-copernico-huelga` está definida durante la compilación del
workflow para que funcionen tanto las páginas como las imágenes del repositorio.
