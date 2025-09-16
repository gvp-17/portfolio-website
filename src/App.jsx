import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  const [theme, setTheme] = useState('dark')

  return (
    <div className={`dark bg-black relative`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
    </div>
  )
}

export default App

