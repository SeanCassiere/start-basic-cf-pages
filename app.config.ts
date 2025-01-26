import { defineConfig } from '@tanstack/start/config'
import tsConfigPaths from 'vite-tsconfig-paths'
import { cloudflare } from 'unenv'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    preset: 'cloudflare',
    unenv: cloudflare,
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
      tailwindcss(),
    ],
  },
})
