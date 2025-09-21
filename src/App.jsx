import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

const App = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <div className={`dark bg-black relative`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
    </div>
  )
}

export default App

