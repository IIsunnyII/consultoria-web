# Sitio de la consultoría — Astro + Tailwind CSS v4

Sitio web de la consultoría de software (cuatro socios). Sistema de diseño monocromo
documentado en [DESIGN.md](DESIGN.md).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera ./dist
```

Contenido editable en `src/data/` (`site.ts`, `projects.ts`, `services.ts`, `stack.ts`).

## Publicación

El sitio se publica en GitHub Pages con cada push a `main`
(`.github/workflows/deploy.yml`): https://iisunnyii.github.io/consultoria-web/

- **Rutas:** usa `withBase()` (`src/utils/url.ts`) para enlaces e imágenes de `/public`,
  porque el sitio vive bajo `/consultoria-web`.
- **Dominio propio:** cambia `site` en `astro.config.mjs` por el dominio, quita `base`,
  añade `public/CNAME` con el dominio y configúralo en *Settings → Pages* del repo.
- **Imagen para redes:** tras cambiar nombre o titular, ejecuta `npm run imagenes`.

