import { useRef } from 'react'

type CarouselProps = {
  images: string[] // array of image paths
  width: number // image widths
  round: number // corner radia
}

const Carousel = ({ images, width, round }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const scrollAmount = width + 48 // scroll by (px)
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative w-full">
      {/* Scrollable image container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-[3rem] p-[.5rem] hide-scrollbar"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`carousel-${idx}`}
            style={{ width: `${width}px`, borderRadius: `${round}rem` }}
            className="shadow-light"
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scrollBy('left')}
        className="absolute left-[-44px] top-1/2 -translate-y-1/2"
      >
        <img src="./src/assets/icons/left-arrow.svg" alt="Left arrow" className="w-[2rem] h-[2rem] p-1" />
      </button>
      <button
        onClick={() => scrollBy('right')}
        className="absolute right-[-44px] top-1/2 -translate-y-1/2"
      >
        <img src="./src/assets/icons/right-arrow.svg" alt="Right arrow" className="w-[2rem] h-[2rem] p-1" />
      </button>
    </div>
  )
}

export default Carousel