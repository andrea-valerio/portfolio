import { useState } from 'react'
import pillChevronRight from '../assets/icons/right-arrow-overlay-dark.svg'
import { bundledSrc } from '../types/bundled-asset'

export default function PreviouslyAccordion() {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-[8px]">
      <button
        id="previously-trigger"
        type="button"
        aria-expanded={open}
        aria-controls="previously-panel"
        onClick={() => setOpen((o) => !o)}
        className="group body-1 flex items-center gap-2 text-left text-grey-5 transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Previously
        <img
          src={bundledSrc(pillChevronRight)}
          alt=""
          width={12}
          height={12}
          draggable={false}
          className={`pointer-events-none h-3 w-3 shrink-0 translate-y-[2px] transition-[transform,opacity] duration-200 opacity-70 group-hover:opacity-100 ${
            open ? '-rotate-90' : 'rotate-90'
          }`}
          aria-hidden
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            id="previously-panel"
            role="region"
            aria-labelledby="previously-trigger"
            aria-hidden={!open}
            className="body-1 mt-2 flex flex-col gap-[4px] pl-[1.5rem] text-grey-5"
          >
            <p>Product Designer for Meetup @ Bending Spoons</p>
            <p>Research Assistant @ German Aerospace Center (DLR)</p>
            <p>UX/UI Design Intern @ UNOX</p>
          </div>
        </div>
      </div>
    </div>
  )
}
