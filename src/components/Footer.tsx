import Logo from './Logo'
import { getHomeProjectsForDisplay } from '../constants/homeProjects'
import mailIcon from '../assets/icons/mail.webp'
import inIcon from '../assets/icons/in.webp'
import ghIcon from '../assets/icons/github.webp'

const baseUrl = import.meta.env.BASE_URL

const Footer = () => {
  const projects = getHomeProjectsForDisplay()

  return (
    <div className="mt-[6rem] mb-[3rem]">
      <div className="flex flex-col gap-[2rem] lg:flex-row lg:items-start lg:justify-between lg:gap-[3rem]">
        <div className="flex min-w-0 flex-col gap-[1rem]">
          <h2 className="title-2">Project</h2>
          <nav aria-label="Projects">
            <ul className="flex flex-col gap-[0.5rem]">
              {projects.map((p) => (
                <li key={p.slug}>
                  <a href={`${baseUrl}${p.slug}/`} className="link-accent body-1">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="shrink-0 rounded-2xl bg-grey-1 px-[1.25rem] py-[1.25rem] sm:px-[1.5rem] sm:py-[1.5rem]">
          <h2 className="title-2 mb-[1rem]">Contacts</h2>
          <div className="flex items-center gap-[1.25rem] sm:gap-[1.5rem]">
            <a
              href="mailto:andrea@icio.it"
              className="group flex h-10 w-10 items-center justify-center rounded-lg transition-opacity hover:opacity-80 active:opacity-80"
              aria-label="Email"
            >
              <img
                src={mailIcon.src}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 pointer-events-none"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/andreavalerio1"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-lg transition-opacity hover:opacity-80 active:opacity-80"
              aria-label="LinkedIn"
            >
              <img
                src={inIcon.src}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 pointer-events-none"
              />
            </a>
            <a
              href="https://github.com/andrea-valerio"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-10 w-10 items-center justify-center rounded-lg transition-opacity hover:opacity-80 active:opacity-80"
              aria-label="GitHub"
            >
              <img
                src={ghIcon.src}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 pointer-events-none"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[3rem] border-t border-grey-2 pt-[3rem]">
        <div className="hidden lg:grid grid-cols-8 gap-2 justify-items-center">
          <Logo logoName="unitn" className="col-span-1 justify-self-start" />
          <Logo logoName="erasmus" className="col-span-1" />
          <Logo logoName="ru" className="col-span-1" />
          <Logo logoName="aalto" className="col-span-1" />
          <Logo logoName="hit" className="col-span-1" />
          <Logo logoName="unox" className="col-span-1" />
          <Logo logoName="dlr" className="col-span-1" />
          <Logo logoName="bendingspoons" className="col-span-1 justify-self-end" />
        </div>

        <div className="grid grid-cols-8 gap-[0.75rem] justify-items-center lg:hidden">
          <Logo logoName="unitn" className="col-span-1 justify-self-start" />
          <div className="col-span-1" />
          <Logo logoName="erasmus" className="col-span-1" />
          <div className="col-span-1" />
          <Logo logoName="ru" className="col-span-1" />
          <div className="col-span-1" />
          <Logo logoName="aalto" className="col-span-1 justify-self-end" />
          <div className="col-span-1" />
        </div>
        <div className="grid grid-cols-8 gap-[0.75rem] mt-[0.75rem] justify-items-center lg:hidden">
          <div className="col-span-1" />
          <Logo logoName="hit" className="col-span-1" />
          <div className="col-span-1" />
          <Logo logoName="unox" className="col-span-1" />
          <div className="col-span-1" />
          <Logo logoName="dlr" className="col-span-1" />
          <div className="col-span-1" />
          <Logo logoName="bendingspoons" className="col-span-1 justify-self-end" />
        </div>
      </div>
    </div>
  )
}

export default Footer
