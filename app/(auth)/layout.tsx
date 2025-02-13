import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
     <div className="    bg-gray-200 rounded-lg p-4">
            {children}
        </div>
        <div className="flex gap-3">
            <p >Go to Home Page  </p>
            <Link href="/" className='text-primary '>Home</Link>
        </div>
    </div>
  )
}

export default layout