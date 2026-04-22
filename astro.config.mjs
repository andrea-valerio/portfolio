import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

// Public URL must match the published origin + path. Defaults match the project site
// https://andrea-valerio.github.io/portfolio/ (repo: portfolio). Override at build time
// for a custom domain at the site root: ASTRO_BASE=/ ASTRO_SITE=https://example.com
const site = (process.env.ASTRO_SITE?.trim() || 'https://andrea-valerio.github.io')
const base = (() => {
  const b = process.env.ASTRO_BASE?.trim()
  if (b) return b.startsWith('/') ? b : `/${b}`
  return '/portfolio'
})()

// https://astro.build/config
export default defineConfig({
  site,
  base,
  // Jekyll (branch-based GitHub Pages) omits _prefixed paths; this keeps CSS/JS reachable.
  build: {
    assets: 'assets',
  },
  trailingSlash: 'always',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  outDir: 'dist',
})
