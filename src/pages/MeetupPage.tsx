import LayoutWrapper from '../components/LayoutWrapper'
import HeroSection from '../components/HeroSection'
import LeftSide from '../components/LeftSide'
import ProjectMetaStart from '../components/ProjectMetaStart'
import DetailsText from '../components/DetailsText'
import Carousel from '../components/Carousel'
import { ProjectPageSkeleton } from '../components/ProjectPageSkeleton'
import {
  buildFetchPriorities,
  projectPaintGateImages,
  PROJECT_PAINT_THRESHOLD,
  useImagesPaintReady,
} from '../hooks/useImagesPaintReady'
import meetupHero from '../assets/projects/meetup.webp'
import comparisonWeb from '../assets/projects/meetup/redesign/comparison-web.webp'
import comparisonMobile from '../assets/projects/meetup/redesign/comparison-mobile.webp'
import groupCreation from '../assets/projects/meetup/redesign/group-creation.webp'
import attendance from '../assets/projects/meetup/redesign/attendance.webp'
import organizer from '../assets/projects/meetup/redesign/organizer.webp'
import others from '../assets/projects/meetup/redesign/others.webp'
import sms from '../assets/projects/meetup/growth/sms.webp'
import paywalls from '../assets/projects/meetup/growth/paywalls.webp'

const redesignImages = [
  comparisonWeb,
  comparisonMobile,
  groupCreation,
  attendance,
  organizer,
  others,
]

const redesignAlts = [
  'Web comparison',
  'Mobile comparison',
  'Group creation flow',
  'Attendance flow',
  'Organizer',
  'Additional screens',
]

const growthImages = [sms, paywalls]
const growthAlts = ['SMS reminders experiment', 'Subscription paywalls']

const MEETUP_ORDERED_IMAGES: readonly string[] = [meetupHero, ...redesignImages, ...growthImages]

const MEETUP_PRIORITIES = buildFetchPriorities(MEETUP_ORDERED_IMAGES.length)

const MEETUP_PAINT_IMAGES = projectPaintGateImages(MEETUP_ORDERED_IMAGES)

function MeetupPage() {
  const paintReady = useImagesPaintReady(MEETUP_PAINT_IMAGES, PROJECT_PAINT_THRESHOLD)
  if (!paintReady) {
    return (
    <LayoutWrapper
      header={<ProjectPageSkeleton.Header />}
      content={<ProjectPageSkeleton.Body />}
      contentOverlaysHero
    />
  )
  }

  const header = <HeroSection title="Meetup" imageName="meetup" />

  const content = (
    <div className="col-span-12 flex justify-between">
      <LeftSide
        item1="Intro to Meetup"
        item2="Redesign"
        item3="Growth"
        item4="Impact"
      />

      <div className="hidden lg:block w-[.5px] bg-black -translate-x-[.75rem]" />

      <div className="project-content">
        <ProjectMetaStart>
          <DetailsText>
            September - December 2025
            <br />
            Product Designer @ Bending Spoons
          </DetailsText>
        </ProjectMetaStart>

        <div className="project-text-container" id="section-1">
          <p className="title-2">Meetup: social events & groups</p>
          <div className="project-text">
            <p>
              Meetup is a global platform that enables people to create communities and organize events around shared interests. Meetup serves around{' '}
              <span className="font-medium">3M monthly active users</span> and peaks up to roughly{' '}
              <span className="font-medium">$4.9M in monthly bookings</span>.
            </p>
            <p>
              At the time I joined the product team, Meetup had been undergoing a <span className="font-medium">large redesign</span> aimed at{' '}
              <span className="font-medium">modernizing</span> the platform and repositioning it among competitors, which place strong emphasis on{' '}
              <span className="font-medium">UI</span> and <span className="font-medium">product experience</span>.
            </p>
            <p>
              In the meantime, I also contributed to growth tasks with the aim of enhancing{' '}
              <span className="font-medium">product monetization</span> and <span className="font-medium">business prosperity</span>.
            </p>
          </div>
        </div>

        <div className="project-text-container" id="section-2">
          <p className="title-2">Redesign</p>
          <div className="project-text">
            <p>
              By the time I joined the team the work on the <span className="font-medium">web</span> was almost done; I personally took care of the
              low-visibility pages as part of my team onboarding, mainly taking care of{' '}
              <span className="font-medium">secondary features for organizers</span>.
            </p>
            <p>
              We then continued with the <span className="font-medium">mobile redesign</span>, supporting the team in defining the visual direction in
              core pages and reusable components in high-traffic sections like home, search, events and group page. On my side, I personally owned the
              redesign of the <span className="font-medium">group creation flow</span>, <span className="font-medium">attendance flow</span>, main{' '}
              <span className="font-medium">paywalls</span>, and the <span className="font-medium">app settings</span>.
            </p>
            <p>
              Alongside the visual refresh, several UX improvements were implemented in flows where the existing experience was clearly suboptimal. The
              goal was to deliver a more modern, consistent product experience while applying{' '}
              <span className="font-medium">cost-effective and impactful UX changes</span>.
            </p>
            <p>
              The rollout was carefully <span className="font-medium">a/b tested</span> on high-visibility pages to ensure that the core experience was
              welcome by users and well-performing according to company standards.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={redesignImages}
            width={0}
            lightbox
            lightboxLayout="landscape"
            imageAlts={redesignAlts}
            imageFetchPriorities={MEETUP_PRIORITIES.slice(1, 7)}
          />
        </div>

        <div className="project-text-container" id="section-3">
          <p className="title-2">Growth</p>
          <div className="project-text">
            <p>
              Alongside the redesign, several <span className="font-medium">a/b test experiments</span> explored ways to improve product engagement and
              monetization.
            </p>
            <p>
              One initiative focused on <span className="font-medium">SMS reminders</span> for event participants. Event attendance on Meetup historically
              ranged between 25–50%, with internal analysis suggesting that a meaningful share of no-shows were due to users simply forgetting about the
              event. I therefore explored SMS reminders as a way to improve attendance while strengthening organizer–member communication.
            </p>
            <p>
              Another set of experiments focused on <span className="font-medium">subscription paywalls</span> during onboarding. Multiple design
              variations were tested to understand how timing and presentation affected conversion. One experiment introduced a full-screen paywall
              integrated into the <span className="font-medium">onboarding flow</span>, preceded by a short “personalization” loading screen.
              This variant <span className="font-medium">significantly outperformed</span> the previous modal paywall on iOS and Android, and became the
              new default experience, while testing started on Web, too.
            </p>
          </div>
        </div>

        <div className="project-image-container">
          <Carousel
            images={growthImages}
            width={0}
            lightbox
            lightboxLayout="landscape"
            imageAlts={growthAlts}
            imageFetchPriorities={MEETUP_PRIORITIES.slice(7, 9)}
          />
        </div>

        <div className="project-text-container" id="section-4">
          <p className="title-2">Impact</p>
          <div className="project-text">
            <p>
              In conclusion, during my active period as a Meetup Product Designer,{' '}
              <span className="font-medium">gross subscription bookings grew +34% YoY</span>, where onboarding and paywall experiments delivered major
              monetization gains, with up to +67% ARPU-2Y on desktop and +30% on mobile.
            </p>
            <p>
              Moreover, the redesigned mobile app launched successfully and received external visibility, including coverage from Engadget and an award as
              best friendship app by German broadcast company nTV.
            </p>
            <p>Together, these changes helped reposition Meetup as a more contemporary product and laid the foundation for future product development.</p>
          </div>
        </div>
      </div>
    </div>
  )

  return <LayoutWrapper header={header} content={content} contentOverlaysHero />
}

export default MeetupPage
