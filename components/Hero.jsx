import React from 'react'

const Hero = () => {
  return (
    <div className='w-full md:w-4/5 md:mx-auto md:flex'>
      <div className='relative z-10 w-full sm:w-1/2  flex flex-col sm:flex-row justify-center sm:justify-start items-center'>
        <div className='absolute mt-96 sm:mt-0'>
            <p>NEW PRODUCT</p>
        </div>
      </div>
      <div className='!w-full sm:!w-1/2 h-[37.5rem] lg:h-[45.563rem] border-0 
        bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-black bg-contain bg-no-repeat bg-top relative z-0'>
      </div>  
    </div>
  )
}

export default Hero
