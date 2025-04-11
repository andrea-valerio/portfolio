import LayoutWrapper from './components/LayoutWrapper'
import HeroSection from './components/HeroSection'
import Index from './components/Index'

function App() {
  const header = <HeroSection title="Groove" imageName="groove" />

  const content = (
    <>
      <div className="col-span-3 bg-secondary h-screen flex items-center justify-center text-black">
        <Index item2="Item 2" item3="Item 3"/>
      </div>
      <div className="col-span-9 bg-white h-screen flex items-center justify-center text-black">
        <span className="body-1">Column 2</span>
      </div>
    </>
  )

  return <LayoutWrapper header={header} content={content} />
}

export default App