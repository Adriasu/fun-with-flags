import { Moon } from 'lucide-react'
import React from 'react'

const ThemeBar = () => {
  return (
    <div className='h-[64px] flex justify-between items-center px-[16px]'>
        <p>Where in the world?</p>
        <div>
            <Moon/>
        </div>
      
    </div>
  )
}

export default ThemeBar
