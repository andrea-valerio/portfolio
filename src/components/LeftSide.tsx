import { Link } from 'react-router-dom'
import IndexList from './IndexList.tsx'

type LeftSideProps = {
  item2: string
  item3: string
}

const LeftSide = ({ item2, item3 }: LeftSideProps) => {
  return (
    <div className="sticky top-[6rem] self-start flex flex-col gap-[0.625rem] whitespace-nowrap overflow-visible">
      <Link
        to={`/`}
        className="flex flex-col justify-center items-center p-[0.5rem] box-content w-[4rem] h-[3rem] "
      >
        <img
          src="./src/assets/icons/back-arrow.svg"
          alt="Back arrow"
          className="w-[2.625rem] h-[1.5rem]"
        />
      </Link>
      <IndexList item2={item2} item3={item3} />
    </div>
  )
}

export default LeftSide