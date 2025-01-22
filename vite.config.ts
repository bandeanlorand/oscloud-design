// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base path for production only
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/oscloud-design/' : '/',
  plugins: [react()],
}));
