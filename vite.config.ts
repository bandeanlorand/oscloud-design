import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/oscloud-design/' : '/',
  plugins: [react()],
  logLevel: 'error', // Only show errors
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Suppress deprecation warnings from dependencies
      },
    },
  },
}));

