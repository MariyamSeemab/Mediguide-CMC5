import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from network
    port: 5173,
    proxy: {
      '/api/whereby': {
        target: 'https://api.whereby.dev',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/whereby/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            // Add Whereby API key to the request
            const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmFwcGVhci5pbiIsImF1ZCI6Imh0dHBzOi8vYXBpLmFwcGVhci5pbi92MSIsImV4cCI6OTAwNzE5OTI1NDc0MDk5MSwiaWF0IjoxNzcyNDQzNjk3LCJvcmdhbml6YXRpb25JZCI6MzM1NzE1LCJqdGkiOiI5ZDExZDliNC1mZWRkLTQ4NjQtOWYwMC1lNDVmYTYyZGIzN2MifQ.MkwTUInsTy2zXH3o2PsVUp2J0W1FNN1mbXBzF3lD7WY';
            proxyReq.setHeader('Authorization', `Bearer ${apiKey}`);
          });
        },
      },
    },
  },
})