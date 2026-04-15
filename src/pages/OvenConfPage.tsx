import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { ProjectPageSkeleton } from '../components/ProjectPageSkeleton'
import { buildFetchPriorities, useImagesPaintReady } from '../hooks/useImagesPaintReady'
import ovenconfHero from '../assets/projects/ovenconf.webp'
import accessFlow from '../assets/projects/ovenconf/access-flow.webp';
import configurationFlow from '../assets/projects/ovenconf/configuration-flow.webp';
import ovenHome from '../assets/projects/ovenconf/results/home.webp';
import ovensImg from '../assets/projects/ovenconf/results/ovens.webp';
import secondOvenImg from '../assets/projects/ovenconf/results/second-oven.webp';
import placementImg from '../assets/projects/ovenconf/results/placement.webp';
import accessoryImg from '../assets/projects/ovenconf/results/accessory.webp';
import reviewImg from '../assets/projects/ovenconf/results/review.webp';

const OVENCONF_ORDERED_IMAGES: readonly string[] = [
  ovenconfHero,
  accessFlow,
  configurationFlow,
  ovenHome,
  ovensImg,
  secondOvenImg,
  placementImg,
  accessoryImg,
  reviewImg,
]

const OVEN_PRIORITIES = buildFetchPriorities(OVENCONF_ORDERED_IMAGES.length)

function OvenConfPage() {
    const paintReady = useImagesPaintReady(OVENCONF_ORDERED_IMAGES)
    if (!paintReady) {
      return (
      <LayoutWrapper
        header={<ProjectPageSkeleton.Header />}
        content={<ProjectPageSkeleton.Body />}
        contentOverlaysHero
      />
    )
    }

    const header = <HeroSection title="Oven Configurator" imageName="ovenconf" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research" item3="Final results" />

        {/* Divider */}
        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <ProjectMetaStart>
            <DetailsText>
              May - July 2022, 3-member team<br />
              UX Design and Research Intern @ UNOX
            </DetailsText>
          </ProjectMetaStart>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>The project was carried out during my internship period at UNOX, a multinational manufacturing company selling professional intelligent ovens.
                The goal was to <span className="font-medium">redesign</span> the oven configurator, especially from the perspective of the <span className="font-medium">company marketers</span>.</p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Research</p>
            <div className="project-text">
              <p>The process began with a <span className="font-medium">heuristic assessment</span> of the current product layout, which is a section of the company website. A <span className="font-medium">benchmark analysis</span>, especially in the car industry, was also helpful to have fresh insights.</p>
              <p><span className="font-medium">Interviews</span> as well as <span className="font-medium">think-aloud</span> sessions allowed the team to learn the needs and the work process of <em>UNOX</em> marketers, but also about final customers.</p>
              <p>As learned, <span className="font-medium">consultation</span> involves these phases:</p>
              <ol className="list-decimal pl-[1.5rem] space-y-[0.375rem]">
                <li>find the customer</li>
                <li>understand the needs</li>
                <li>present the best-suiting product</li>
                <li>individual cooking experience (trial)</li>
                <li>sell the oven configuration</li>
              </ol>
              <p>The oven configurator makes its appearance in the third step. Moreover, <span className="font-medium">usability issues</span> have been detected such as accessibility, process consistency, and language clarity; besides some configuration building constraints.</p>
              <p>The process then continued with the <span className="font-medium">conceptualization</span> of the new design of the configuration process, followed by <span className="font-medium">wireframes</span> and <span className="font-medium">prototype</span>.</p>
            </div>
          </div>

          {/* access (image) */}
          <div className="project-image-container">
            <span className="body-2">Access flow</span>
            <Carousel
              images={[accessFlow]}
              width={0}
              round={1.25}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Access flow']}
              imageFetchPriorities={OVEN_PRIORITIES.slice(1, 2)}
            />
          </div>

          {/* configuration (image) */}
          <div className="project-image-container-small">
            <span className="body-2">Configuration flow</span>
            <Carousel
              images={[configurationFlow]}
              width={0}
              round={1.25}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Configuration flow']}
              imageFetchPriorities={OVEN_PRIORITIES.slice(2, 3)}
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>To conclude, a final session of <span className="font-medium">usability testing</span> has been vital to ensure practical functionality. These are the main takes:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li>every participant managed to carry out the tasks</li>
                <li>every participant couldn’t understand what the configuration is about</li>
                <li>some users had doubts on whether they added the secondary accessory or not</li>
                <li>in the review phase, secondary buttons stood out more than the CTA</li>
              </ul>
            </div>
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Final results</p>
            <div className="project-text">
              <p>The team wanted to make the building process as smooth and flexible as possible. Indeed, now it’s possible to select ovens and accessories one by one,
                with <span className="font-medium">serial constraint logic</span> and complete <span className="font-medium">process awareness</span>.
                Moreover, usability is improved and <span className="font-medium">new options</span> are available. In addition, a
                <span className="font-medium">product-recommending survey</span> feature tailored to final customers’ needs has been designed.</p>
            </div>
          </div>

          <Carousel
            images={[
              ovenHome,
              ovensImg,
              secondOvenImg,
              placementImg,
              accessoryImg,
              reviewImg,
            ]}
            width={0}
            round={1.25}
            lightbox
            lightboxLayout="landscape"
            imageAlts={[
              'Home',
              'Ovens selection',
              'Second oven',
              'Placement',
              'Accessory',
              'Review',
            ]}
            imageFetchPriorities={OVEN_PRIORITIES.slice(3, 9)}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} contentOverlaysHero />
  }
  
  export default OvenConfPage