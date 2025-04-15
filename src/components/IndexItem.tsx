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

  return (
    <div
      className="body-1 text-black hover:underline active:text-accent transition-colors px-[0.75rem] flex gap-2 cursor-pointer items-start"
      onClick={handleClick}
    >
      <span className="flex-shrink-0 w-[0.25rem] h-[0.25rem] bg-black rounded-full mt-[0.625rem]" />
      <div>{children}</div>
    </div>
  )
}

export default IndexItem