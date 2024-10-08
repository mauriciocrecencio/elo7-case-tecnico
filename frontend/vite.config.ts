import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  plugins: [react()],
  preview: {
    port: 3001,
    strictPort: true
  },
  server: {
    port: 3001,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:3001'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
