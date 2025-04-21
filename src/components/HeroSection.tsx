const projectImages: Record<string, string> = import.meta.glob(
  '../assets/projects/*.png',
  { eager: true, query: '?url', import: 'default' }
);

type HeroSectionProps = {
  title: string
  imageName: string
}

const HeroSection = ({title, imageName}: HeroSectionProps) => {
  const bgUrl = projectImages[`../assets/projects/${imageName}.png`];
  return (
    <div
      className="w-full bg-cover bg-center flex items-center justify-center
        h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px]"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28,36,42,0.5), rgba(28,36,42,0.5)),
          linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.1)),
          url('${bgUrl}')
        `,
      }}
    >
      <h1 className="title-2 sm:text-title-2 md:text-title-1 lg:text-title-1 text-white">{title}</h1>
    </div>
  )
}

export default HeroSection