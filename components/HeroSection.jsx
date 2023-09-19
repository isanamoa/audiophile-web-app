import React from 'react'
import Header from './Header'
import Hero from './Hero'

const HeroSection = () => {
  return (
    <section className='text-white w-full h-full'>
      {<Header />}
      <Hero />
    </section>
  )
}

export default HeroSection
