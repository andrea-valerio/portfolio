import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
// Asset imports
import personas1 from '../assets/projects/ecomuseo/personas-1.png';
import personas2 from '../assets/projects/ecomuseo/personas-2.png';
import personas3 from '../assets/projects/ecomuseo/personas-3.png';
import taxonomyImg from '../assets/projects/ecomuseo/taxonomy.png';
import sketchesImg from '../assets/projects/ecomuseo/sketches.png';
import ecomHome from '../assets/projects/ecomuseo/results/home.png';
import ecomOrrido from '../assets/projects/ecomuseo/results/orrido.png';
import ecomCiucioi from '../assets/projects/ecomuseo/results/ciucioi.png';
import ecomTicket from '../assets/projects/ecomuseo/results/ticket.png';
import ecomPayment from '../assets/projects/ecomuseo/results/payment.png';

function EcomuseoPage() {
    const header = <HeroSection title="Ecomuseo Argentario" imageName="ecomuseo" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Design process" item3="Final result" />

        {/* Divider */}
        <div className="w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            April - June 2023, 4-member team<br />
            MSc in Human-Computer Interaction, course in Visual Design
          </DetailsText>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>
                The project was a <span className="font-semibold">real-world case study</span> aiming to consolidate multiple museum websites while ensuring 
                that each museum’s unique <span className="font-semibold">brand identity</span> is preserved. The prototype was limited to two museums, mainly
                focusing on the <span className="font-semibold">visual design</span>.
              </p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Design process</p>
            <div className="project-text">
              <p>A quick <span className="font-semibold">Double Diamond</span> approach was followed.</p>
              <p>
                The team began with stakeholder interviews, benchmark analysis, and interaction research to gather more knowledge on the domain. In terms of UX, 
                the gathered insights can be summarized through the user personas:
              </p>
            </div>
          </div>

          {/* personas (image) */}
          <div className="project-image-container flex-row gap-[3rem]">
            <span className="body-2">Personas</span>
            <div className="flex items-center gap-[3rem] w-full">
              <div className="">
                <img src={personas1} alt="Personas 1" className="project-image-small" />
              </div>
              <div className="">
                <img src={personas2} alt="Personas 2" className="project-image-small" />
              </div>
              <div className="">
                <img src={personas3} alt="Personas 3" className="project-image-small" />
              </div>
            </div>
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                These results led to the the first definition of the UX of the website, represented by <span className="font-semibold">sketches</span> and
                a <span className="font-semibold">taxonomy graph</span>. Moreover, a comprehensive multi-brand <span className="font-semibold">design system</span> is
                created to fit the requirement.
              </p>
              <p>Finally, mock-ups and an <span className="font-semibold">interactive prototype</span> were built and tested with users to refine the solution.</p>
            </div>
          </div>

          {/* taxonomy (image) */}
          <div className="project-image-container">
            <span className="body-2">Taxonomy</span>
            <img src={taxonomyImg} alt="Taxonomy" className="project-image" />
          </div>

          {/* sketches (image) */}
          <div className="project-image-container">
            <span className="body-2">Sketches</span>
            <img src={sketchesImg} alt="Sketches" className="project-image" />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Final result</p>
            <div className="project-text">
              <p>
                <span className="font-semibold">User personas</span> were instrumental in shaping the design, summarizing insights related to internationality, family
                and school discounts, resources, and information required.
              </p>
              <p>
                The final design consisted of <span className="font-semibold">three sections</span> on the website: a shared homepage for general information and one
                dedicated sub-page for each museum.
                </p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li>The <span className="font-semibold">museum-specific pages</span> provided detailed descriptions, including practical information like timings,
                  accessibility, group sizes, and ticket types.
                </li>
                <li>
                  The <span className="font-semibold">general section</span> offered an overview of the area, redirecting users to the museums’ sub-pages and highlighting news and events.
                </li>
              </ul>
              <p>
                <span className="font-semibold">Consistency</span> was achieved across the platform through cohesive design elements such as shared navigation, identical
                top bars, and a unified footer. While colour schemes reflected each <span className="font-semibold">museum’s identity</span>, the layout remained uniform,
                ensuring a seamless experience for users.
              </p>
            </div>
          </div>

          <Carousel
            images={[
              ecomHome,
              ecomOrrido,
              ecomCiucioi,
              ecomTicket,
              ecomPayment,
            ]}
            width={0}
            round={1}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default EcomuseoPage