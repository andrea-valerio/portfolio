import { ReactNode } from 'react'

type DetailsTextProps = {
  children: ReactNode
}

const DetailsText = ({ children }: DetailsTextProps) => {
  return (
    <p className="body-1 italic" style={{ fontSize: '0.875rem'}}>
      {children}
    </p>
  )
}

export default DetailsText