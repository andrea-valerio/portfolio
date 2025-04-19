import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import leftArrow from '../assets/icons/left-arrow.svg'
import leftArrowOff from '../assets/icons/left-arrow-inactive.svg'
import rightArrow from '../assets/icons/right-arrow.svg'
import rightArrowOff from '../assets/icons/right-arrow-inactive.svg'

type CarouselProps = {
  images: string[] // array of image paths
  width: number // image widths
  round: number // corner radia
}

const Carousel = ({ images, width, round }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollAmount = width > 0
      ? width + 48
      : (container.firstElementChild as HTMLElement)?.offsetWidth + 48
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }
  
  // update arrow availability
  const updateArrows = () => {
    const container = scrollRef.current
    if (!container) return
    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth)
  }
  
  // on mount and on scroll, recalc arrow states
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    updateArrows()
    container.addEventListener('scroll', updateArrows)
    window.addEventListener('resize', updateArrows)
    return () => {
      container.removeEventListener('scroll', updateArrows)
      window.removeEventListener('resize', updateArrows)
    }
  }, [images.length, width])
  
  // ensure correct arrow state after DOM updates and image loads
  useLayoutEffect(() => {
    updateArrows()
  }, [images.length, width])

  return (
    <div className="relative w-full">
      {/* Scrollable image container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-[3rem] p-[.5rem] hide-scrollbar"
        onScroll={updateArrows}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            style={{
              width: width > 0 ? `${width}px` : '100%',
              borderRadius: `${round}rem`
            }}
            className="shadow-light object-cover h-auto"
            onLoad={updateArrows}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollBy('left')}
        disabled={!canScrollLeft}
        className={`absolute left-[-32px] top-1/2 -translate-y-1/2 ${!canScrollLeft ? 'pointer-events-none' : ''}`}
      >
        <img
          src={canScrollLeft ? leftArrow : leftArrowOff}
          alt="Left arrow"
          className="w-[2rem] h-[2rem] p-1"
        />
      </button>
      <button
        onClick={() => scrollBy('right')}
        disabled={!canScrollRight}
        className={`absolute right-[-32px] top-1/2 -translate-y-1/2 ${!canScrollRight ? 'pointer-events-none' : ''}`}
      >
        <img
          src={canScrollRight ? rightArrow : rightArrowOff}
          alt="Right arrow"
          className="w-[2rem] h-[2rem] p-1"
        />
      </button>
    </div>
  )
}

export default Carousel