import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import VideoAnimation from '../components/VideoAnimation'

function GroovePage() {
    const header = <HeroSection title="Groove" imageName="groove" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Design process" item3="Final result" />

        {/* Divider */}
        <div className="w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            September - November 2024, individual project<br />
            UX/UI Designer for Groove Project
          </DetailsText>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>This project was developed for a <span className="font-semibold">start-up</span> based in Trento, focusing on creating a MVP for their investor pitch.</p>
              <p>The app is designed to streamline the <span className="font-semibold">search and purchase of club event tickets</span> using geolocation and personalized suggestions.</p>
              <p>The project had a tight <span className="font-semibold">one-month</span> timeline, executed as a side project while balancing my full-time research intern position.</p>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Design process</p>
            <div className="project-text">
              <p>A <span className="font-semibold">Double Diamond</span> methodology was applied.</p>
              <p>In the discovery phase, stakeholder interviews, benchmark analysis, and <span className="font-semibold">online ethnography</span> were conducted, alongside the creation of <span className="font-semibold">personas</span> and <span className="font-semibold">experience journeys</span>.</p>
            </div>
          </div>

          {/* stakeholder interview (image) */}
          <div className="project-image-container">
            <span className="body-2">Stakeholder Interview Wrap-up</span>
            <img
              src="./src/assets/projects/groove/stakeholder-interview.png"
              alt="Stakeholder interview"
              className="project-image"
            />
          </div>

          {/* personas (image) */}
          <div className="project-image-container">
            <span className="body-2">User Personas</span>
            <img
              src="./src/assets/projects/groove/personas.png"
              alt="User personas"
              className="project-image"
            />
          </div>

          {/* journey (image) */}
          <div className="project-image-container">
            <span className="body-2">Experience Journeys</span>
            <img
              src="./src/assets/projects/groove/journeys.png"
              alt="Experience journeys"
              className="project-image"
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>During the development phase, <span className="font-semibold">Crazy 8 brainstorming</span>  with stakeholders, sketches, low- and <span className="font-semibold">high-fidelity mock-ups</span> were created.
                A <span className="font-semibold">quick video animation</span> was also set-up for a funding contest.</p>
            </div>
          </div>

          {/* crazy8 (image) */}
          <div className="project-image-container">
            <span className="body-2">Crazy8 with Stakeholders</span>
            <img
              src="./src/assets/projects/groove/crazy8.png"
              alt="Crazy 8 brainstorming"
              className="project-image"
            />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Final result</p>
            <div className="project-text">
              <p>The final design featured three main sections:</p>
              <ol className="list-decimal pl-[1.5rem] space-y-[0.375rem]">
                <li>
                  <span className="font-semibold">Home:</span> Includes a search bar, a carousel of personalized suggestion cards, and a map-based exploration tool with filters for event preferences.
                  Event page provides detailed information, ticket availability, links to venue details, and similar upcoming events.
                </li>
                <li>
                  <span className="font-semibold">Tickets:</span> Displays chronologically listed purchased tickets with essential event details and easy-to-use QR codes for smooth check-in.
                </li>
                <li>
                  <span className="font-semibold">Profile:</span> Shows the favourite events and venues, besides providing access to the friends list, fostering a small social dimension within the app.
                </li>
              </ol>
              <p>
                The app’s design ensures intuitive navigation, vivid visuals, and functionality. The geolocation feature allows users to explore events dynamically, and the ticketing system is tailored
                for convenience and quick access during entry.
              </p>
            </div>
          </div>

          <VideoAnimation />

          <Carousel
            images={[
              './src/assets/projects/groove/results/Sign-up.png',
              './src/assets/projects/groove/results/Home.png',
              './src/assets/projects/groove/results/Ricerca.png',
              './src/assets/projects/groove/results/Mappa.png',
              './src/assets/projects/groove/results/Evento.png',
              './src/assets/projects/groove/results/Locale.png',
              './src/assets/projects/groove/results/Biglietti.png',
              './src/assets/projects/groove/results/Biglietto.png',
            ]}
            width={200}
            round={1.625}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default GroovePage