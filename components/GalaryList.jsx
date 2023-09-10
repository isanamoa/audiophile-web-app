import React from 'react';
import Image from 'next/image';

const GalaryList = ({ galleryData }) => {
  return (
    <div className='w-full py-10 px-5 mt-12 md:w-4/5 md:mx-auto md:px-0 md:py-5 gap-20 flex flex-col md:flex-row md:gap-4 justify-center md:justify-center items-center'>
        <div className='w-full h-auto lg:h-[592px] flex gap-24 lg:gap-x-8 lg:gap-y-12 flex-col lg:flex-row justify-start items-start lg:justify-between rounded'>
            
            <div className='w-full lg:!w-[445px] h-[352px] lg:h-[592px] rounded flex flex-col gap-12 md:gap-8'>
              <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center'>
                <Image 
                  width={220} 
                  height={243} 
                  src={galleryData?.gallery?.first.mobile} 
                  alt="similar product image"
                  className='w-full rounded md:hidden'
                />
                <Image 
                    width={220} 
                    height={243} 
                    src={galleryData?.gallery?.first.tablet} 
                    alt="similar product image"
                    className='w-full rounded hidden md:block lg:hidden'
                />

                <Image 
                    width={349} 
                    height={386} 
                    src={galleryData?.gallery?.first.desktop} 
                    alt="similar product image"
                    className='w-full rounded hidden lg:block'
                />
              </div>  

              <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center'>
                <Image 
                  width={220} 
                  height={243} 
                  src={galleryData?.gallery?.second.mobile} 
                  alt="similar product image"
                  className='w-full rounded md:hidden'
                />
                <Image 
                    width={220} 
                    height={243} 
                    src={galleryData?.gallery?.second.tablet} 
                    alt="similar product image"
                    className='w-full rounded hidden md:block lg:hidden'
                />

                <Image 
                    width={349} 
                    height={386} 
                    src={galleryData?.gallery?.second.desktop} 
                    alt="similar product image"
                    className='w-full rounded hidden lg:block'
                />
              </div>  
                           
                {/*
                  <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />

                  <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />
                  <div className='!w-full lg:!w-[635px] rounded h-[368px] lg:h-[592px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />

                */}

            </div>
            
            <div className='!w-full lg:!w-[635px] rounded h-[368px] lg:h-[592px] bg-cover bg-center'>
              <Image 
                width={220} 
                height={368} 
                src={galleryData?.gallery?.third.mobile} 
                alt="similar product image"
                className='w-full rounded md:hidden'
              />
              <Image 
                  width={349} 
                  height={368} 
                  src={galleryData?.gallery?.third.tablet} 
                  alt="similar product image"
                  className='w-full rounded hidden md:block lg:hidden'
              />

              <Image 
                  width={349} 
                  height={368} 
                  src={galleryData?.gallery?.third.desktop} 
                  alt="similar product image"
                  className='w-full rounded hidden lg:block'
              />
            </div>

        </div>
    </div>
  )
}

export default GalaryList
