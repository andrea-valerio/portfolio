import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { ProjectPageSkeleton } from '../components/ProjectPageSkeleton'
import { useAssetsReady } from '../hooks/useAssetsReady'
import citinstHero from '../assets/projects/citinst.webp'
import conceptMap from '../assets/projects/citinst/concept-map.webp';
import taxonomy from '../assets/projects/citinst/taxonomy.webp';
import sketches from '../assets/projects/citinst/sketches.webp';
import contact from '../assets/projects/citinst/results/contact.webp';
import help from '../assets/projects/citinst/results/help.webp';
import opinion from '../assets/projects/citinst/results/opinion.webp';
import booking from '../assets/projects/citinst/results/booking.webp';
import faq from '../assets/projects/citinst/results/faq.webp';
import feedback from '../assets/projects/citinst/results/feedback.webp';

const CITINST_PRELOAD_IMAGES: readonly string[] = [citinstHero]

function CitInstPage() {
    const assetsReady = useAssetsReady({ images: CITINST_PRELOAD_IMAGES })
    if (!assetsReady) {
      return <LayoutWrapper header={<ProjectPageSkeleton.Header />} content={<ProjectPageSkeleton.Body />} />
    }

    const header = <HeroSection title="Citizen-Institution Interaction" imageName="citinst" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research" item3="Final result" />

        {/* Divider */}
        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <ProjectMetaStart>
            <DetailsText>
              March - June 2022, 5-member team<br />
              BA in Interfaces and Communication Technologies, course in Advanced Human-Computer Interaction
            </DetailsText>
          </ProjectMetaStart>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>TThe project aimed to design the Help and Support services and the Appointment Booking section for a 
                <span className="font-medium">public website template</span>, soon being available to all Italian municipalities.</p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Research</p>
            <div className="project-text">
              <p>
                The aim of the research is to understand how Italian citizens conceptualize the “Help and Support” sections, in order to better present it digitally.
              </p>
              <p>
                Following a preliminary <span className="font-medium">benchmarking</span> phase on both the public and private sectors,
                the main research part has been conducted through <span className="font-medium">interviews</span>.
                The goal was to understand how citizens get in touch with their municipality, past problematic cases and possible expectations.
              </p>
              <p>The emerged data highlighted:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li>Citizens prefer <span className="font-medium">traditional communication</span> channels over online assistance.</li>
                <li><span className="font-medium">Big companies</span> like Amazon and Apple are perceived differently due to their swift
                  feedback and solutions.</li>
                <li><span className="font-medium">FAQs</span> are appreciated, even though the term itself is not widely recognized.</li>
                <li>Most appointments are booked <span className="font-medium">in person</span> due to the lack of an online service.</li>
                <li>There is interest in an <span className="font-medium">online booking</span> tool, influenced by increased comfort with online
                  systems post-pandemic.</li>
              </ul>
              <p>
                As following steps, <span className="font-medium">user personas</span>, <span className="font-medium">experience maps</span>,
                <span className="font-medium">conceptual maps</span> and <span className="font-medium">taxonomy</span> have been used to develop
                more on the insights.
              </p>
            </div>
          </div>

          {/* concept map (image) */}
          <div className="project-image-container">
            <span className="body-2">Concept map</span>
            <Carousel
              images={[conceptMap]}
              width={0}
              round={1}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Concept map']}
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                The conceptual map is structured around key themes related to citizen feedback and support. It includes the following main components:
              </p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li><span className="font-medium">Actors:</span> key stakeholders involved in citizen communication.</li>
                <li><span className="font-medium">Feedback:</span> methods and channels through which citizens provide input</li>
                <li><span className="font-medium">Support:</span> assistance provided to citizens, like help channels, FAQs, and resources.</li>
              </ul>
              <p>
                Each section is further broken down into subcategories, illustrating different communication methods, issues, and solutions.
              </p>
              <p>
                From the map, the taxonomy of the sections is then derived.
              </p>
            </div>
          </div>

          {/* taxonomy (image) */}
          <div className="project-image-container-small">
            <span className="body-2">Sections taxonomy</span>
            <Carousel
              images={[taxonomy]}
              width={0}
              round={0.5}
              lightbox
              lightboxLayout="landscape"
              imageAlts={['Sections taxonomy']}
            />
          </div>

          {/* process(3) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                As final step before the high-fidelity prototype, the design of the experience has been sketched.
              </p>
            </div>
          </div>

          {/* sketches (image) */}
          <div className="project-image-container">
            <span className="body-2">Sections taxonomy</span>
            <Carousel
              images={[sketches]}
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
                The final version is a <span className="font-medium">dynamic contact hub</span>, segmented into two main functionalities, Supporting and Reporting.
                Supporting communication channels includes: FAQs, chatbot, email, phone and appointments. The latter has been designed following the already
                <span className="font-medium">familiar covid-related booking systems</span>.
                The Reporting section gathers opinions about online services and reports on the municipality land.
              </p>
            </div>
          </div>

          <Carousel
            images={[
              contact,
              help,
              opinion,
              booking,
              faq,
              feedback,
            ]}
            width={200}
            lightbox
            lightboxLayout="landscape"
            imageAlts={['Contact hub', 'Help', 'Opinion', 'Booking', 'FAQ', 'Feedback']}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default CitInstPage