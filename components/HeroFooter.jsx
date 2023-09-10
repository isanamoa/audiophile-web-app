import React from 'react';
import Image from 'next/image';


const HeroFooter = () => {
  return (
    <div className='w-full bg-red p-5 mb-5 md:w-4/5 md:mx-auto md:py-5 md:px-0 flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-center'>

        <div className='w-full md:!w-1/2 text-center md:text-left flex flex-col justify-center items-center md:justify-center md:items-start'>
            <h5 className='text-[1.75rem] md:text-[40px] font-[700] uppercase py-0 my-5'>
                Bringing you the <br className='hidden md:block p-0 m-0' />
                <span className='text-[#D87D4A]'>best</span> audio gear
            </h5>
            <p className='text-[0.938rem] font-[500] opacity-50 '>
                Located at the heart of New York City, Audiophile is the premier <br className='hidden md:block p-0 m-0' />
                store for high end headphones, earphones, speakers, and audio <br className='hidden md:block p-0 m-0' />
                accessories. We have a large showroom and luxury <br className='hidden md:block p-0 m-0' />
                demonstration rooms available for you to browse and <br className='hidden md:block p-0 m-0' />
                experience a wide range of our products. Stop by our store to <br className='hidden md:block p-0 m-0' />
                meet some of the fantastic people who make Audiophile <br className='hidden md:block p-0 m-0' />
                the best place to buy your portable audio equipment.
            </p>
        </div>

        <div className='!w-full md:!w-1/2 lg:!w-[540px] h-[18.75rem] lg:h-[588px] border-0 
          bg-footer-mobile md:bg-footer-tablet lg:bg-footer-desktop 
          bg-contain bg-no-repeat bg-center'
        />
        
    </div>
  )
}

export default HeroFooter
