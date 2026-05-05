import backArrow from '../assets/icons/back-arrow.svg'
import { bundledSrc } from '../types/bundled-asset'

type ProjectMobileBackLinkProps = {
  homeHref?: string
}

/** Shown below `sm` where `LeftSide` is hidden; first child of `.project-content` so spacing to metadata uses `gap-[3rem]`. */
export default function ProjectMobileBackLink({
  homeHref = import.meta.env.BASE_URL,
}: ProjectMobileBackLinkProps) {
  return (
    <a
      href={homeHref}
      className="group sm:hidden flex flex-col justify-center items-start -ml-[0.5rem] p-[0.5rem] box-content w-[2.75rem] h-8 shrink-0"
      aria-label="Back to home"
    >
      <img src={bundledSrc(backArrow)} alt="" className="icon-hit-opacity-img h-4 w-[1.75rem]" />
    </a>
  )
}
