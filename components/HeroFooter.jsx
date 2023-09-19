import React from 'react';

const HeroFooter = () => {
  return (
    <section className='w-full lg:w-4/5 lg:mx-auto px-6 py-5 mb-5 lg:px-0 flex gap-10 lg:gap-0 flex-col-reverse justify-center items-center lg:flex-row lg:justify-between lg:items-center'>

        <section className='w-full lg:!w-1/2 text-center lg:text-left flex flex-col gap-2 lg:gap-0 justify-center items-center lg:justify-center lg:items-start'>
            <h5 className='text-[1.75rem] md:text-[40px] font-[700] uppercase py-0 my-5'>
                Bringing you the <br className='hidden lg:block p-0 m-0' />
                <span className='text-[#D87D4A]'>best</span> 
                <br className='hidden md:block lg:hidden p-0 m-0' /> audio gear
            </h5>
            <p className='text-[0.938rem] font-semibold text-slate-400'>
                Located at the heart of New York City, Audiophile is the premier <br className='hidden lg:block p-0 m-0' />
                store for high end <br className='hidden md:block lg:hidden p-0 m-0' /> headphones, earphones, speakers, and audio <br className='hidden lg:block p-0 m-0' />
                accessories. We have a large <br className='hidden md:block lg:hidden p-0 m-0' /> showroom and luxury <br className='hidden lg:block p-0 m-0' />
                demonstration rooms available for you to browse and <br className='hidden md:block p-0 m-0' />
                experience a wide range of our products. Stop by our store to <br className='hidden lg:block p-0 m-0' />
                meet some of the <br className='hidden md:block lg:hidden p-0 m-0' /> fantastic people who make Audiophile <br className='hidden lg:block p-0 m-0' />
                the best place to buy your portable audio <br className='hidden md:block lg:hidden p-0 m-0' /> equipment.
            </p>
        </section>

        <div className='!w-full lg:!w-[540px] h-[18.75rem] lg:h-[588px] border-0 
          bg-footer-mobile md:bg-footer-tablet lg:bg-footer-desktop 
          bg-contain bg-no-repeat md:bg-cover bg-center'
        />
        
    </section>
  )
}

export default HeroFooter
