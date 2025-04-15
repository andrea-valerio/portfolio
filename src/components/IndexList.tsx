import IndexItem from './IndexItem'

type IndexListProps = {
  item2: string
  item3: string
}

const IndexList = ({ item2, item3 }: IndexListProps) => {
  return (
    <div className="flex flex-col gap-[0.625rem] p-[0.625rem]">
      <IndexItem anchorId="section-1">Introduction</IndexItem>
      <IndexItem anchorId="section-2">{item2}</IndexItem>
      <IndexItem anchorId="section-3">{item3}</IndexItem>
    </div>
  )
}

export default IndexList