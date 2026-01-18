import React from 'react'
import Nav from './components/Nav'
import HeroSection from './pages/HeroSection'
import HeroShoes from './pages/HeroShoes'
import HeroVarasity from './pages/HeroVarasity'
import NewArrivals from './pages/NewArrivals'

const App = () => {
  return (
    <div className=''>
      <Nav/>
      <HeroSection/>
      <HeroShoes/>
      <HeroVarasity/>
      <NewArrivals/>
    </div>
  )
}

export default App
