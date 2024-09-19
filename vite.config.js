import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',  // This makes the server listen on all network interfaces
    port: 5173,       // Ensure this matches the port you are exposing
  },
  plugins: [react()],
})
