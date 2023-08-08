import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import sassGlobImports from 'vite-plugin-sass-glob-import';

export default defineConfig({
  plugins: [
    solid(),
    sassGlobImports(),
  ],
});
