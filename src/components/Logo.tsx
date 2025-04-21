// dynamically import all logo images as URLs
const logoImages: Record<string, string> = import.meta.glob(
  '../assets/logos/*.png',
  { eager: true, query: '?url', import: 'default' }
);

type LogoProps = {
  logoName: string
  className?: string
}

const Logo = ({ logoName, className = '' }: LogoProps) => {
  return (
    <div className={`flex items-center justify-center 
      w-[4rem] h-[1.5625rem] sm:w-[8rem] sm:h-[3.125rem]
      ${className}`}>
      <img
        src={logoImages[`../assets/logos/${logoName}.png`]}
        className="w-[6rem] h-auto"
      />
    </div>
  )
}

export default Logo