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
    return (
      <LayoutWrapper
        header={<ProjectPageSkeleton.Header />}
        content={<ProjectPageSkeleton.Body />}
        contentOverlaysHero
      />
    )
  }

  const header = <HeroSection title="Teleoperators' Workload" imageName="thesis" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide item2="User study" item3="Analysis" item4="Results" />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <ProjectMetaStart>
          <DetailsText>
            June 2024 - March 2025, Master’s Thesis
            <br />
            MSc in Human-Computer Interaction & Research Assistant @ German Aerospace center (DLR)
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
          <p className="title-2">User study</p>
          <div className="project-text">
            <p>
              The analysis is based on data from a <span className="font-medium">controlled user study</span> adopting a{' '}
              <span className="font-medium">2×2 within-subject design</span>, where workload was manipulated through task{' '}
              <span className="font-medium">difficulty</span> (<em>easy</em> vs. <em>hard</em>) and task presentation{' '}
              <span className="font-medium">frequency</span> (<em>slow</em> vs. <em>fast</em>). Participants performed remote fleet management tasks across
              all experimental conditions.
            </p>
            <p>
              For each condition, subjective workload was measured using <span className="font-medium">NASA-TLX</span>, while{' '}
              <span className="font-medium">performance metrics</span> and <span className="font-medium">eye-tracking data</span> were continuously recorded.
            </p>
            <p>
              The interaction took place within a single interface structured into five functional regions—Ticket, Description, Map, Diagnostics, and Actions—which
              were later used as <span className="font-medium">Areas of Interest</span> for the spatial analysis.
            </p>
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
          <p className="title-2">Analysis</p>
          <div className="project-text">
            <p>The analysis follows a structured pipeline combining statistical and machine learning approaches.</p>
            <p>
              After <span className="font-medium">data cleaning and synchronization</span>, a <span className="font-medium">data extraction</span> of
              AoI-based features followed to capture different aspects of visual behavior, including fixation dynamics, visit patterns, and spatial entropy
              measures. These metrics enabled a spatially grounded analysis of how attention is distributed across interface regions.
            </p>
            <p>
              A <span className="font-medium">validation phase</span> was conducted to ensure the robustness of the experimental setup. This included verifying
              workload manipulation through subjective measures, assessing performance decay under increasing workload, and validating the AoI segmentation using
              density-based clustering (HDBSCAN).
            </p>
            <p>
              <span className="font-medium">Inferential analysis</span> was then performed to address the research questions. Differences between low and high
              workload conditions were assessed using paired t-tests, while the effects of difficulty and frequency were analyzed through factorial
              repeated-measures ANOVA. In addition, L1-regularized logistic regression was used to identify the most informative interface regions for each metric.
            </p>
            <p>
              For the predictive analysis, a <span className="font-medium">machine learning pipeline</span> was developed to evaluate the extent to which workload
              states can be inferred from AoI metrics. A <span className="font-medium">feature selection</span> was performed using correlation filtering and the
              Boruta algorithm, followed by <span className="font-medium">model evaluation</span> through nested cross-validation with participant-level splits.
              Multiple models were tested, including Support Vector Classifier, Random Forest, Gradient Boosting, XGBoost, and Multilayer Perceptron, combined with
              different resampling strategies to address class imbalance.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-4">
          <p className="title-2">Results</p>
          <div className="project-text">
            <p>
              The results show that <span className="font-medium">mental workload significantly affects ocular behavior</span>. Visual attention patterns change
              systematically under higher workload conditions, with operators allocating less attention to non-critical interface regions and adapting their
              visual strategies to manage <span className="font-medium">increasing task complexity</span>. Task difficulty was found to exert a broader and more
              consistent influence across metrics, while task frequency primarily affected the temporal dynamics of attention.
            </p>
            <p>
              From a predictive perspective, <span className="font-medium">AoI-based metrics proved effective in estimating workload states</span>. The
              best-performing models achieved approximately 83% performance in binary workload classification and around 80% for frequency-related states,
              demonstrating the potential of spatial eye-tracking features as reliable indicators of cognitive load.
            </p>
            <p>
              Overall, the findings support the use of AoI-based analysis for both explaining and predicting workload, contributing to the development of{' '}
              <span className="font-medium">intelligent interfaces capable of adapting to users’ mental states in real time.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return <LayoutWrapper header={header} content={content} contentOverlaysHero />
}

export default ThesisPage
