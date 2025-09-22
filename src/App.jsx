import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Connect from './components/Connect'

const App = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <div className={`dark bg-black relative`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
      <Connect />
    </div>
  )
}

export default App

