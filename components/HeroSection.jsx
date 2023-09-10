import React from 'react'
import Header from './Header'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <div className='bg-black text-white w-full relative z-0 sm:flex sm:justify-between'>
      <Header />
      <Hero />
    </div>
  )
}

export default HeroSection
