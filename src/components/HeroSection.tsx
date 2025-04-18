type HeroSectionProps = {
  title: string
  imageName: string
}

const HeroSection = ({title, imageName}: HeroSectionProps) => {
    return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center
        h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px]"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28,36,42,0.5), rgba(28,36,42,0.5)),
          linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.1)),
          url('/src/assets/projects/${imageName}.png')
        `,
      }}
    >
      <h1 className="title-1 sm:text-title-2 md:text-title-1 lg:text-title-1 text-white">{title}</h1>
    </div>
  )
}

export default HeroSection