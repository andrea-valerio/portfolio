import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useHeroTitleOverlayBand } from '../hooks/useHeroTitleOverlayBand'

const projectImages: Record<string, string> = import.meta.glob(
  '../assets/projects/*.webp',
  { eager: true, query: '?url', import: 'default' }
)

const HERO_HEIGHTS = 'h-[60vh]'

type HeroSectionProps = {
  title: string
  imageName: string
}

function buildHeroBackgroundStyle(bgUrl: string) {
  return {
    backgroundImage: `
          linear-gradient(0deg, rgba(28,36,42,0.5), rgba(28,36,42,0.5)),
          linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.1)),
          url('${bgUrl}')
        `,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center' as const,
    backgroundRepeat: 'no-repeat' as const,
  }
}

const HeroSection = ({ title, imageName }: HeroSectionProps) => {
  const bgUrl = projectImages[`../assets/projects/${imageName}.webp`]
  const reduceMotion = usePrefersReducedMotion()
  const bgStyle = buildHeroBackgroundStyle(bgUrl)

  const overlay = useHeroTitleOverlayBand(!reduceMotion)

  const headingContent = (
    <h1 className="title-2 sm:text-title-2 md:text-title-1 lg:text-title-1 text-white text-center">
      {title}
    </h1>
  )

  if (reduceMotion) {
    return (
      <div
        className={`relative w-full bg-cover bg-center flex items-center justify-center ${HERO_HEIGHTS}`}
        style={bgStyle}
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
          {headingContent}
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="fixed inset-x-0 z-0 pointer-events-none transition-none"
        style={{
          top: overlay.layerTopPx,
          height: overlay.layerVisible ? overlay.layerHeightPx : 0,
          visibility: overlay.layerVisible ? 'visible' : 'hidden',
          ...bgStyle,
        }}
        aria-hidden
      />
      <div
        className="fixed inset-x-0 z-10 flex items-center justify-center px-4 sm:px-6 pointer-events-none transition-none"
        style={{
          top: overlay.bandTopPx,
          height: overlay.bandVisible ? overlay.bandHeightPx : 0,
          visibility: overlay.bandVisible ? 'visible' : 'hidden',
          overflow: 'hidden',
        }}
        aria-hidden={!overlay.bandVisible}
      >
        {headingContent}
      </div>
      <div
        ref={overlay.heroRef}
        className={`relative w-full shrink-0 ${HERO_HEIGHTS}`}
        aria-hidden
      />
    </>
  )
}

export default HeroSection
