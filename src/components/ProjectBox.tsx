import { useState } from 'react'
import { bundledSrc, type BundledSrc } from '../types/bundled-asset'
import meetupCover from '../assets/projects/meetup.webp'
import grooveCover from '../assets/projects/groove.webp'
import thesisCover from '../assets/projects/thesis.webp'
import ovenconfCover from '../assets/projects/ovenconf.webp'
import citinstCover from '../assets/projects/citinst.webp'
import ecomuseoCover from '../assets/projects/ecomuseo.webp'
import sustsmokCover from '../assets/projects/sustsmok.webp'
import reelsfypCover from '../assets/projects/reelsfyp.webp'
import placeholderCover from '../assets/projects/placeholder.webp'

const projectCoverBySlug: Record<string, BundledSrc> = {
  meetup: meetupCover,
  groove: grooveCover,
  thesis: thesisCover,
  ovenconf: ovenconfCover,
  citinst: citinstCover,
  ecomuseo: ecomuseoCover,
  sustsmok: sustsmokCover,
  reelsfyp: reelsfypCover,
}

type ProjectBoxProps = {
  name: string
  desc: string
  imageName: string
  ribbonSrc?: BundledSrc
  /** Base URL including trailing slash, e.g. `/portfolio/` */
  baseUrl?: string
}

const ProjectBox = ({
  name,
  desc,
  imageName,
  ribbonSrc,
  baseUrl = import.meta.env.BASE_URL,
}: ProjectBoxProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const overlayOpacity = isPressed
    ? 'opacity-80'
    : isHovered
      ? 'opacity-70'
      : 'opacity-50 md:opacity-30'

  const bgUrl = bundledSrc(projectCoverBySlug[imageName] ?? placeholderCover)

  const href = `${baseUrl}${imageName}/`

  return (
    <a
      href={href}
      className="relative col-span-2 md:col-span-1 aspect-[16/9] overflow-hidden rounded-[20px] group"
      onMouseEnter={() => {
        setIsHovered(true)
      }}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[20px] transition-transform duration-[250ms] ease-out group-hover:scale-[0.95]">
        <div className="absolute inset-0">
          <img
            src={bgUrl}
            alt=""
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(28,36,42,0.2)] pointer-events-none"
            aria-hidden
          />
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-[250ms] ease-out ${overlayOpacity}`}
          />
          <div className="relative w-full h-full flex flex-col items-center justify-center text-white text-center translate-y-[0.25rem] p-[20px]">
            <h2 className="text-subtitle-2 font-title font-medium lg:text-subtitle-1">{name}</h2>
            <p className="body-1 transition-opacity duration-[250ms] ease-out opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-active:opacity-100">
              {desc}
            </p>
          </div>
          {ribbonSrc && (
            <img
              src={bundledSrc(ribbonSrc)}
              alt="Ribbon"
              loading="lazy"
              decoding="async"
              className="absolute top-0 left-0 w-[5rem] h-[5rem] z-20 pointer-events-none shadow-light"
            />
          )}
        </div>
      </div>
    </a>
  )
}

export default ProjectBox
