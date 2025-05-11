import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? 'rohan-calculator' : './',
  plugins: [react()],
  define: {
    __APP_CONFIG__: {
      basename: process.env.GITHUB_PAGES ? '/rohan-calculator/' : '/',
    }
  }
})
