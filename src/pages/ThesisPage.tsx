import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { ProjectPageSkeleton } from '../components/ProjectPageSkeleton'
import { buildFetchPriorities, useImagesPaintReady } from '../hooks/useImagesPaintReady'
import thesisHero from '../assets/projects/thesis.webp'
import thesisInterface from '../assets/projects/thesis/interface.png'
import confmatBinary from '../assets/projects/thesis/confmat_binary.png'
import confmatMulticlass from '../assets/projects/thesis/confmat_multiclass.png'
import confmatDifficulty from '../assets/projects/thesis/confmat_difficulty.png'
import confmatFrequency from '../assets/projects/thesis/confmat_frequency.png'
import fixClusters from '../assets/projects/thesis/fix_clusters.png'

const studyOutcomeImages = [
  thesisInterface,
  confmatBinary,
  confmatMulticlass,
  confmatDifficulty,
  confmatFrequency,
  fixClusters,
]

const studyOutcomeAlts = [
  'Remote assistance interface',
  'Confusion matrix — binary workload detection',
  'Confusion matrix — multiclass workload',
  'Confusion matrix — task difficulty',
  'Confusion matrix — task frequency',
  'Fixation clusters by workload condition',
]

const THESIS_ORDERED_IMAGES: readonly string[] = [thesisHero, ...studyOutcomeImages]

const THESIS_PRIORITIES = buildFetchPriorities(THESIS_ORDERED_IMAGES.length)

const PUBLICATION_MUC_DOI = 'https://doi.org/10.1145/3743049.3748583'
const THESIS_PDF_URL =
  'https://drive.google.com/file/d/1aEw1kN_jFDbA7SrF8yVNDBG-unWa-tJh/view?usp=sharing'

function ThesisPage() {
  const paintReady = useImagesPaintReady(THESIS_ORDERED_IMAGES)
  if (!paintReady) {
    return <LayoutWrapper header={<ProjectPageSkeleton.Header />} content={<ProjectPageSkeleton.Body />} />
  }

  const header = <HeroSection title="Teleoperators' Workload" imageName="thesis" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide item2="Approach" item3="Insights" item4="Results" />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <ProjectMetaStart>
          <DetailsText>
            June 2024 - March 2025, individual project
            <br />
            MSc in Human-Computer Interaction, Master’s Thesis
          </DetailsText>
        </ProjectMetaStart>

        <div className="project-text-container" id="section-1">
          <p className="title-2">Introduction</p>
          <div className="project-text">
            <p>
              This project investigates how <span className="font-medium">mental workload</span> affects{' '}
              <span className="font-medium">remote operators</span> managing autonomous vehicle fleets. In these systems, operators must continuously monitor
              and intervene, making workload a critical factor for safety and performance.
            </p>
            <p>
              The goal was to explore whether <span className="font-medium">eye-tracking data</span> can be used to assess and predict workload in real time,
              enabling more adaptive and intelligent interfaces.
            </p>
            <p>
              For a full dive-in, I recommend taking a look at the related{' '}
              <a href={PUBLICATION_MUC_DOI} className="link-accent" target="_blank" rel="noopener noreferrer">
                publication
              </a>
              , or my{' '}
              <a href={THESIS_PDF_URL} className="link-accent" target="_blank" rel="noopener noreferrer">
                thesis
              </a>
              .
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-2">
          <p className="title-2">Approach</p>
          <div className="project-text">
            <p>
              I analyzed eye-tracking data from a <span className="font-medium">2×2 within-subject user study</span> where task{' '}
              <span className="font-medium">difficulty</span> and <span className="font-medium">frequency</span> were manipulated to induce different
              workload levels. Dependent variables included NASA-TLX, performance, and eye-tracking data.
            </p>
            <p>
              The main analysis focused on <span className="font-medium">Area-of-Interest (AoI) metrics</span>, capturing how users visually interact with
              different parts of the <span className="font-medium">interface</span>. This spatial approach allowed identifying not just how much users look, but
              where and how their attention shifts under varying workload conditions.
            </p>
            <p>
              The study combined <span className="font-medium">statistical analysis</span> with <span className="font-medium">machine learning</span> to both
              explain behavioral patterns and evaluate predictive potential:
            </p>
            <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
              <li>Data cleaning and processing</li>
              <li>AoI fixation-based feature extraction (e.g. visual entropy) with feature selection</li>
              <li>Clustering analysis (HDBSCAN) and assumption validation.</li>
              <li>Inferential statistics (t-tests, ANOVAs), parametrical and non-parametrical</li>
              <li>Pipeline building using cross-validation, feature selection, and resampling</li>
              <li>Models: SVM, XGBoost, Random Forest, MLP, stacked models.</li>
            </ul>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={studyOutcomeImages}
            width={0}
            lightbox
            lightboxLayout="landscape"
            imageAlts={studyOutcomeAlts}
            imageFetchPriorities={THESIS_PRIORITIES.slice(1, THESIS_ORDERED_IMAGES.length)}
          />
        </div>

        <div className="project-text-container" id="section-3">
          <p className="title-2">Insights</p>
          <div className="project-text">
            <p>Workload significantly reshapes visual behavior. Under high workload, operators show:</p>
            <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
              <li>
                More frequent but shorter fixations, indicating <span className="font-medium">faster information processing</span>
              </li>
              <li>
                Reduced revisits to non-critical areas, suggesting <span className="font-medium">focused attention</span>
              </li>
              <li>
                Increased <span className="font-medium">exploratory patterns</span>, driven by the need to integrate information across the interface
              </li>
            </ul>
            <p>
              Task difficulty had a broader impact than frequency, affecting most visual metrics, while frequency mainly influenced attention timing and
              reactivity. These findings highlight how interface structure and task design directly shape cognitive load and attention strategies.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-4">
          <p className="title-2">Results</p>
          <div className="project-text">
            <p>
              The project demonstrates that{' '}
              <span className="font-medium">AoI-based eye-tracking metrics can reliably estimate operator workload</span>, with predictive models reaching:
            </p>
            <ul className="list-disc pl-[1.5rem] space-y-[0.375rem]">
              <li>~83% performance for binary workload detection</li>
              <li>80% for frequency-related states</li>
            </ul>
            <p>
              These results support the design of <span className="font-medium">adaptive intelligent interfaces</span> capable of detecting cognitive overload
              and responding in real time — for example by prioritizing information or assisting decision-making.
            </p>
            <p>
              This work contributes to bridging human factors research and intelligent system design, moving toward safer and more responsive autonomous vehicle
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return <LayoutWrapper header={header} content={content} />
}

export default ThesisPage
