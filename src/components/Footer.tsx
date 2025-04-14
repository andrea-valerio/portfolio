import Logo from './Logo'

const Footer = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[0.75rem] mt-[6rem] mb-[3rem]">
      <Logo logoName="unitn" />
      <Logo logoName="erasmus" />
      <Logo logoName="ru" />
      <Logo logoName="aalto" />
      <Logo logoName="hit" />
      <Logo logoName="unox" />
      <Logo logoName="dlr" />
    </div>
  )
}

export default Footer