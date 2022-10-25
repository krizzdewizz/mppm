import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import routify from '@roxi/routify/vite-plugin';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    { config: () => ({ ssr: { noExternal: true } }) },

    routify({
      // @ts-ignore
      ssr: {
        spank: {
          sitemap: '.routify/sitemap.default.txt',
        },
      },
    }),
    svelte(),
  ],
  publicDir: 'src/static',
  resolve: {
    alias: {
      $lib: resolve('./src/lib'),
      $components: resolve('./src/components'),
      $services: resolve('./src/services'),
      $directives: resolve('./src/directives'),
      $model: resolve('./src/model'),
      $routes: resolve('./src/routes'),
      $static: resolve('./src/static'),
      $ionic: resolve('./src/lib/ionic')
    }
  }
});
