import ProjectBox from './ProjectBox'
import ribbonStartup from '../assets/projects/ribbon-startup.webp'
import ribbonMscThesis from '../assets/projects/ribbon-msc-thesis.webp'

const SHOW_SUSTSMOK_REELSFYP_ON_HOME = false

export default function HomeProjectGrid() {
  return (
    <div className="col-span-12 flex flex-col gap-[1.5rem]">
      <p className="title-1">Projects</p>
      <div className="col-span-12 grid grid-cols-2 gap-[3rem]">
        <ProjectBox name="Meetup" desc="Product Design" imageName="meetup" />
        <ProjectBox
          name="Groove"
          desc="UX / UI Design"
          imageName="groove"
          ribbonSrc={ribbonStartup}
        />
        <ProjectBox
          name="Teleoperators' Workload"
          desc="HCI Research & Data Analysis"
          imageName="thesis"
          ribbonSrc={ribbonMscThesis}
        />
        <ProjectBox name="Oven Configurator" desc="UX Research & Design" imageName="ovenconf" />
        <ProjectBox
          name="Citizen-Institution Interaction"
          desc="UX Research & Design"
          imageName="citinst"
        />
        <ProjectBox name="Ecomuseo Argentario" desc="UX / UI Design" imageName="ecomuseo" />
        {SHOW_SUSTSMOK_REELSFYP_ON_HOME && (
          <>
            <ProjectBox name="Sustainability & Smoking" desc="Qualitative Research" imageName="sustsmok" />
            <ProjectBox name="Instagram vs TikTok" desc="Quantitative Research" imageName="reelsfyp" />
          </>
        )}
      </div>
    </div>
  )
}
