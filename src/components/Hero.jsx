import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center justify-center min-h-screen pb-64 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white'>

        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl flex flex-col items-center text-center'>
          <span>Hello 👋</span>
          <span>I'm Greg Penalba</span>
          <span>a <span className="bg-gradient-to-r from-[#d76e00] to-[#eab84d] bg-clip-text text-transparent">Data Analyst</span></span>
          <span><span className="bg-gradient-to-r from-[#d76e00] to-[#eab84d] bg-clip-text text-transparent">& Developer</span></span>
        </h1>
      
    </div>
  )
}

export default Hero
