import type { BundledSrc } from '../types/bundled-asset'
import meetupCover from '../assets/projects/meetup.png'
import grooveCover from '../assets/projects/groove.png'
import thesisCover from '../assets/projects/thesis.png'
import ovenconfCover from '../assets/projects/ovenconf.png'
import citinstCover from '../assets/projects/citinst.png'
import ecomuseoCover from '../assets/projects/ecomuseo.png'
import sustsmokCover from '../assets/projects/sustsmok.png'
import reelsfypCover from '../assets/projects/reelsfyp.png'
import placeholderCover from '../assets/projects/placeholder.png'

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
