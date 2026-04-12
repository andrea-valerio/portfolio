import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { ProjectPageSkeleton } from '../components/ProjectPageSkeleton'
import { useAssetsReady } from '../hooks/useAssetsReady'
import ecomuseoHero from '../assets/projects/ecomuseo.png'
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

const ECOMUSEO_PRELOAD_IMAGES: readonly string[] = [
  ecomuseoHero,
  personas1,
  personas2,
  personas3,
  taxonomyImg,
  sketchesImg,
  ecomHome,
  ecomOrrido,
  ecomCiucioi,
  ecomTicket,
  ecomPayment,
]

function EcomuseoPage() {
    const assetsReady = useAssetsReady({ images: ECOMUSEO_PRELOAD_IMAGES })
    if (!assetsReady) {
      return <LayoutWrapper header={<ProjectPageSkeleton.Header />} content={<ProjectPageSkeleton.Body />} />
    }

    const header = <HeroSection title="Ecomuseo Argentario" imageName="ecomuseo" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Design process" item3="Final result" />

        {/* Divider */}
        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

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
                The project was a <span className="font-medium">real-world case study</span> aiming to consolidate multiple museum websites while ensuring 
                that each museum’s unique <span className="font-medium">brand identity</span> is preserved. The prototype was limited to two museums, mainly
                focusing on the <span className="font-medium">visual design</span>.
              </p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Design process</p>
            <div className="project-text">
              <p>A quick <span className="font-medium">Double Diamond</span> approach was followed.</p>
              <p>
                The team began with stakeholder interviews, benchmark analysis, and interaction research to gather more knowledge on the domain. In terms of UX, 
                the gathered insights can be summarized through the user personas:
              </p>
            </div>
          </div>

          {/* personas (image): 300px-wide cards; scroll when needed; one lightbox with pill across all three */}
          <div className="project-image-container flex-row items-start gap-[3rem] w-full">
            <span className="body-2 shrink-0">Personas</span>
            <div className="min-w-0 flex-1 w-full">
              <Carousel
                images={[personas1, personas2, personas3]}
                width={300}
                round={0.5}
                lightbox
                lightboxLayout="portrait"
                imageAlts={['Personas 1', 'Personas 2', 'Personas 3']}
              />
            </div>
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                These results led to the the first definition of the UX of the website, represented by <span className="font-medium">sketches</span> and
                a <span className="font-medium">taxonomy graph</span>. Moreover, a comprehensive multi-brand <span className="font-medium">design system</span> is
                created to fit the requirement.
              </p>
              <p>Finally, mock-ups and an <span className="font-medium">interactive prototype</span> were built and tested with users to refine the solution.</p>
            </div>
          </div>

          {/* taxonomy (image) */}
          <div className="project-image-container">
            <span className="body-2">Taxonomy</span>
            <Carousel
              images={[taxonomyImg]}
              width={0}
              round={1}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Taxonomy']}
            />
          </div>

          {/* sketches (image) */}
          <div className="project-image-container">
            <span className="body-2">Sketches</span>
            <Carousel
              images={[sketchesImg]}
              width={0}
              round={1}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Sketches']}
            />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Final result</p>
            <div className="project-text">
              <p>
                <span className="font-medium">User personas</span> were instrumental in shaping the design, summarizing insights related to internationality, family
                and school discounts, resources, and information required.
              </p>
              <p>
                The final design consisted of <span className="font-medium">three sections</span> on the website: a shared homepage for general information and one
                dedicated sub-page for each museum.
                </p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li>The <span className="font-medium">museum-specific pages</span> provided detailed descriptions, including practical information like timings,
                  accessibility, group sizes, and ticket types.
                </li>
                <li>
                  The <span className="font-medium">general section</span> offered an overview of the area, redirecting users to the museums’ sub-pages and highlighting news and events.
                </li>
              </ul>
              <p>
                <span className="font-medium">Consistency</span> was achieved across the platform through cohesive design elements such as shared navigation, identical
                top bars, and a unified footer. While colour schemes reflected each <span className="font-medium">museum’s identity</span>, the layout remained uniform,
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
            lightbox
            lightboxLayout="landscape"
            imageAlts={['Home', 'Orrido museum', 'Ciucioi museum', 'Ticket', 'Payment']}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default EcomuseoPage