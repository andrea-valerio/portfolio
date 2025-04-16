import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'

function CitInstPage() {
    const header = <HeroSection title="Citizen-Institution Interaction" imageName="citinst" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research" item3="Final result" />

        {/* Divider */}
        <div className="w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            March - June 2022, 5-member team<br />
            BA in Interfaces and Communication Technologies, course in Advanced Human-Computer Interaction
          </DetailsText>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>TThe project aimed to design the Help and Support services and the Appointment Booking section for a
                <span className="font-semibold">public website template</span>, soon being available to all Italian municipalities.</p>
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
                Following a preliminary <span className="font-semibold">benchmarking</span> phase on both the public and private sectors,
                the main research part has been conducted through <span className="font-semibold">interviews</span>.
                The goal was to understand how citizens get in touch with their municipality, past problematic cases and possible expectations.
              </p>
              <p>The emerged data highlighted:</p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li>Citizens prefer <span className="font-semibold">traditional communication</span> channels over online assistance.</li>
                <li><span className="font-semibold">Big companies</span> like Amazon and Apple are perceived differently due to their swift
                  feedback and solutions.</li>
                <li><span className="font-semibold">FAQs</span> are appreciated, even though the term itself is not widely recognized.</li>
                <li>Most appointments are booked <span className="font-semibold">in person</span> due to the lack of an online service.</li>
                <li>There is interest in an <span className="font-semibold">online booking</span> tool, influenced by increased comfort with online
                  systems post-pandemic.</li>
              </ul>
              <p>
                As following steps, <span className="font-semibold">user personas</span>, <span className="font-semibold">experience maps</span>,
                <span className="font-semibold">conceptual maps</span> and <span className="font-semibold">taxonomy</span> have been used to develop
                more on the insights.
              </p>
            </div>
          </div>

          {/* concept map (image) */}
          <div className="project-image-container">
            <span className="body-2">Concept map</span>
            <img
              src="./src/assets/projects/citinst/concept-map.png"
              alt="Concept map"
              className="project-image"
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                The conceptual map is structured around key themes related to citizen feedback and support. It includes the following main components:
              </p>
              <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
                <li><span className="font-semibold">Actors:</span> key stakeholders involved in citizen communication.</li>
                <li><span className="font-semibold">Feedback:</span> methods and channels through which citizens provide input</li>
                <li><span className="font-semibold">Support:</span> assistance provided to citizens, like help channels, FAQs, and resources.</li>
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
          <div className="project-image-container">
            <span className="body-2">Sections taxonomy</span>
            <img
              src="./src/assets/projects/citinst/taxonomy.png"
              alt="Sections Taxonomy"
              className="project-image"
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
            <img
              src="./src/assets/projects/citinst/sketches.png"
              alt="Sketches"
              className="project-image"
            />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Final result</p>
            <div className="project-text">
              <p>
                The final version is a <span className="font-semibold">dynamic contact hub</span>, segmented into two main functionalities, Supporting and Reporting.
                Supporting communication channels includes: FAQs, chatbot, email, phone and appointments. The latter has been designed following the already
                <span className="font-semibold">familiar covid-related booking systems</span>.
                The Reporting section gathers opinions about online services and reports on the municipality land.
              </p>
            </div>
          </div>

          <Carousel
            images={[
              './src/assets/projects/citinst/results/contact.png',
              './src/assets/projects/citinst/results/help.png',
              './src/assets/projects/citinst/results/opinion.png',
              './src/assets/projects/citinst/results/booking.png',
              './src/assets/projects/citinst/results/faq.png',
              './src/assets/projects/citinst/results/feedback.png',
            ]}
            width={200}
            round={1}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default CitInstPage