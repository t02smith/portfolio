import React from 'react'
import "@/style/pages/Page.scss"

const Page = ({ children, className }: { children: React.ReactNode, className: string }) => {
  return (
    <div className={`page ${className}`}>
      {children && children}
    </div>
  )
}

export default Page