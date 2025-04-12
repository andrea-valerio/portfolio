import LayoutWrapper from '../components/LayoutWrapper'
import ProjectBox from '../components/ProjectBox'

function HomePage() {
  const header = (
    <div
      className="h-[45vh] bg-cover bg-center flex items-center justify-center text-white pt-[6rem] pb-[4.5rem]"
      style={{
        backgroundImage: `
          linear-gradient(0deg, rgba(28, 36, 42, 0.20) 0%, rgba(28, 36, 42, 0.20) 100%),
          linear-gradient(180deg, rgba(249, 238, 235, 0.00) 0%, rgba(28, 36, 42, 0.30) 100%),
          url('/src/assets/projects/home.png')
        `,
      }}
    >
      <div className="flex items-stretch gap-[2.75rem] text-center font-body text-[7.5rem] font-semibold leading-[0.91]">
        <span>“</span>
        <div>
          <p>Bridging minds</p>
          <div className="flex justify-between items-baseline">
            <span className="text-[4.625rem]">and</span>
            <span>technologies</span>
          </div>
        </div>
        <span className="flex items-end">”</span>
      </div>
    </div>
  )

  const content = <></>

  return <LayoutWrapper header={header} content={content} />
}
  
export default HomePage