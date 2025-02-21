import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",  // Ensures correct asset loading
  build: {
    outDir: "dist",  // Must match GitHub Actions `output_location`
  },
  plugins: [react(),tailwindcss()],
})
