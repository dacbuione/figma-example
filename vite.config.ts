import { defineConfig } from 'vite'
import reactSWC from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [reactSWC({
    plugins: [['@swc/plugin-styled-components', {}]],
  })],
  build: {
    sourcemap: true,
  },
  css: {
    devSourcemap: true,
  },
  server: {
    hmr: true
  },
  logLevel: 'info',
})
