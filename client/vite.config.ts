import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/chat': {
        target: 'https://ai-app-gemini-pro.vercel.app/',
        changeOrigin: true,
      }
    }
  }
})
