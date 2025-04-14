import React from 'react'
import Footer from './Footer'

type LayoutWrapperProps = {
  header: React.ReactNode
  content: React.ReactNode
  className?: string
}

const LayoutWrapper = ({ header, content, className = '' }: LayoutWrapperProps) => {
  return (
    <div className={`w-full flex flex-col gap-[6rem] ${className}`}>
      <div className="w-full">
        {header}
      </div>

      <div className="grid grid-cols-12 px-[128px] gap-[6rem] w-full">
        {content}
        <div className="col-span-12">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default LayoutWrapper