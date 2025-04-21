import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import accessFlow from '../assets/projects/ovenconf/access-flow.png';
import configurationFlow from '../assets/projects/ovenconf/configuration-flow.png';
import ovenHome from '../assets/projects/ovenconf/results/home.png';
import ovensImg from '../assets/projects/ovenconf/results/ovens.png';
import secondOvenImg from '../assets/projects/ovenconf/results/second-oven.png';
import placementImg from '../assets/projects/ovenconf/results/placement.png';
import accessoryImg from '../assets/projects/ovenconf/results/accessory.png';
import reviewImg from '../assets/projects/ovenconf/results/review.png';

function OvenConfPage() {
    const header = <HeroSection title="Oven Configurator" imageName="ovenconf" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research" item3="Final results" />

        {/* Divider */}
        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            May - July 2022, 3-member team<br />
            UX Design and Research Intern at UNOX, Internship project
          </DetailsText>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>The project was carried out during my internship period at UNOX, a multinational manufacturing company selling professional intelligent ovens.
                The goal was to <span className="font-semibold">redesign</span> the oven configurator, especially from the perspective of the <span className="font-semibold">company marketers</span>.</p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Research</p>
            <div className="project-text">
              <p>The process began with a <span className="font-semibold">heuristic assessment</span> of the current product layout, which is a section of the company website. A <span className="font-semibold">benchmark analysis</span>, especially in the car industry, was also helpful to have fresh insights.</p>
              <p><span className="font-semibold">Interviews</span> as well as <span className="font-semibold">think-aloud</span> sessions allowed the team to learn the needs and the work process of <em>UNOX</em> marketers, but also about final customers.</p>
              <p>As learned, <span className="font-semibold">consultation</span> involves these phases:</p>
              <ol className="list-decimal pl-[1.5rem] space-y-[0.375rem]">
                <li>find the customer</li>
                <li>understand the needs</li>
                <li>present the best-suiting product</li>
                <li>individual cooking experience (trial)</li>
                <li>sell the oven configuration</li>
              </ol>
              <p>The oven configurator makes its appearance in the third step. Moreover, <span className="font-semibold">usability issues</span> have been detected such as accessibility, process consistency, and language clarity; besides some configuration building constraints.</p>
              <p>The process then continued with the <span className="font-semibold">conceptualization</span> of the new design of the configuration process, followed by <span className="font-semibold">wireframes</span> and <span className="font-semibold">prototype</span>.</p>
            </div>
          </div>

          {/* access (image) */}
          <div className="project-image-container">
            <span className="body-2">Access flow</span>
            <img
              src={accessFlow}
              alt="Access flow"
              className="project-image"
            />
          </div>

          {/* configuration (image) */}
          <div className="project-image-container-small">
            <span className="body-2">Configuration flow</span>
            <img
              src={configurationFlow}
              alt="Configuration flow"
              className="project-image"
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>To conclude, a final session of <span className="font-semibold">usability testing</span> has been vital to ensure practical functionality. These are the main takes:</p>
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
                with <span className="font-semibold">serial constraint logic</span> and complete <span className="font-semibold">process awareness</span>.
                Moreover, usability is improved and <span className="font-semibold">new options</span> are available. In addition, a
                <span className="font-semibold">product-recommending survey</span> feature tailored to final customers’ needs has been designed.</p>
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
            round={1}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default OvenConfPage