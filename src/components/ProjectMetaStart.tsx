import type { ReactNode } from 'react'
import ProjectMobileBackLink from './ProjectMobileBackLink'

type ProjectMetaStartProps = {
  children: ReactNode
}

/** Narrow screens: 16px between back arrow and metadata; `sm:contents` restores flat `.project-content` flow from `sm` up. */
export default function ProjectMetaStart({ children }: ProjectMetaStartProps) {
  return (
    <div className="flex w-full flex-col gap-4 sm:contents">
      <ProjectMobileBackLink />
      {children}
    </div>
  )
}
