import { useState } from 'react'
import { Link } from 'react-router-dom'

const projectImages: Record<string, string> = import.meta.glob(
  '../assets/projects/*.webp',
  { eager: true, query: '?url', import: 'default' }
);

type ProjectBoxProps = {
  name: string
  desc: string
  imageName: string
  ribbonSrc?: string
}

const ProjectBox = ({ name, desc, imageName, ribbonSrc }: ProjectBoxProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const overlayOpacity = isPressed
    ? 'opacity-80'
    : isHovered
      ? 'opacity-70'
      : 'opacity-50 md:opacity-30'
  const bgUrl = projectImages[`../assets/projects/${imageName}.webp`];

  return (
    <Link
      to={`/${imageName}`}
      className="relative col-span-2 md:col-span-1 aspect-[16/9] overflow-hidden rounded-[20px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      >
      <div className="absolute inset-0 overflow-hidden rounded-[20px] transition-transform duration-[250ms] ease-out group-hover:scale-[0.95]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.2)),
              url('${bgUrl}')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-[250ms] ease-out ${overlayOpacity}`}
        />
        <div className="relative w-full h-full flex flex-col items-center justify-center text-white text-center translate-y-[0.25rem] p-[20px]">
          <h2 className="text-subtitle-2 font-title font-medium lg:text-subtitle-1">{name}</h2>
          <p
            className="body-1 transition-opacity duration-[250ms] ease-out opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-active:opacity-100"
          >
            {desc}
          </p>
        </div>
        {ribbonSrc && (
          <img
            src={ribbonSrc}
            alt="Ribbon"
            loading="lazy"
            className="absolute top-0 left-0 w-[5rem] h-[5rem] z-20 pointer-events-none shadow-light"
          />
        )}
      </div>
    </Link>
  )
}

export default ProjectBox