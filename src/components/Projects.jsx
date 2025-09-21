import React from 'react'

const Projects = () => {
  return (
    <section id='projects' className='min-h-screen w-full overflow-hidden text-gray-700 dark:text-white pt-4 pb-20'>
      <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-12'>
          My Projects
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto'>
          {/* Project 1 */}
          <div className='relative group'>
            <img 
              src="https://placehold.co/1280x720" 
              alt="Project 1"
              className='w-full aspect-video object-cover rounded-xl'
            />
            <span className='absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg border border-white text-sm'>
              Data Analysis
            </span>
          </div>

          {/* Project 2 */}
          <div className='relative group'>
            <img 
              src="https://placehold.co/1280x720" 
              alt="Project 2"
              className='w-full aspect-video object-cover rounded-xl'
            />
            <span className='absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg border border-white text-sm'>
              Data Visualization
            </span>
          </div>

          {/* Project 3 */}
          <div className='relative group'>
            <img 
              src="https://placehold.co/1280x720" 
              alt="Project 3"
              className='w-full aspect-video object-cover rounded-xl'
            />
            <span className='absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg border border-white text-sm'>
              Web Scraping
            </span>
          </div>

          {/* Project 4 */}
          <div className='relative group'>
            <img 
              src="https://placehold.co/1280x720" 
              alt="Project 4"
              className='w-full aspect-video object-cover rounded-xl'
            />
            <span className='absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-lg border border-white text-sm'>
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects