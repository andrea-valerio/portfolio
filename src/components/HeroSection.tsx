type HeroSectionProps = {
  title: string
  imageName: string
}

const HeroSection = ({title, imageName}: HeroSectionProps) => {
    return (
    <div
      className="h-[40vh] w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28,36,42,0.5), rgba(28,36,42,0.5)),
          linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.1)),
          url('/src/assets/heros/${imageName}.png')
        `,
      }}
    >
      <h1 className="title-1 text-white z-10">{title}</h1>
    </div>
  )
}

export default HeroSection