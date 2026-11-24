import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ command }) => ({
  root: 'public',
  // The build copies everything in public/ (including data/) into dist/.
  // In dev, root already serves public/; also setting it as publicDir makes
  // Vite serve raw HTML for inline-module proxy requests, breaking the pages.
  publicDir: command === 'build' ? resolve(__dirname, 'public') : false,
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    copyPublicDir: true, // Copy all static assets including data directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        reader: resolve(__dirname, 'public/reader.html'),
        calendar: resolve(__dirname, 'public/calendar.html'),
        readings: resolve(__dirname, 'public/readings.html'),
        rambam: resolve(__dirname, 'public/rambam.html'),
        mishnah: resolve(__dirname, 'public/mishnah.html'),
        talmud: resolve(__dirname, 'public/talmud.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
}));
