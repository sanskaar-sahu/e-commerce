import React from 'react'
import Nav from './components/Nav'
import HeroSection from './pages/HeroSection'
import HeroShoes from './pages/HeroShoes'
import HeroVarasity from './pages/HeroVarasity'

const App = () => {
  return (
    <div className=''>
      <Nav/>
      <HeroSection/>
      <HeroShoes/>
      <HeroVarasity/>
    </div>
  )
}

export default App
