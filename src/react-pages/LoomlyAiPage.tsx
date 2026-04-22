import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { buildFetchPriorities } from '../hooks/useImagesPaintReady'
import type { BundledSrc } from '../types/bundled-asset'
import loomlyHero from '../assets/projects/loomly.png'
import dashboardImg from '../assets/projects/loomly/dashboard.png'
import aiAssistantImg from '../assets/projects/loomly/ai_assistant.png'
import interactionsImg from '../assets/projects/loomly/interactions.png'
import listeningIdeasImg from '../assets/projects/loomly/listening_ideas.png'
import paywallsImg from '../assets/projects/loomly/paywalls.png'
import marketingImg from '../assets/projects/loomly/marketing.png'
import tubeCampaignImg from '../assets/projects/loomly/tube_campaign.png'

const researchCarouselImages = [
  dashboardImg,
  aiAssistantImg,
  interactionsImg,
  listeningIdeasImg,
  paywallsImg,
]

const researchCarouselAlts = [
  'Loomly dashboard with AI assistant hero',
  'Loomly AI Assistant chat interface',
  'Interactions and AI replies',
  'Social listening and ideas board',
  'AI credits and paywall states',
]

const marketingCarouselImages = [marketingImg, tubeCampaignImg]
const marketingCarouselAlts = ['Marketing campaign materials', 'London and Glasgow Tube campaign']

const LOOMLY_ORDERED_IMAGES: readonly BundledSrc[] = [
  loomlyHero,
  ...researchCarouselImages,
  ...marketingCarouselImages,
]

const LOOMLY_PRIORITIES = buildFetchPriorities(LOOMLY_ORDERED_IMAGES.length)

function LoomlyAiPage() {
  const header = <HeroSection title="Loomly AI" imageName="loomly-ai" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide
        item1="Intro to Loomly"
        item2="Research and design"
        item3="AI workflow"
        item4="Results and impact"
      />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <ProjectMetaStart>
          <DetailsText>
            Loomly — Jan 2024
            <br />
            Product Design & Strategy
          </DetailsText>
        </ProjectMetaStart>

        <div className="project-text-container" id="section-1">
          <p className="title-2">Loomly: social media management, powered by AI</p>
          <div className="project-text">
            <p>
              Loomly is a <span className="font-medium">social media management tool</span> that helps brands, agencies, and freelancers plan, create,
              schedule, and analyze their content. Following its acquisition by Bending Spoons, the team faced a rapidly shifting market, where users were
              increasingly relying on a patchwork of external AI tools before bringing content back into their scheduling tool.
            </p>
            <p>
              The opportunity was to consolidate the entire content workflow inside a single <span className="font-medium">AI-native product</span>, layering
              AI across the content lifecycle: idea generation, post creation, social listening, AI analytics, manage DMs and comments, and an ubiquitous AI
              assistant.
            </p>
            <p>
              I joined as the <span className="font-medium">only product designer</span> and, given the exploratory nature of the project, also took on
              partial <span className="font-medium">project management responsibilities</span>.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-2">
          <p className="title-2">Research and design</p>
          <div className="project-text">
            <p>
              The project ran on a <span className="font-medium">agile approach</span> and <span className="font-medium">compressed timeline</span>: the first
              version shipped in ~1 month from kickoff.
            </p>
            <p>
              Within the first iteration, user research found its place, and I ran 6{' '}
              <span className="font-medium">usability sessions and interviews</span> with target users. In addition, I shipped a lightweight{' '}
              <span className="font-medium">in-product survey</span> to capture early sentiment after launch and gather ongoing feedback. The research surfaced
              that the calendar remains the mental backbone of social media work, and that users see AI as a workload reducer and supporting assistant rather
              than an autonomous creator.
            </p>
            <p>
              I <span className="font-medium">owned the end-to-end design</span> of the new experience, including the navigation, dashboard, and the{' '}
              <span className="font-medium">AI Assistant behavior</span> across side panel and full screen. Among the main app features, a new look and
              framework has been given to the <span className="italic">onboarding flow</span>, accompanied by the highly awaited{' '}
              <span className="italic">Social Listening</span> feature; other sections are the <span className="italic">revamped Interactions</span> (DMs and
              comments manager) with AI-drafted replies, and a new <span className="italic">Ideas Board</span> with AI auto-fill. Also, I worked on the new
              credit-based <span className="font-medium">monetization system</span> with a full-set of paywalls across plans and usage thresholds.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={researchCarouselImages}
            width={0}
            round={1.25}
            lightbox
            lightboxLayout="landscape"
            imageAlts={researchCarouselAlts}
            imageFetchPriorities={LOOMLY_PRIORITIES.slice(1, 6)}
          />
        </div>

        <div className="project-text-container">
          <div className="project-text">
            <p>
              In general the product received a <span className="font-medium">soft rebrand</span>, which peaked in the redesign of the{' '}
              <a href="https://www.loomly.com" className="link-accent" target="_blank" rel="noopener noreferrer">
                homepage
              </a>{' '}
              and{' '}
              <a href="https://www.loomly.com/pricing" className="link-accent" target="_blank" rel="noopener noreferrer">
                pricing page
              </a>{' '}
              of the marketing website. The pivot also extended beyond the app: I contributed to the communication and graphic strategy for the{' '}
              <span className="font-medium">marketing campaign</span> on the London and Glasgow Tube, and backed up media designers in creating the{' '}
              <span className="font-medium">new logo</span>.
            </p>
            <p>
              Other minor early-phase initiatives included the <span className="italic">mobile app revamp</span> and a new{' '}
              <span className="italic">link-in-bio</span> feature, where Lovable prototypes replaced Figma specs for{' '}
              <span className="font-medium">pragmatism</span>.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={marketingCarouselImages}
            width={0}
            round={1.25}
            lightbox
            lightboxLayout="landscape"
            imageAlts={marketingCarouselAlts}
            imageFetchPriorities={LOOMLY_PRIORITIES.slice(6, 8)}
          />
        </div>

        <div className="project-text-container" id="section-3">
          <p className="title-2">AI workflow</p>
          <div className="project-text">
            <p>
              To keep the impact and efficiency high, I adopted an AI workflow that let me work beyond the Figma files, carrying out{' '}
              <span className="font-medium">frontend tasks</span> to refine UI elements and interactions. As of April 2026, I&apos;m exploring an{' '}
              <span className="font-medium">AI automation</span> that bilaterally manages, matches, and refreshes the design system on both Figma and frontend
              at <span className="font-medium">token and component levels.</span> In general, tools I use include Cursor, Claude (Code, Co-work, and Design), Figma MCPs,
              and Lovable.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-4">
          <p className="title-2">Results and impact</p>
          <div className="project-text">
            <p>
              The <span className="font-medium">MVP</span> launched in February 2026, first on new users through{' '}
              <span className="font-medium">A/B testing,</span> then progressively extended to repackaged users and by March on the{' '}
              <span className="font-medium">whole user base.</span> Early signals are promising: at par on monetization, with clear product-side improvements on
              interactions, analytics, and social listening. Evaluation is still in progress, but the pivot has already{' '}
              <span className="font-medium">redefined Loomly</span> from a scheduling tool to an AI-native content platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  return <LayoutWrapper header={header} content={content} contentOverlaysHero />
}

export default LoomlyAiPage
