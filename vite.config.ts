import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/hf-api': {
        target: 'https://router.huggingface.co',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hf-api/, ''),
        configure: (proxy) => {
          proxy.on('error', (err) => console.log('proxy error', err));
          proxy.on('proxyRes', (proxyRes) => console.log('proxy status:', proxyRes.statusCode));
        }
      }
    }
  }
})