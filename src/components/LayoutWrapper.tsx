import React from 'react'
import Footer from './Footer'

type LayoutWrapperProps = {
  header: React.ReactNode
  content: React.ReactNode
  className?: string
}

const LayoutWrapper = ({ header, content, className = '' }: LayoutWrapperProps) => {
  return (
    <div className={`w-full flex flex-col items-center ${className}
      gap-[2rem] sm:gap-[3rem] md:gap-[4rem] lg:gap-[6rem]`}>
      <div className="w-full">
        {header}
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 md:px-10 lg:px-20">
        {content}
        <div className="col-span-12">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LayoutWrapper