import { Moon } from 'lucide-react'
import React from 'react'

const ThemeBar = () => {
  return (
    <div className='h-[64px] flex justify-between items-center px-[16px] bg-[#edf2f7]'>
        <p>Where in the world?</p>
        <div>
            <Moon className='fill-black'/>
        </div>
      
    </div>
  )
}

export default ThemeBar
