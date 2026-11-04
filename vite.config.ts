/**
 * Crypto Market Data
 * https://github.com/nirholas/crypto-market-data
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // Served from the domain root (Cloudflare Pages). Set BASE_PATH to host under a sub-path.
  base: process.env.BASE_PATH || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
