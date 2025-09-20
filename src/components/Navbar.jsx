import React, { useState } from 'react'
import assets from '../assets/assets'

const Navbar = ({theme, setTheme}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
  <div className='grid grid-cols-3 items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-lg font-medium bg-white/30 dark:bg-black/30'>

        <div className="w-32 sm:w-40"></div>

        <div className="flex items-center justify-center relative">
          <div className={`sm:rounded-full sm:border sm:border-gray-300 dark:sm:border-gray-700 sm:bg-white/30 dark:sm:bg-black/30 sm:backdrop-blur-lg sm:px-8 sm:py-4 flex gap-5 text-gray-700 dark:text-white text-sm sm:items-center
            max-sm:absolute max-sm:top-full max-sm:right-0 max-sm:left-0 max-sm:flex-col max-sm:bg-white/95 dark:max-sm:bg-black/95 max-sm:mt-4 max-sm:rounded-lg max-sm:overflow-hidden max-sm:backdrop-blur-lg
            transition-all duration-300 ease-in-out
            ${!sidebarOpen ? 'max-sm:opacity-0 max-sm:pointer-events-none max-sm:translate-y-[-10px]' : 'max-sm:opacity-100 max-sm:pointer-events-auto max-sm:translate-y-0'}
          `}>
            <a onClick={() => setSidebarOpen(false)} href="#" className='hover:text-[#d76e00] transition-colors max-sm:py-4 max-sm:px-6 max-sm:w-full max-sm:text-center'>Home</a>
            <a onClick={() => setSidebarOpen(false)} href="#projects" className='hover:text-[#d76e00] transition-colors max-sm:py-4 max-sm:px-6 max-sm:w-full max-sm:text-center'>My Projects</a>
            <a onClick={() => setSidebarOpen(false)} href="#blog" className='hover:text-[#d76e00] transition-colors max-sm:py-4 max-sm:px-6 max-sm:w-full max-sm:text-center'>About Me</a>
          </div>
        </div>

        <div className="flex justify-end">


            {/* Toggle between menu and close icon */}
            <div className="relative w-8 h-8 sm:hidden">
              <img 
                src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
                alt="menu"
                className={`absolute inset-0 w-8 cursor-pointer transition-all duration-200
                  ${sidebarOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                onClick={() => setSidebarOpen(true)}
              />
              <img 
                src={assets.close_icon}
                alt="close"
                className={`absolute inset-0 w-6 m-1 cursor-pointer transition-all duration-200 delay-100
                  ${sidebarOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                onClick={() => setSidebarOpen(false)}
              />
            </div>

            <a href="#contact-me" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'> Connect <img src={assets.arrow_icon} width={14} alt="" /> </a>
        </div> 
      
    </div>
  )
}

export default Navbar
