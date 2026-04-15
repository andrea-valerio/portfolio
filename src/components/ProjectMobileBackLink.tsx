import { Link } from 'react-router-dom'
import backArrow from '../assets/icons/back-arrow.svg'

/** Shown below `sm` where `LeftSide` is hidden; first child of `.project-content` so spacing to metadata uses `gap-[3rem]`. */
export default function ProjectMobileBackLink() {
  return (
    <Link
      to="/"
      className="group sm:hidden flex flex-col justify-center items-start -ml-[0.5rem] p-[0.5rem] box-content w-[2.75rem] h-8 shrink-0"
      aria-label="Back to home"
    >
      <img src={backArrow} alt="" className="icon-hit-opacity-img h-4 w-[1.75rem]" />
    </Link>
  )
}
