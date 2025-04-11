type LogoProps = {
  logoName: string
}

const Logo = ({ logoName }: LogoProps) => {
  return (
    <div className="w-[8rem] h-[3.125rem] flex items-center justify-center">
      <img src={`/src/assets/logos/${logoName}.png`} className="w-[6rem] h-auto" />
    </div>
  )
}

export default Logo