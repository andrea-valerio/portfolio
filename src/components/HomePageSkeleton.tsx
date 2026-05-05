/* eslint-disable react-refresh/only-export-components -- compound skeleton (Header + Content) */
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { skeletonThemeColors } from './skeletonTheme'

const theme = skeletonThemeColors

function Header() {
  return (
    <SkeletonTheme {...theme}>
      <div
        className="relative w-full flex items-center justify-center overflow-hidden
          h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
      >
        <div className="absolute inset-0">
          <Skeleton height="100%" className="!rounded-none" containerClassName="block h-full w-full" />
        </div>
        <Skeleton width="min(90%, 28rem)" height={48} borderRadius={12} className="relative z-[1]" />
      </div>
    </SkeletonTheme>
  )
}

function Content() {
  return (
    <SkeletonTheme {...theme}>
      <div className="flex flex-col gap-[4rem] lg:gap-[6rem]">
        <div className="col-span-12 flex flex-col gap-[1.5rem] body-1 break-words w-full max-w-full">
          <div className="col-span-12 flex flex-col lg:flex-row lg:gap-16 lg:items-stretch gap-8">
            <div className="flex flex-col items-center gap-4 shrink-0 w-full max-w-[260px] mx-auto lg:mx-0">
              <Skeleton circle width={260} height={260} containerClassName="w-full max-w-[260px] aspect-square" />
              <Skeleton width={200} height={36} borderRadius={9} />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <Skeleton count={4} height={18} borderRadius={6} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1.5rem] sm:gap-[3rem] pt-4">
            <Skeleton width={100} height={22} borderRadius={6} />
            <div className="flex gap-6">
              <Skeleton width={80} height={20} borderRadius={6} />
              <Skeleton width={80} height={20} borderRadius={6} />
              <Skeleton width={80} height={20} borderRadius={6} />
            </div>
          </div>
        </div>

        <section className="col-span-12 w-full max-w-full">
          <Skeleton width="55%" height={40} borderRadius={9} className="mb-6" />
          <Skeleton count={3} height={18} borderRadius={6} className="my-1" />
        </section>

        <div className="col-span-12 flex flex-col gap-[1.5rem]">
          <Skeleton width="40%" height={44} borderRadius={9} />
          <div className="col-span-12 grid grid-cols-2 gap-[3rem]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="col-span-2 md:col-span-1 aspect-[16/9] rounded-[20px] overflow-hidden shadow-light">
                <Skeleton height="100%" className="!block !h-full" containerClassName="!block h-full w-full" borderRadius={12} />
              </div>
            ))}
          </div>
        </div>

        <section className="col-span-12 w-full max-w-full flex flex-col gap-[24px]">
          <Skeleton width="45%" height={40} borderRadius={9} />
          <div className="flex flex-col gap-3 pl-[1.5rem]">
            <Skeleton count={4} height={16} borderRadius={6} />
          </div>
        </section>
      </div>
    </SkeletonTheme>
  )
}

export const HomePageSkeleton = { Header, Content }
