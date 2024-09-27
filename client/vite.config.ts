import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8800",
        changeOrigin: true,
        secure: false,  // Not required for HTTP, but fine to keep for future HTTPS scenarios
      },
    },
  },
  plugins: [react()],
});
