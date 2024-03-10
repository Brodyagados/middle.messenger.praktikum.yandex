import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';


export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
  },  
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        nested()
      ]
    }
  }
});
