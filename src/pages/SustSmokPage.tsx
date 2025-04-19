import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import roveretoImg        from '../assets/projects/sustsmok/rovereto.png';
import povoImg           from '../assets/projects/sustsmok/povo.png';
import sociologyImg      from '../assets/projects/sustsmok/sociology.png';
import cardsImg          from '../assets/projects/sustsmok/cards.png';
import workshop1         from '../assets/projects/sustsmok/workshop-1.png';
import workshop2         from '../assets/projects/sustsmok/workshop-2.png';
import workshop3         from '../assets/projects/sustsmok/workshop-3.png';
import workshop4         from '../assets/projects/sustsmok/workshop-4.png';
import workshop5         from '../assets/projects/sustsmok/workshop-5.png';
import workshop6         from '../assets/projects/sustsmok/workshop-6.png';

function SustSmokPage() {
    const header = <HeroSection title="Sustainability & Smoking" imageName="sustsmok" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research methods" item3="Results" />

        {/* Divider */}
        <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            September - November 2022, 5-member team<br />
            MSc in Human-Computer Interaction, course in Qualitative Research and Participatory Design
          </DetailsText>

          {/* intro */}
          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>
                The project began with a simple yet intriguing query: <em>What underlying conditions influence smokers’ behaviour – specifically about littering – in a university environment?</em>
              </p>
              <p>
                We studied it applying serially <span className="font-semibold">qualitative methods</span> stemming from the grounded theory.
              </p>
            </div>
          </div>

          {/* location (image) */}
          <div className="project-image-container">
            <span className="body-2">Observation locations</span>
            <div className="flex items-center gap-[3rem] w-full">
              <div className="">
                <img
                  src={roveretoImg}
                  alt="Rovereto"
                  className="project-image-small"
                />
              </div>
              <div className="">
                <img
                  src={povoImg}
                  alt="Povo"
                  className="project-image-small"
                />
              </div>
              <div className="">
                <img
                  src={sociologyImg}
                  alt="Sociology"
                  className="project-image-small"
                />
              </div>
            </div>
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Research methods</p>
            <div className="project-text">
              <p>
                First up, 25 <span className="font-semibold">observation</span> sessions have been carried out to better explore the research scenes.
                Then, we dove into it with 10 <span className="font-semibold">in-depth interviews</span> to learn more about smokers' habits, littering behavior and factors.
              </p>
              <p>
                A recurrent thematic analysis through the steps allowed the team to identify 12 main themes, which will be then used in a <span className="font-semibold">focus group</span>.
                The focus group was conducted to gather even more information on the factors that may influence littering cigarette butts on the ground. <span className="font-semibold">Cards</span> representing
                the themes are drawn during the session to suggest discussion among the participants:
              </p>
            </div>
          </div>

          {/* cards (image) */}
          <div className="project-image-container">
            <span className="body-2">Themes cards</span>
            <img
              src={cardsImg}
              alt="Themes cards"
              className="project-image"
            />
          </div>

          {/* process(2) */}
          <div className="project-text-container">
            <div className="project-text">
              <p>
                As the final step, we also wanted to focus a bit more on the possible solutions, this was possible thanks to a <span className="font-semibold">participatory workshop</span>.
              </p>
            </div>
          </div>

          {/* workshop (image) */}
          <div className="project-image-container">
            <span className="body-2">Participatory workshop</span>
            <Carousel
              images={[
                workshop1,
                workshop2,
                workshop3,
                workshop4,
                workshop5,
                workshop6,
              ]}
              width={250}
              round={1}
            />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Results</p>
            <div className="project-text">
              <p>
                Different themes have been encompassed, such as sustainability in general, the connection between sustainability and smoking, smoking locations and habits,
                littering cigarette butts and solutions to reduce the behaviour.
              </p>
              <p>
                Results, raised after a thorough <span className="font-semibold">thematic analysis</span>, suggested two types of factors influencing smokers’ littering
                behaviour: <span className="font-semibold">circumstantial</span> and <span className="font-semibold">personal-social factors</span>.
                The former includes location, condition and quantity of ashtrays, besides whether smokers are standing or sitting. The latter entails awareness of the
                consequencesof littering cigarette butts and being in a hurry.
              </p>
              <p>
                Among the discussed solutions, the most appreciated ones regarded clean-up services, incentivising the usage of <span className="font-semibold">pocket
                ashtrays</span>, awareness-raising social campaigns, and smoking areas with <span className="font-semibold">interactive/gamified equipment</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default SustSmokPage