import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { recipeDocuments } from './recipe-documents.mjs';

export default defineConfig({
  base: './',
  plugins: [react(), recipeDocuments()],
  server: {
    host: true,
    port: 5173,
  },
});
