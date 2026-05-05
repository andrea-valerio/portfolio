import IndexItem from './IndexItem'

type IndexListProps = {
  item1?: string
  item2: string
  item3: string
  item4?: string
}

const IndexList = ({ item1 = 'Introduction', item2, item3, item4 }: IndexListProps) => {
  return (
    <div className="flex flex-col gap-[0.625rem] p-[0.625rem]">
      <IndexItem anchorId="section-1">{item1}</IndexItem>
      <IndexItem anchorId="section-2">{item2}</IndexItem>
      <IndexItem anchorId="section-3">{item3}</IndexItem>
      {item4 != null && <IndexItem anchorId="section-4">{item4}</IndexItem>}
    </div>
  )
}

export default IndexList