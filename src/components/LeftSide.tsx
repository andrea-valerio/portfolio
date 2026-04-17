import backArrow from '../assets/icons/back-arrow.svg'
import IndexList from './IndexList'

type LeftSideProps = {
  /** Base path for the site (e.g. `/portfolio/` on GitHub Pages). Defaults to `import.meta.env.BASE_URL`. */
  homeHref?: string
  item1?: string
  item2: string
  item3: string
  item4?: string
}

const LeftSide = ({
  homeHref = import.meta.env.BASE_URL,
  item1,
  item2,
  item3,
  item4,
}: LeftSideProps) => {
  return (
    <div className="hidden sticky top-[6rem] self-start sm:flex flex-col gap-[0.625rem] whitespace-nowrap overflow-visible">
      <a
        href={homeHref}
        className="group flex flex-col justify-center items-center p-[0.5rem] box-content w-[4rem] h-[3rem] "
      >
        <img
          src={backArrow}
          alt="Back arrow"
          className="icon-hit-opacity-img w-[2.625rem] h-[1.5rem]"
        />
      </a>
      <div className="hidden md:block">
        <IndexList item1={item1} item2={item2} item3={item3} item4={item4} />
      </div>
    </div>
  )
}

export default LeftSide