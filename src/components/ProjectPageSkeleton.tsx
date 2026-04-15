import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import ProjectMetaStart from './ProjectMetaStart'
import { skeletonThemeColors } from './skeletonTheme'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useHeroTitleOverlayBand } from '../hooks/useHeroTitleOverlayBand'

const theme = skeletonThemeColors

const HERO_HEIGHTS = 'h-[60vh]'

function Header() {
  const reduceMotion = usePrefersReducedMotion()
  const overlay = useHeroTitleOverlayBand(!reduceMotion)

  const titleSkeleton = (
    <Skeleton width={280} height={40} borderRadius={12} />
  )

  if (reduceMotion) {
    return (
      <SkeletonTheme {...theme}>
        <div
          className={`relative w-full flex items-center justify-center overflow-hidden ${HERO_HEIGHTS}`}
        >
          <div className="absolute inset-0">
            <Skeleton height="100%" className="!rounded-none" containerClassName="block h-full w-full" />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6">
            {titleSkeleton}
          </div>
        </div>
      </SkeletonTheme>
    )
  }

  return (
    <SkeletonTheme {...theme}>
      <>
        <div
          className="fixed inset-x-0 z-0 pointer-events-none overflow-hidden transition-none"
          style={{
            top: overlay.layerTopPx,
            height: overlay.layerVisible ? overlay.layerHeightPx : 0,
            visibility: overlay.layerVisible ? 'visible' : 'hidden',
          }}
          aria-hidden
        >
          <Skeleton height="100%" className="!rounded-none" containerClassName="block h-full w-full" />
        </div>
        <div
          className="fixed inset-x-0 z-10 flex items-center justify-center px-4 sm:px-6 pointer-events-none transition-none"
          style={{
            top: overlay.bandTopPx,
            height: overlay.bandVisible ? overlay.bandHeightPx : 0,
            visibility: overlay.bandVisible ? 'visible' : 'hidden',
            overflow: 'hidden',
          }}
        >
          {titleSkeleton}
        </div>
        <div
          ref={overlay.heroRef}
          className={`relative w-full shrink-0 ${HERO_HEIGHTS}`}
          aria-hidden
        />
      </>
    </SkeletonTheme>
  )
}

function Body() {
  return (
    <SkeletonTheme {...theme}>
      <div className="col-span-12 flex justify-between">
        <div className="hidden sm:flex flex-col gap-[0.625rem] shrink-0 w-[4rem] md:w-[12rem]">
          <Skeleton width={42} height={24} borderRadius={9} />
          <div className="hidden md:flex flex-col gap-2">
            <Skeleton width="100%" height={14} borderRadius={6} />
            <Skeleton width="85%" height={14} borderRadius={6} />
            <Skeleton width="90%" height={14} borderRadius={6} />
            <Skeleton width="70%" height={14} borderRadius={6} />
          </div>
        </div>

        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem] self-stretch min-h-[320px]" />

        <div className="project-content">
          <ProjectMetaStart>
            <div className="w-full max-w-[28rem]">
              <Skeleton count={2} height={18} className="my-1" borderRadius={6} />
            </div>
          </ProjectMetaStart>

          <div className="project-text-container w-full">
            <Skeleton width="55%" height={36} className="mb-1" borderRadius={9} />
            <div className="project-text">
              <Skeleton count={3} height={16} className="my-1" borderRadius={6} />
            </div>
          </div>

          <div className="project-text-container w-full">
            <Skeleton width="48%" height={36} className="mb-1" borderRadius={9} />
            <div className="project-text">
              <Skeleton count={4} height={16} className="my-1" borderRadius={6} />
            </div>
          </div>

          <div className="project-text-container w-full">
            <Skeleton width="52%" height={36} className="mb-1" borderRadius={9} />
            <div className="project-text">
              <Skeleton count={2} height={16} className="my-1" borderRadius={6} />
            </div>
          </div>

          <div className="w-full aspect-video max-w-full rounded-[1.875rem] overflow-hidden shadow-light">
            <Skeleton
              height="100%"
              borderRadius={6}
              className="!leading-[unset] !block !h-full"
              containerClassName="!block !h-full w-full"
            />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export const ProjectPageSkeleton = { Header, Body }
