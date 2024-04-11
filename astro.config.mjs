import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

export default defineConfig({
  integrations: [react({
    esbuildOptions: {
      // Explicitly set the loader for .js files to interpret them as JSX
      loader: { '.js': 'jsx' }
    }
  })],
  site: 'https://creativetimofficial.github.io',
  base: '/delipostres'
  integrations: [react()],
  site: 'https://Al791ex.github.io',
  base: '/Delipostres-Astro',
});
