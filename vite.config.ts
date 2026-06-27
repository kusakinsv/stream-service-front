import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  server: {
    host: "0.0.0.0",
    proxy: {
      "/search-service/api/v1": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/search-service/, ""),
        target: "http://localhost:8102",
      },
      "/stream-service/api/v1/": {
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/stream-service/, ""),
        target: "http://localhost:8101",
      },
    },
  },
})
