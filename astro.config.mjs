// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Publicado en GitHub Pages: https://iisunnyii.github.io/consultoria-web/
  // Con dominio propio: pon aquí el dominio (p. ej. 'https://www.tuestudio.dev') y quita `base`.
  site: 'https://iisunnyii.github.io',
  base: '/consultoria-web',

  // Una sola página: incrustar el CSS en el HTML evita una petición que bloquea el render.
  build: { inlineStylesheets: 'always' },

  // filter: con `base` el plugin repite la portada sin barra final
  integrations: [sitemap({ filter: (page) => page.endsWith('/') })],

  vite: {
    plugins: [tailwindcss()],
  },
});
