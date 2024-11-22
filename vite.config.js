import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-svg-core', '@fortawesome/free-solid-svg-icons'],
  },
  plugins: [react()],
})


