import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex items-center justify-center min-h-screen pb-20 w-full overflow-hidden text-gray-700 dark:text-white'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-8 sm:px-16 md:px-20 lg:px-24 xl:px-32'>
        {/* Profile Picture */}
        <div className='w-[32rem] sm:w-[40rem] md:w-[52rem] lg:w-[32rem] xl:w-[32rem] md:-ml-8 lg:-ml-12 xl:-ml-16'>
          <img 
            src={assets.profile_pic} 
            alt="Greg Penalba"
            className='w-full h-full object-cover rounded-2xl shadow-lg'
          />
        </div>

        {/* Hero Text */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left self-center -mt-24 md:-mt-52'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight flex flex-col gap-2'>
            <span>Hello 👋 </span>
            <span>I'm Greg Penalba</span>
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl mt-4 rubik-sane max-w-2xl'>
            a California-based <span className="bg-gradient-to-r from-[#d76e00] to-[#eab84d] bg-clip-text text-transparent">Data Analyst</span> specializing in creating meaningful insights for data-driven decisions.
          </p>
          <div className="flex gap-4 mt-8">
            <span className="text-base sm:text-lg md:text-xl border border-white px-2 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d76e00] hover:to-[#ffb30f] hover:border-transparent cursor-pointer">Python</span>
            <span className="text-base sm:text-lg md:text-xl border border-white px-2 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d76e00] hover:to-[#ffb30f] hover:border-transparent cursor-pointer">R</span>
            <span className="text-base sm:text-lg md:text-xl border border-white px-2 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d76e00] hover:to-[#ffb30f] hover:border-transparent cursor-pointer">SQL</span>
            <span className="text-base sm:text-lg md:text-xl border border-white px-2 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#d76e00] hover:to-[#ffb30f] hover:border-transparent cursor-pointer">Excel</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
