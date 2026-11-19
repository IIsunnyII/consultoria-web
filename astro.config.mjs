// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio: se usa en la URL canónica, Open Graph y el sitemap.
  // Cámbiala por el dominio real antes de publicar.
  site: 'https://www.tuestudio.dev',

  // Una sola página: incrustar el CSS en el HTML evita una petición que bloquea el render.
  build: { inlineStylesheets: 'always' },

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
