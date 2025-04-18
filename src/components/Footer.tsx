import Logo from './Logo'

const Footer = () => {
  return (
    <div className="mt-[6rem] mb-[3rem]">
      <div className="hidden lg:grid grid-cols-7 gap-[0.75rem] justify-items-center">
        <Logo logoName='unitn' className='col-span-1 justify-self-start' />
        <Logo logoName='erasmus' className='col-span-1' />
        <Logo logoName='ru' className='col-span-1' />
        <Logo logoName='aalto' className='col-span-1' />
        <Logo logoName='hit' className='col-span-1' />
        <Logo logoName='unox' className='col-span-1' />
        <Logo logoName='dlr' className='col-span-1 justify-self-end' />
      </div>

      <div className="grid grid-cols-7 gap-[0.75rem] justify-items-center lg:hidden">
        <Logo logoName='unitn' className='col-span-1 justify-self-start' />
        <div className='col-span-1'></div>
        <Logo logoName='erasmus' className='col-span-1' />
        <div className='col-span-1'></div>
        <Logo logoName='ru' className='col-span-1' />
        <div className='col-span-1'></div>
        <Logo logoName='aalto' className='col-span-1 justify-self-end' />
      </div>
      <div className="grid grid-cols-7 gap-[0.75rem] mt-[0.75rem] justify-items-center lg:hidden">
        <div className='col-span-1'></div>
        <Logo logoName='hit' className='col-span-1' />
        <div className='col-span-1'></div>
        <Logo logoName='unox' className='col-span-1' />
        <div className='col-span-1'></div>
        <Logo logoName='dlr' className='col-span-1' />
        <div className='col-span-1'></div>
      </div>
    </div>
  )
}

export default Footer