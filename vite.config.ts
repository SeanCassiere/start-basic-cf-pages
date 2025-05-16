import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tanstackStart({
      target: 'cloudflare-pages',
      tsr: {
        verboseFileRoutes: true,
      },
      prerender: {
        enabled: true,
      },
      pages: [
        { path: '/', prerender: { enabled: true, crawlLinks: false } },
        { path: '/posts', prerender: { enabled: true, crawlLinks: false } },
      ],
    }),
  ],
})
