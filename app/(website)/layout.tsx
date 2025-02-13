import Navbar from '@/components/ui/website/Navbar'
import React, {  ReactNode } from 'react'

const layout = ({children}:{children: ReactNode}) => {
  return (
   <div className="flex flex-col h-screen p-4">
    <Navbar />
    <div className="">
      {children}
    </div>
   </div>
  )
}

export default layout