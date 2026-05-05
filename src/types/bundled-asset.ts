import type { ImageMetadata } from 'astro'

/**
 * Vite/Astro static image imports resolve to URL strings or `ImageMetadata`;
 * some SVGs may type as an intersection; anything with a string `src` is supported.
 */
export type BundledSrc = string | ImageMetadata | { readonly src: string }

export function bundledSrc(src: BundledSrc): string {
  if (typeof src === 'string') return src
  return src.src
}
