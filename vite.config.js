import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/landingPageTomas/',
  server: {
    port: 5173,
    host: true,
    open: true, // Abre en el navegador
    // Si quieres forzar Chrome en Windows
    // open: 'chrome',
    // Si quieres forzar Chrome en macOS
    // open: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  }
})