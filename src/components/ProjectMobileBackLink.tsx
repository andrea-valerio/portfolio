import { Link } from 'react-router-dom'
import backArrow from '../assets/icons/back-arrow.svg'

/** Shown below `sm` where `LeftSide` is hidden; first child of `.project-content` so spacing to metadata uses `gap-[3rem]`. */
export default function ProjectMobileBackLink() {
  return (
    <Link
      to="/"
      className="sm:hidden flex flex-col justify-center items-start -ml-[0.5rem] p-[0.5rem] box-content w-[4rem] h-[3rem] shrink-0"
      aria-label="Back to home"
    >
      <img src={backArrow} alt="" className="w-[2.625rem] h-[1.5rem] pointer-events-none" />
    </Link>
  )
}
