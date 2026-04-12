import { useEffect, useState } from 'react'

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => resolve()
    img.src = src
  })
}

function preloadVideo(src: string): Promise<void> {
  return new Promise((resolve) => {
    const v = document.createElement('video')
    v.preload = 'auto'
    v.muted = true
    const finish = () => resolve()
    v.addEventListener('canplay', finish, { once: true })
    v.addEventListener('error', finish, { once: true })
    v.src = src
    v.load()
  })
}

export type UseAssetsReadyConfig = {
  images: readonly string[]
  videos?: readonly string[]
}

const NO_VIDEOS: readonly string[] = []

/**
 * Resolves when all listed images (and optional videos) have loaded or errored.
 * Pass module-level arrays so the effect dependency stays stable.
 */
export function useAssetsReady({ images, videos = NO_VIDEOS }: UseAssetsReadyConfig): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (images.length === 0 && videos.length === 0) {
      setReady(true)
      return
    }

    let cancelled = false

    const tasks = [...images.map(preloadImage), ...videos.map(preloadVideo)]

    Promise.all(tasks).then(() => {
      if (!cancelled) setReady(true)
    })

    return () => {
      cancelled = true
    }
  }, [images, videos])

  return ready
}
