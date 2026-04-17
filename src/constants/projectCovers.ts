import type { BundledSrc } from '../types/bundled-asset'
import meetupCover from '../assets/projects/meetup.webp'
import grooveCover from '../assets/projects/groove.webp'
import thesisCover from '../assets/projects/thesis.webp'
import ovenconfCover from '../assets/projects/ovenconf.webp'
import citinstCover from '../assets/projects/citinst.webp'
import ecomuseoCover from '../assets/projects/ecomuseo.webp'
import sustsmokCover from '../assets/projects/sustsmok.webp'
import reelsfypCover from '../assets/projects/reelsfyp.webp'
import placeholderCover from '../assets/projects/placeholder.webp'

/** Case-study slug → bundled cover asset (same set as the home grid). */
export const projectCoverBySlug: Record<string, BundledSrc> = {
  meetup: meetupCover,
  groove: grooveCover,
  thesis: thesisCover,
  ovenconf: ovenconfCover,
  citinst: citinstCover,
  ecomuseo: ecomuseoCover,
  sustsmok: sustsmokCover,
  reelsfyp: reelsfypCover,
}

export { placeholderCover }
