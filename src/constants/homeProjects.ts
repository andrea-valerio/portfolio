import type { BundledSrc } from '../types/bundled-asset'
import ribbonStartup from '../assets/projects/ribbon-startup.png'
import ribbonMscThesis from '../assets/projects/ribbon-msc-thesis.png'

export type HomeProjectEntry = {
  name: string
  desc: string
  /** Case-study path segment, same as ProjectBox `imageName` */
  slug: string
  ribbonSrc?: BundledSrc
}

export const SHOW_EXTRA_HOME_PROJECTS = false

const CORE_HOME_PROJECTS: HomeProjectEntry[] = [
  { name: 'Loomly AI', desc: 'AI Product Design', slug: 'loomly-ai' },
  { name: 'Meetup', desc: 'Product Design', slug: 'meetup' },
  { name: 'Groove', desc: 'UX / UI Design', slug: 'groove', ribbonSrc: ribbonStartup },
  {
    name: "Teleoperators' Workload",
    desc: 'HCI Research & Data Analysis',
    slug: 'thesis',
    ribbonSrc: ribbonMscThesis,
  },
  { name: 'Oven Configurator', desc: 'UX Research & Design', slug: 'ovenconf' },
  {
    name: 'Citizen-Institution Interaction',
    desc: 'UX Research & Design',
    slug: 'citinst',
  },
]

const OPTIONAL_HOME_PROJECTS: HomeProjectEntry[] = [
  { name: 'Sustainability & Smoking', desc: 'Qualitative Research', slug: 'sustsmok' },
  { name: 'Instagram vs TikTok', desc: 'Quantitative Research', slug: 'reelsfyp' },
]

export function getHomeProjectsForDisplay(): HomeProjectEntry[] {
  if (SHOW_EXTRA_HOME_PROJECTS) {
    return [...CORE_HOME_PROJECTS, ...OPTIONAL_HOME_PROJECTS]
  }
  return CORE_HOME_PROJECTS
}
