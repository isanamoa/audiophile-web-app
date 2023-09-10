import React from 'react'
import { SeeButton } from './shared/Buttons'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter();
  return (
    <div className='relative mt-0 w-full md:w-4/5 md:mx-auto text-center lg:text-left flex flex-col md:flex-row justify-center md:justify-start items-center'>
      <div className='!w-full h-[37.5rem] lg:h-[45.563rem] border-0 
        bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop 
        bg-contain bg-no-repeat bg-center lg:bg-top lg:bg-[#0E0E0E] relative z-0'
      >        
        
        <div className='absolute lg:w-[40%] h-full lg:bg-black pt-[30%] lg:pt-0 flex flex-col gap-3 items-center justify-center lg:items-start'>
          <p className='uppercase text-sm text-gray-600'>NEW PRODUCT</p>
          <h1 className='uppercase text-3xl text-white'>
            XX99 Mark II <br />
            HeadphoneS
          </h1>
          <p className='first-letter:uppercase pl-[10%] lg:pl-0 pr-[12%] lg:pr-[25%] pt-2 pb-3 text-[15px] text-slate-300'>
            {`Experience natural, lifelike audio and
            exceptional build quality made for the 
            passionate music enthusiast.`}
          </p>
          <SeeButton 
            type="button"
            wid="w-[160px]" hig="h-[48px]"
            butTitle="see product" 
            bgColors="bg-[#D87D4A]"
            bordered='border-0' 
            colors="text-white" 
            hoveredBg="hover:bg-[#D87D4A]"
            hoveredColor="hover:opacity-50"
            handleClick={() => router.push("/category/headphones/xx99-mark-two-headphones")}
          />
        </div>
      
      </div>  
    </div>
  )
}

export default Hero
