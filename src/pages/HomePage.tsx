import LayoutWrapper from '../components/LayoutWrapper'
import ProjectBox from '../components/ProjectBox'

function HomePage() {
  const header = (
    <div
      // Header
      className="h-[45vh] bg-cover bg-center flex items-center justify-center text-white pt-[6rem] pb-[4.5rem]"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28, 36, 42, 0.20) 0%, rgba(28, 36, 42, 0.20) 100%),
          linear-gradient(180deg, rgba(249, 238, 235, 0.00) 0%, rgba(28, 36, 42, 0.30) 100%),
          url('/src/assets/projects/home.png')
        `,
      }}
    >
      <div className="flex items-stretch gap-[2.75rem] text-center font-body text-[7.5rem] font-semibold leading-[0.91]">
        <span>“</span>
        <div>
          <p>Bridging minds</p>
          <div className="flex justify-between items-baseline">
            <span className="text-[4.625rem]">and</span>
            <span>technologies</span>
          </div>
        </div>
        <span className="flex items-end">”</span>
      </div>
    </div>
  )

  const content = (
    <>
      {/* Me and Contacts */}
      <div className="col-span-12 flex flex-col gap-[1.5rem] body-1 break-words w-full" style={{ fontSize: '1.875rem', maxWidth: '100%' }}>
        {/* Me */}
        <div className="col-span-12 flex flex-col gap-[0.5rem]">
          <p>
            Hi! 👋🏼 I am a passionate <span className="font-semibold">Human–Computer Interaction</span> graduate with a unique blend of skills and interests spanning <span className="font-semibold">UX/UI Design</span>, <span className="font-semibold">UX Research</span>, and <span className="font-semibold">HCI Research</span>.
          </p>
          <div>
            <p>
              As a <span className="font-semibold italic text-accent">UX/UI Designer</span>, I craft intuitive and impactful interfaces.
            </p>
            <p>
              As a <span className="font-semibold italic text-accent">UX Researcher</span>, I uncover user insights to drive solutions.
            </p>
            <p>
              As an <span className="font-semibold italic text-accent">aspiring HCI researcher</span>, I explore the boundaries of cognitive and social systems in technology.
            </p>
          </div>
          <p>
            These roles mutually complement and fuel my <span className="font-semibold">multidisciplinary approach</span>. Whether it’s designing, researching, or innovating, I thrive on enhancing human experiences by bridging minds and technologies.
          </p>
        </div>
        {/* Contacts */}
        <div className="flex items-center gap-[3rem] pt-4">
          <span>Contacts :</span>
          <div className="flex items-center gap-[0.625rem]">
            <img src="/src/assets/icons/mail.png" alt="mail icon" className="w-[1.5rem] h-[1.5rem]" />
            <a href="mailto:andrea@icio.it" className="text-accent-shade3 underline">andrea@icio.it</a>
          </div>
          <div className="flex items-center gap-[0.625rem]">
            <img src="/src/assets/icons/in.png" alt="linkedin icon" className="w-[1.5rem] h-[1.5rem]" />
            <a href="https://www.linkedin.com/in/andreavalerio1" target="_blank" className="text-accent-shade3 underline">andreavalerio1</a>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="col-span-12 flex flex-col gap-[1.5rem]">
        <p className="title-1">Projects</p>
        <div className="col-span-12 grid grid-cols-12 gap-[3rem]">
            <ProjectBox name="Groove" desc="UX / UI Design" imageName="groove" />
            <ProjectBox name="Oven Configurator" desc="UX Research & Design" imageName="ovenconf" />
            <ProjectBox name="Citizen-Institution Interaction" desc="UX Research & Design" imageName="citinst" />
            <ProjectBox name="Ecomuseo Argentario" desc="UX / UI Design" imageName="ecomuseo" />
            <ProjectBox name="Sustainability & Smoking" desc="Qualitative Research" imageName="sustsmok" />
            <ProjectBox name="Instagram vs TikTok" desc="Quantitative Research" imageName="reelsfyp" />
        </div>
      </div>
    </>
  )

  return <LayoutWrapper header={header} content={content} />
}
  
export default HomePage