import type { KeyboardEvent } from 'react'

type IndexItemProps = {
  children: string
  anchorId: string
}

const IndexItem = ({ children, anchorId }: IndexItemProps) => {
  const scrollToWithOffset = (targetY: number, duration = 600) => {
    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const ease = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = ease(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (elapsed < duration) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const handleClick = () => {
    const el = document.getElementById(anchorId)
    if (el) {
      const offset = -window.innerHeight / 4
      const targetY = el.getBoundingClientRect().top + window.scrollY + offset
      scrollToWithOffset(targetY, 600)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="group body-1 px-[0.75rem] flex gap-2 cursor-pointer items-start text-black transition-opacity active:opacity-80 focus-visible:opacity-80"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <span className="flex-shrink-0 w-[0.25rem] h-[0.25rem] bg-black rounded-full mt-[0.625rem]" />
      <div className="no-underline group-hover:underline group-hover:decoration-black/80 group-hover:decoration-1 group-hover:underline-offset-2">
        {children}
      </div>
    </div>
  )
}

export default IndexItem