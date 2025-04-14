type IndexItemProps = {
  children: string
  onClick?: () => void
}

const IndexItem = ({ children, onClick }: IndexItemProps) => {
  return (
    <div
      className="body-1 text-black hover:underline active:text-accent transition-colors px-[0.75rem] flex gap-2 cursor-pointer items-start"
      onClick={onClick}
    >
      {/* Dot */}
      <span className="flex-shrink-0 w-[0.25rem] h-[0.25rem] bg-black rounded-full mt-[0.625rem]" />
      {/* Text */}
      <div>{children}</div>
    </div>
  )
}

export default IndexItem