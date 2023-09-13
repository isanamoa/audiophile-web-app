import React from 'react'
import { SeeButton } from './shared/Buttons'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter();
  return (
    <div className='relative w-full mx-0 text-center px-0 mb-12 lg:text-left'>
      <div className='!w-full h-[37.5rem] lg:h-[47.563rem]
        bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop
        bg-contain bg-no-repeat bg-center lg:bg-cover mx-0 px-0'
      >
        <div className='absolute pt-[55%] lg:pt-[15%] lg:pl-[10%] w-full'>
          <div className='w-full md:w-1/2 h-full flex gap-4'>

            <div className='w-full lg:w-[57%] flex flex-col gap-3 items-center justify-center lg:items-start'>
              <p className='uppercase text-sm font-bold text-gray-600 tracking-[10px]'>NEW PRODUCT</p>
              <h1 className='uppercase text-3xl lg:text-[56px] lg:leading-[58px] tracking-[2px] text-white'>
                XX99 Mark II <br />
                HeadphoneS
              </h1>
              <p className='first-letter:uppercase pl-[10%] lg:pl-0 pr-[12%] lg:pr-[5%] pt-2 pb-3 text-[15px] text-slate-300'>
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

            {/*<div className="hidden lg:flex justify-center items-center lg:w-[60%]">
              <div className='h-full w-[16%] lg:bg-black'>
              </div>
              <div className='h-full w-[57%]'>
                <div className='h-[19%] w-full lg:bg-black'>
                </div>
                <div className='h-[60%] w-full'>
                </div>
                <div className='h-[15%] w-full lg:bg-black'>
                </div>
              </div>
              <div className='h-full w-[27%] lg:bg-black'>

              </div>
              
            </div>*/}

            </div>
        </div>
      </div>        

      
    </div>
  )
}

export default Hero
