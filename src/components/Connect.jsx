import React from 'react'

const Connect = () => {
  return (
    <section id='connect' className='min-h-screen w-full overflow-hidden text-gray-700 dark:text-white pt-24 pb-20 scroll-mt-24'>
      <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight'>
            Are you interested in working together?
          </h1>
          <div className='mt-8 flex flex-row items-center gap-4'>
            <span className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium'>Let's</span>
            <button 
              onClick={() => window.location.href = '#contact-me'} 
              className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium px-6 py-4 rounded-full
                bg-gradient-to-r from-[#d76e00] to-[#ebc065] text-white
                transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                active:scale-95 cursor-pointer
                flex items-center gap-2'
            >
              Connect <span className='text-xl sm:text-2xl md:text-3xl lg:text-4xl'>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect