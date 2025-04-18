import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import instagramImg       from '../assets/projects/reelsfyp/instagram.png';
import tiktokImg          from '../assets/projects/reelsfyp/tiktok.png';
import questionnaireImg   from '../assets/projects/reelsfyp/questionnaire.png';
import kpiGeneral         from '../assets/projects/reelsfyp/results/kpi-general.png';
import kpiInstagram       from '../assets/projects/reelsfyp/results/kpi-instagram.png';
import kpiTikTok          from '../assets/projects/reelsfyp/results/kpi-tiktok.png';
import kpiAge             from '../assets/projects/reelsfyp/results/kpi-age.png';

function ReelsFypPage() {
    const header = <HeroSection title="Instagram vs TikTok" imageName="reelsfyp" />

    const content = (
      <div className="col-span-12 flex justify-between">

        {/* Left Side */}
        <LeftSide item2="Research" item3="Results" />

        {/* Divider */}
        <div className="w-[.5px] bg-black -translate-x-[.75rem]" />

        {/* Right Side */}
        <div className="project-content">
          <DetailsText>
            April - June 2023, 4-member team<br />
            MSc in Human-Computer Interaction, course in Cognitive Ergonomics and Quantitative Research
          </DetailsText>

          <div className="project-text-container" id="section-1">
            <p className="title-2">Introduction</p>
            <div className="project-text">
              <p>
                This study aimed to investigate possible differences in engagement levels between Instagram’s <em>“Reels”</em> and TikTok’s <em>“For You Page” (FYP)</em>,
                the two most predominant short-video features in the recent social media landscape.
              </p>
              <p>
                We hypothesize that the <em>FYP</em> is more compelling than the Reels. Moreover, age differences may play a significant role.
              </p>
              <p>
                <span className="font-semibold">Quantitative research methods</span> have been used for this study.
              </p>
            </div>
          </div>

          {/* comparison (image) */}
          <div className="project-image-container-xsmall">
          <img
            src={instagramImg}
            alt="Instagram"
            className="project-image"
          />
          <img
            src={tiktokImg}
            alt="TikTok"
            className="project-image"
          />
          </div>

          {/* process */}
          <div className="project-text-container" id="section-2">
            <p className="title-2">Research</p>
            <div className="project-text">
              <p>
                The research design implied a <span className="font-semibold">within-subject questionnaire</span> using a revisited <em>UEQ+</em> standard.
                Both Reels and <em>FYP</em> sections covered 8 engagement areas. Moreover, demographic questions are present at the beginning,
                as well as open-ended questions at the end. Furthermore, the <span className="font-semibold">order</span> effect has been counterbalanced
                by mixing the order in which the sections were given.
              </p>
              <p>
                Before the data collection, a <span className="font-semibold">pilot test</span> allowed us to check and take minor fixes.
                After the data collection, responses were cleaned, elaborated on the given <em>UEQ+</em> analysis tool and then used to perform
                a <span className="font-semibold">descriptive-inferential analysis</span> in the software R.
              </p>
            </div>
          </div>

          {/* questionnaire (image) */}
          <div className="project-image-container-small">
            <span className="body-2">Questionnaire</span>
            <img
              src={questionnaireImg}
              alt="Questionnaire"
              className="project-image"
            />
          </div>

          {/* Final result */}
          <div className="project-text-container" id="section-3">
            <p className="title-2">Results</p>
            <div className="project-text">
              <p>
                As a final result, our primary research hypothesis was <span className="font-semibold">not substantiated</span>.
                However, a statistically significant decrease in <em>TikTok</em> engagement was observed in the older group (25-34)
                compared to the younger (16-24). More precisely, the quality of content seemed to play a key role in the judgement
                differences between the two groups.
              </p>
              <p>
                To conclude, it must be mentioned that the results cannot be considered significant if we take into account the
                Bonferroni correction, which tries to counter the multiple comparison problem.
              </p>
            </div>
          </div>

          <Carousel
            images={[
              kpiGeneral,
              kpiInstagram,
              kpiTikTok,
              kpiAge,
            ]}
            width={400}
            round={1}
          />
        </div>
      </div>
    )

    return <LayoutWrapper header={header} content={content} />
  }
  
  export default ReelsFypPage