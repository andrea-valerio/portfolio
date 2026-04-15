import { Link } from 'react-router-dom'
import backArrow from '../assets/icons/back-arrow.svg'
import IndexList from './IndexList'

type LeftSideProps = {
  item1?: string
  item2: string
  item3: string
  item4?: string
}

const LeftSide = ({ item1, item2, item3, item4 }: LeftSideProps) => {
  return (
    <div className="hidden sticky top-[6rem] self-start sm:flex flex-col gap-[0.625rem] whitespace-nowrap overflow-visible">
      <Link
        to={`/`}
        className="group flex flex-col justify-center items-center p-[0.5rem] box-content w-[4rem] h-[3rem] "
      >
        <img
          src={backArrow}
          alt="Back arrow"
          className="icon-hit-opacity-img w-[2.625rem] h-[1.5rem]"
        />
      </Link>
      <div className="hidden md:block">
        <IndexList item1={item1} item2={item2} item3={item3} item4={item4} />
      </div>
    </div>
  )
}

export default LeftSide