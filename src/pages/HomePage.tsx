import { useState } from 'react'
import LayoutWrapper from '../components/LayoutWrapper'
import ProjectBox from '../components/ProjectBox'
import { HomePageSkeleton } from '../components/HomePageSkeleton'
import homeBg from '../assets/projects/home.webp'
import mailIcon from '../assets/icons/mail.webp'
import inIcon from '../assets/icons/in.webp'
import ghIcon from '../assets/icons/github.webp'
import ribbonStartup from '../assets/projects/ribbon-startup.webp'
import ribbonMscThesis from '../assets/projects/ribbon-msc-thesis.webp'
import pillChevronRight from '../assets/icons/right-arrow-overlay-dark.svg'
import profilePhoto from '../assets/mypicture/Mid.webp'
import meetupCover from '../assets/projects/meetup.webp'
import grooveCover from '../assets/projects/groove.webp'
import thesisCover from '../assets/projects/thesis.webp'
import ovenconfCover from '../assets/projects/ovenconf.webp'
import citinstCover from '../assets/projects/citinst.webp'
import ecomuseoCover from '../assets/projects/ecomuseo.webp'
import {
  buildFetchPriorities,
  useImagesPaintReady,
} from '../hooks/useImagesPaintReady'

/** Set to `true` to show these two projects on the home grid again (`/sustsmok` and `/reelsfyp` routes stay available). */
const SHOW_SUSTSMOK_REELSFYP_ON_HOME = false

/**
 * Top-to-bottom visual order for paint gate + fetch priority.
 * Includes CSS background URLs so they participate in the 80% gate.
 */
const HOME_ORDERED_IMAGES: readonly string[] = [
  homeBg,
  profilePhoto,
  mailIcon,
  inIcon,
  ghIcon,
  pillChevronRight,
  meetupCover,
  grooveCover,
  ribbonStartup,
  thesisCover,
  ribbonMscThesis,
  ovenconfCover,
  citinstCover,
  ecomuseoCover,
]

const HOME_FETCH_PRIORITIES = buildFetchPriorities(HOME_ORDERED_IMAGES.length)

function HomePage() {
  const [previouslyOpen, setPreviouslyOpen] = useState(false)
  const paintReady = useImagesPaintReady(HOME_ORDERED_IMAGES)

  if (!paintReady) {
    return (
      <LayoutWrapper
        header={<HomePageSkeleton.Header />}
        content={<HomePageSkeleton.Content />}
        className="!gap-[4rem] lg:!gap-[6rem]"
      />
    )
  }

  const header = (
    <div
      className="
        h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]
        bg-cover bg-center flex items-center justify-center text-white
      "
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28, 36, 42, 0.20) 0%, rgba(28, 36, 42, 0.20) 100%),
          linear-gradient(180deg, rgba(249, 238, 235, 0.00) 0%, rgba(28, 36, 42, 0.30) 100%),
          url('${homeBg}')
        `,
      }}
    >
      <div className="w-full max-w-[1240px] mx-auto px-[20px] flex justify-center font-body font-bold leading-[0.91]
          text-[2.4rem] sm:text-[4.3rem] md:text-[5.4rem] lg:text-[7.5rem]
          gap-[0.875rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.75rem]">
        <span>“</span>
        <div>
          <p>Bridging minds</p>
          <div className="flex justify-between items-baseline">
            <span className="text-[1.47rem] sm:text-[2.688rem] md:text-[3.3125rem] lg:text-[4.625rem]">and</span>
            <span>technologies</span>
          </div>
        </div>
        <span className="flex items-end">”</span>
      </div>
    </div>
  )

  const content = (
    <div className="flex flex-col gap-[4rem] lg:gap-[6rem]">
      <div className="col-span-12 flex flex-col gap-[1.5rem] body-1 break-words w-full max-w-full">
        <div className="col-span-12 flex flex-col lg:flex-row lg:gap-16 lg:items-stretch gap-8">
          <div className="flex flex-col items-center gap-4 shrink-0 w-full max-w-[260px] mx-auto lg:mx-0 lg:w-full lg:max-w-[260px] lg:min-h-0 lg:self-stretch lg:h-full">
            <div className="w-full flex justify-center lg:flex-1 lg:min-h-0 lg:items-center lg:justify-center min-h-0">
              <div className="relative w-full max-w-[260px] max-h-full aspect-square shrink-0">
                <img
                  src={profilePhoto}
                  alt="Andrea Valerio"
                  fetchPriority={HOME_FETCH_PRIORITIES[1]}
                  className="absolute inset-0 h-full w-full rounded-full object-cover border-4 border-accent-shade1 box-border"
                />
              </div>
            </div>
            <p className="shrink-0 text-[42px] font-medium italic text-black font-body text-center">
              Andrea Valerio
            </p>
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-[0.5rem] body-1 lg:min-h-0 lg:justify-center">
            <p>
              Hi! 👋🏼 I am a passionate <span className="font-medium">Human–Computer Interaction</span> graduate with a unique blend of skills and interests spanning <span className="font-medium">UX/UI Design</span>, <span className="font-medium">UX Research</span>, and <span className="font-medium">HCI Research</span>.
            </p>
            <div>
              <p>
                As a <span className="font-medium italic text-accent">UX/UI Designer</span>, I craft intuitive and impactful interfaces.
              </p>
              <p>
                As a <span className="font-medium italic text-accent">UX Researcher</span>, I uncover user insights to drive solutions.
              </p>
              <p>
                As an <span className="font-medium italic text-accent">aspiring HCI researcher</span>, I explore the boundaries of cognitive and social systems in technology.
              </p>
            </div>
            <p>
              These roles mutually complement and fuel my <span className="font-medium">multidisciplinary approach</span>. Whether it’s designing, researching, or innovating, I thrive on enhancing human experiences by bridging minds and technologies.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[1.5rem] sm:gap-[3rem] pt-4">
          <span className="text-body-1 font-title font-medium">
            Contacts :
          </span>
          <div className="flex items-center gap-[0.625rem]">
            <img src={mailIcon} alt="mail icon" fetchPriority={HOME_FETCH_PRIORITIES[2]} className="w-[1.5rem] h-[1.5rem]" />
            <a href="mailto:andrea@icio.it" className="link-accent">Email</a>
          </div>
          <div className="flex items-center gap-[0.625rem]">
            <img src={inIcon} alt="linkedin icon" fetchPriority={HOME_FETCH_PRIORITIES[3]} className="w-[1.5rem] h-[1.5rem]" />
            <a href="https://www.linkedin.com/in/andreavalerio1" target="_blank" className="link-accent">LinkedIn</a>
          </div>
          <div className="flex items-center gap-[0.625rem]">
            <img src={ghIcon} alt="github icon" fetchPriority={HOME_FETCH_PRIORITIES[4]} className="w-[1.5rem] h-[1.5rem]" />
            <a href="https://github.com/andrea-valerio" target="_blank" className="link-accent">GitHub</a>
          </div>
        </div>
      </div>

      <section aria-labelledby="current-position-heading" className="col-span-12 w-full max-w-full">
        <div className="flex flex-col">
          <h2 id="current-position-heading" className="title-1">
            Current position
          </h2>
          <p className="body-1 mt-[24px] text-black">
            <span className="font-medium">Product Designer</span> for Loomly and Issuu @{' '}
            <a
              href="https://www.bendingspoons.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Bending Spoons
            </a>
          </p>
          <div className="mt-[8px]">
            <button
              id="previously-trigger"
              type="button"
              aria-expanded={previouslyOpen}
              aria-controls="previously-panel"
              onClick={() => setPreviouslyOpen((open) => !open)}
              className="body-1 flex items-center gap-2 text-left text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Previously
              <img
                src={pillChevronRight}
                alt=""
                width={12}
                height={12}
                draggable={false}
                fetchPriority={HOME_FETCH_PRIORITIES[5]}
                className={`pointer-events-none h-3 w-3 shrink-0 translate-y-[2px] transition-transform duration-200 ${
                  previouslyOpen ? '-rotate-90' : 'rotate-90'
                }`}
                aria-hidden
              />
            </button>
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                previouslyOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  id="previously-panel"
                  role="region"
                  aria-labelledby="previously-trigger"
                  aria-hidden={!previouslyOpen}
                  className="body-1 mt-2 flex flex-col gap-[4px] pl-[1.5rem] text-grey-5"
                >
                  <p>Product Designer for Meetup @ Bending Spoons</p>
                  <p>Research Assistant @ German Aerospace Center (DLR)</p>
                  <p>UX/UI Design Intern @ UNOX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="col-span-12 flex flex-col gap-[1.5rem]">
        <p className="title-1">Projects</p>
        <div className="col-span-12 grid grid-cols-2 gap-[3rem]">
          <ProjectBox name="Meetup" desc="Product Design" imageName="meetup" />
          <ProjectBox
            name="Groove"
            desc="UX / UI Design"
            imageName="groove"
            ribbonSrc={ribbonStartup}
            ribbonFetchPriority={HOME_FETCH_PRIORITIES[8]}
          />
          <ProjectBox
            name="Teleoperators' Workload"
            desc="HCI Research & Data Analysis"
            imageName="thesis"
            ribbonSrc={ribbonMscThesis}
            ribbonFetchPriority={HOME_FETCH_PRIORITIES[10]}
          />
          <ProjectBox name="Oven Configurator" desc="UX Research & Design" imageName="ovenconf" />
          <ProjectBox name="Citizen-Institution Interaction" desc="UX Research & Design" imageName="citinst" />
          <ProjectBox name="Ecomuseo Argentario" desc="UX / UI Design" imageName="ecomuseo" />
          {SHOW_SUSTSMOK_REELSFYP_ON_HOME && (
            <>
              <ProjectBox name="Sustainability & Smoking" desc="Qualitative Research" imageName="sustsmok" />
              <ProjectBox name="Instagram vs TikTok" desc="Quantitative Research" imageName="reelsfyp" />
            </>
          )}
        </div>
      </div>

      <section aria-labelledby="publications-heading" className="col-span-12 w-full max-w-full">
        <div className="flex flex-col gap-[24px]">
          <h2 id="publications-heading" className="title-1">
            Publications
          </h2>
          <ul className="body-1 list-disc pl-[1.5rem] flex flex-col gap-[12px] break-words text-black marker:text-black">
            <li>
              <span className="italic">[submitted]</span> Walocha, F., Valerio, A., Nguyen, P., Ihme, K. (2025, September). The Role of Task Frequency
              and Complexity in Remote Assistance for Highly Automated Vehicles: Assessing Mental Load based on Eyetracking and Physiology. In Proceedings
              of the 18th International Conference on Automotive User Interfaces and Interactive Vehicular Applications.
            </li>
            <li>
              <span className="italic">[magazine]</span> Petersen, M., Le, D. H., Valerio, A., Dotzauer, M., & Wasić, C. (2026, April).
              Fahrgastinformationen am Bahnsteig: Ergebnisse einer VR-Studie. EI – Der Eisenbahningenieur, 4/26, 22–25.
            </li>
            <li>
              Valerio, A., Nguyen, H. P., Ihme, K., & Walocha, F. (2025). Assessment and Prediction of Remote Operators’ Mental Workload Through AoI Data
              in AV Scenarios. In Proceedings of the 2025 Mensch und Computer 2025 (pp. 482-487).{' '}
              <a
                href="https://doi.org/10.1145/3743049.3748583"
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1145/3743049.3748583
              </a>
            </li>
            <li>
              Walocha, F., Valerio, A., Nguyen, P., Ihme, K. (2025). Understanding Effects and Physiological Correlates of Operator Workload Across
              Remote Assistance Scenarios for Automated Vehicles - Results from a User Study. In: Stephanidis, C., Antona, M., Ntoa, S., Salvendy, G. (eds)
              HCI International 2025 Posters. HCII 2025. Communications in Computer and Information Science, vol 2523. Springer, Cham.{' '}
              <a
                href="https://doi.org/10.1007/978-3-031-94153-5_10"
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1007/978-3-031-94153-5_10
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )

  return (
    <LayoutWrapper header={header} content={content} className="!gap-[4rem] lg:!gap-[6rem]" />
  )
}

export default HomePage
