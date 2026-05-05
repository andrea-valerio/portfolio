import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { buildFetchPriorities } from '../hooks/useImagesPaintReady'
import type { BundledSrc } from '../types/bundled-asset'
import grooveHero from '../assets/projects/groove.png'
import stakeholderInterview from '../assets/projects/groove/stakeholder-interview.png'
import userPersonas from '../assets/projects/groove/personas.png'
import experienceJourneys from '../assets/projects/groove/journeys.png'
import crazyEight from '../assets/projects/groove/crazy8.png'
import signUpImg from '../assets/projects/groove/results/Sign-up.png'
import homeImg from '../assets/projects/groove/results/Home.png'
import ricercaImg from '../assets/projects/groove/results/Ricerca.png'
import mappaImg from '../assets/projects/groove/results/Mappa.png'
import eventoImg from '../assets/projects/groove/results/Evento.png'
import localeImg from '../assets/projects/groove/results/Locale.png'
import bigliettiImg from '../assets/projects/groove/results/Biglietti.png'
import bigliettoImg from '../assets/projects/groove/results/Biglietto.png'

/** Top-to-bottom order for 80% paint gate + `fetchPriority` tiers */
const GROOVE_ORDERED_IMAGES: readonly BundledSrc[] = [
  grooveHero,
  stakeholderInterview,
  userPersonas,
  experienceJourneys,
  crazyEight,
  signUpImg,
  homeImg,
  ricercaImg,
  mappaImg,
  eventoImg,
  localeImg,
  bigliettiImg,
  bigliettoImg,
]

const GROOVE_PRIORITIES = buildFetchPriorities(GROOVE_ORDERED_IMAGES.length)

function GroovePage() {
  const header = <HeroSection title="Groove" imageName="groove" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide item2="Design process" item3="Final result" />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <ProjectMetaStart>
          <DetailsText>
            September - November 2024, individual project<br />
            UX/UI Designer for Groove Project
          </DetailsText>
        </ProjectMetaStart>

        <div className="project-text-container" id="section-1">
          <p className="title-2">Introduction</p>
          <div className="project-text">
            <p>This project was developed for a <span className="font-medium">start-up</span> based in Trento, focusing on creating a MVP for their investor pitch.</p>
            <p>The app is designed to streamline the <span className="font-medium">search and purchase of club event tickets</span> using geolocation and personalized suggestions.</p>
            <p>The project had a tight <span className="font-medium">one-month</span> timeline, executed as a side project while balancing my full-time research intern position.</p>
          </div>
        </div>

        <div className="project-text-container" id="section-2">
          <p className="title-2">Design process</p>
          <div className="project-text">
            <p>A <span className="font-medium">Double Diamond</span> methodology was applied.</p>
            <p>In the discovery phase, stakeholder interviews, benchmark analysis, and <span className="font-medium">online ethnography</span> were conducted, alongside the creation of <span className="font-medium">personas</span> and <span className="font-medium">experience journeys</span>.</p>
          </div>
        </div>

        <div className="project-image-container">
          <span className="body-2">Stakeholder Interview Wrap-up</span>
          <Carousel
            images={[stakeholderInterview]}
            width={0}
            round={1}
            lightbox
            lightboxLayout="landscape"
            imageAlts={['Stakeholder interview']}
            imageFetchPriorities={GROOVE_PRIORITIES.slice(1, 2)}
          />
        </div>

        <div className="project-image-container">
          <span className="body-2">User Personas</span>
          <Carousel
            images={[userPersonas]}
            width={0}
            round={1}
            lightbox
            lightboxLayout="landscape"
            imageAlts={['User personas']}
            imageFetchPriorities={GROOVE_PRIORITIES.slice(2, 3)}
          />
        </div>

        <div className="project-image-container">
          <span className="body-2">Experience Journeys</span>
          <Carousel
            images={[experienceJourneys]}
            width={0}
            round={1}
            lightbox
            lightboxLayout="landscape"
            imageAlts={['Experience journeys']}
            imageFetchPriorities={GROOVE_PRIORITIES.slice(3, 4)}
          />
        </div>

        <div className="project-text-container">
          <div className="project-text">
            <p>During the development phase, <span className="font-medium">Crazy 8 brainstorming</span>  with stakeholders, sketches, low- and <span className="font-medium">high-fidelity mock-ups</span> were created.
              A <span className="font-medium">quick video animation</span> was also set-up for a funding contest.</p>
          </div>
        </div>

        <div className="project-image-container">
          <span className="body-2">Crazy8 with Stakeholders</span>
          <Carousel
            images={[crazyEight]}
            width={0}
            round={1}
            lightbox
            lightboxLayout="landscape"
            imageAlts={['Crazy 8 brainstorming']}
            imageFetchPriorities={GROOVE_PRIORITIES.slice(4, 5)}
          />
        </div>

        <div className="project-text-container" id="section-3">
          <p className="title-2">Final result</p>
          <div className="project-text">
            <p>The final design featured three main sections:</p>
            <ol className="list-decimal pl-[1.5rem] space-y-[0.375rem]">
              <li>
                <span className="font-medium">Home:</span> Includes a search bar, a carousel of personalized suggestion cards, and a map-based exploration tool with filters for event preferences.
                Event page provides detailed information, ticket availability, links to venue details, and similar upcoming events.
              </li>
              <li>
                <span className="font-medium">Tickets:</span> Displays chronologically listed purchased tickets with essential event details and easy-to-use QR codes for smooth check-in.
              </li>
              <li>
                <span className="font-medium">Profile:</span> Shows the favourite events and venues, besides providing access to the friends list, fostering a small social dimension within the app.
              </li>
            </ol>
            <p>
              The app’s design ensures intuitive navigation, vivid visuals, and functionality. The geolocation feature allows users to explore events dynamically, and the ticketing system is tailored
              for convenience and quick access during entry.
            </p>
          </div>
        </div>

        <Carousel
          images={[
            signUpImg,
            homeImg,
            ricercaImg,
            mappaImg,
            eventoImg,
            localeImg,
            bigliettiImg,
            bigliettoImg,
          ]}
          width={200}
          round={1.625}
          lightbox
          lightboxLayout="portrait"
          imageAlts={[
            'Sign up',
            'Home',
            'Search',
            'Map',
            'Event',
            'Venue',
            'Tickets',
            'Ticket',
          ]}
          imageFetchPriorities={GROOVE_PRIORITIES.slice(5, 13)}
        />
      </div>
    </div>
  )

  return (
    <LayoutWrapper header={header} content={content} contentOverlaysHero />
  )
}

export default GroovePage
