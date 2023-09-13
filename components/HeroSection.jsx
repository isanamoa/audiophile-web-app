import React from 'react'
import Header from './Header'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div className='text-white w-full h-full'>
      {<Header />}
      <Hero />
    </div>
  )
}

export default HeroSection
