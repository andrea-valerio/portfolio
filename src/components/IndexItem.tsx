type IndexItemProps = {
  children: string
  onClick?: () => void
}

const IndexItem = ({ children, onClick }: IndexItemProps) => {
  return (
    <div
      className="body-1 text-black hover:underline active:text-accent transition-colors px-[0.75rem] flex items-center gap-2 cursor-pointer"
      onClick={onClick}
    >
      <span className="w-[0.25rem] h-[0.25rem] bg-black rounded-full mt-[0.125rem]"></span>
      {children}
    </div>
  )
}

export default IndexItem