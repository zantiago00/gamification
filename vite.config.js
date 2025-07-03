import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/gamification/',
  plugins: [react()],
  resolve: {
    alias: {
      'shadcn-ui': resolve(__dirname, 'src/lib/shadcn-ui.jsx'),
    },
  },
})
