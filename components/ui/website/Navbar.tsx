import React from 'react'
import { ModeToggle } from '../theme-provider/mode'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="">
        <h1 className='text-primary font-bold'>Logo</h1>
      </div>
      <div className="flex gap-4">
        <p>order of listy</p>
        <ModeToggle/>
      </div>
  
    </div>
  )
}

export default Navbar