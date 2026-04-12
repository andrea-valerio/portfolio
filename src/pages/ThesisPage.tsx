import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import comparisonWeb from '../assets/projects/meetup/redesign/comparison-web.png'
import comparisonMobile from '../assets/projects/meetup/redesign/comparison-mobile.png'
import groupCreation from '../assets/projects/meetup/redesign/group-creation.png'
import attendance from '../assets/projects/meetup/redesign/attendance.png'
import organizer from '../assets/projects/meetup/redesign/organizer.png'
import others from '../assets/projects/meetup/redesign/others.png'
import personas1 from '../assets/projects/ecomuseo/personas-1.png'
import personas2 from '../assets/projects/ecomuseo/personas-2.png'
import personas3 from '../assets/projects/ecomuseo/personas-3.png'

const redesignImages = [
  comparisonWeb,
  comparisonMobile,
  groupCreation,
  attendance,
  organizer,
  others,
]

const redesignAlts = [
  'Web comparison',
  'Mobile comparison',
  'Group creation flow',
  'Attendance flow',
  'Organizer',
  'Additional screens',
]

function ThesisPage() {
  const header = <HeroSection title="Teleoperators' Workload" imageName="thesis" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide item2="Approach" item3="Insights" item4="Results" />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <DetailsText>
          June 2024 - March 2025, individual project
          <br />
          MSc in Human-Computer Interaction, Master’s Thesis
        </DetailsText>

        <div className="project-text-container" id="section-1">
          <p className="title-2">Introduction</p>
          <div className="project-text">
            <p>
              This project investigates how <span className="font-medium">mental workload</span> affects{' '}
              <span className="font-medium">remote operators</span> managing autonomous vehicle fleets. In these systems, operators must continuously monitor
              and intervene, making workload a critical factor for safety and performance.
            </p>
            <p>
              The goal was to explore whether <span className="font-medium">eye-tracking data</span> can be used to
              assess and predict workload in real time, enabling more adaptive and intelligent interfaces.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-2">
          <p className="title-2">Approach</p>
          <div className="project-text">
            <p>
              I analyzed eye-tracking data from a{' '}
              <span className="font-medium">controlled user study</span> where task <span className="font-medium">difficulty</span> and{' '}
              <span className="font-medium">frequency</span> were manipulated to induce different workload levels.
            </p>
            <p>
              The analysis focused on <span className="font-medium">Area-of-Interest (AoI) metrics</span>,
              capturing how users visually interact with different parts of the <span className="font-medium">interface</span>. This spatial approach allowed
              identifying not just how much users look, but where and how their attention shifts under varying workload conditions.
            </p>
            <p>
              The study combined <span className="font-medium">statistical analysis</span> with{' '}
              <span className="font-medium">machine learning</span> to both explain behavioral patterns and evaluate predictive potential.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={redesignImages}
            width={0}
            lightbox
            lightboxLayout="landscape"
            imageAlts={redesignAlts}
          />
        </div>

        <div className="project-text-container" id="section-3">
          <p className="title-2">Insights</p>
          <div className="project-text">
            <p>
              Workload significantly reshapes visual behavior. Under high workload, operators show:
            </p>
            <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
              <li>
                More frequent but shorter fixations, indicating <span className="font-medium">faster information processing</span>
              </li>
              <li>
                Reduced revisits to non-critical areas, suggesting <span className="font-medium">focused attention</span>
              </li>
              <li>
                Increased <span className="font-medium">exploratory patterns</span>, driven by the need to integrate information across the interface
              </li>
            </ul>
            <p>
              Task difficulty had a broader impact than frequency, affecting most visual metrics, while
              frequency mainly influenced attention timing and reactivity. These findings highlight how interface structure and task design directly shape
              cognitive load and attention strategies.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={[personas1, personas2, personas3]}
            width={300}
            round={0.5}
            lightbox
            lightboxLayout="portrait"
            imageAlts={['Personas 1', 'Personas 2', 'Personas 3']}
          />
        </div>

        <div className="project-text-container" id="section-4">
          <p className="title-2">Results</p>
          <div className="project-text">
            <p>
              The project demonstrates that{' '}
              <span className="font-medium">AoI-based eye-tracking metrics can reliably estimate operator workload</span>, with predictive models reaching:
            </p>
            <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
              <li>~83% performance for binary workload detection</li>
              <li>80% for frequency-related states</li>
            </ul>
            <p>
              These results support the design of{' '}
              <span className="font-medium">adaptive intelligent interfaces</span> capable of detecting cognitive overload and responding in real time — for
              example by prioritizing information or assisting decision-making.
            </p>
            <p>
              This work contributes to bridging human factors research and intelligent system design, moving
              toward safer and more responsive autonomous vehicle operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return <LayoutWrapper header={header} content={content} />
}

export default ThesisPage
