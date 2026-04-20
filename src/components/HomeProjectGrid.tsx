import ProjectBox from './ProjectBox'
import { getHomeProjectsForDisplay } from '../constants/homeProjects'

export default function HomeProjectGrid() {
  const projects = getHomeProjectsForDisplay()

  return (
    <div className="col-span-12 flex flex-col gap-[1.5rem]">
      <p className="title-1">Projects</p>
      <div className="col-span-12 grid grid-cols-2 gap-[3rem]">
        {projects.map((p) => (
          <ProjectBox
            key={p.slug}
            name={p.name}
            desc={p.desc}
            imageName={p.slug}
            ribbonSrc={p.ribbonSrc}
          />
        ))}
      </div>
    </div>
  )
}
