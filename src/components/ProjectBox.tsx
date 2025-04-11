import { useState } from 'react'
import { Link } from 'react-router-dom'

type ProjectBoxProps = {
  name: string
  desc: string
  imageName: string
}

const ProjectBox = ({ name, desc, imageName }: ProjectBoxProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const overlayOpacity = isPressed ? 'opacity-80' : isHovered ? 'opacity-70' : 'opacity-30'

  return (
    <Link
      to={`/${imageName}`}
      className="relative col-span-6 aspect-[16/9] overflow-hidden transition-all duration-[250ms] ease-out hover:scale-[0.95]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(249,238,235,0), rgba(28,36,42,0.2)),
            url('/src/assets/projects/${imageName}.png')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[250ms] ease-out ${overlayOpacity}`}
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-white text-center translate-y-[0.25rem]">
        <h2 className="subtitle-1">{name}</h2>
        <p
          className={`body-1 transition-opacity duration-[250ms] ease-out ${
            isHovered || isPressed ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {desc}
        </p>
      </div>
    </Link>
  )
}

export default ProjectBox