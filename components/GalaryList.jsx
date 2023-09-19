import React from 'react';
import Image from 'next/image';

const GalaryList = ({ galleryData }) => {
  return (
    <section className='w-full lg:w-4/5 lg:mx-auto lg:px-0 md:py-5 py-10 px-6 mt-12 gap-20 flex flex-col md:flex-row md:gap-4 justify-center md:justify-center items-center'>
        
        <article className='w-full h-auto lg:h-[592px] flex gap-24 lg:gap-x-8 lg:gap-y-12 flex-col md:flex-row justify-start items-start lg:justify-between rounded'>
            
            <section className='w-full md:!w-[277px] lg:!w-[445px] h-[368px] lg:h-[592px] rounded flex flex-col gap-12 md:gap-8'>
              <section className='!w-full rounded h-[178px] lg:h-[280px] bg-cover bg-center'>
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
              </section>  

              <section className='!w-full rounded h-[178px] lg:h-[280px] bg-cover bg-center'>
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
              </section>  
                           
                {/*
                  <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />

                  <div className='!w-full rounded h-[174px] lg:h-[280px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />
                  <div className='!w-full lg:!w-[635px] rounded h-[368px] lg:h-[592px] bg-cover bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />

                */}

            </section>
            
            <section className='!w-full md:!w-[395px] lg:!w-[635px] rounded h-[364px] lg:h-[592px] bg-cover bg-center'>
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
                  className='w-full h-full rounded hidden md:block lg:hidden'
              />

              <Image 
                  width={349} 
                  height={368} 
                  src={galleryData?.gallery?.third.desktop} 
                  alt="similar product image"
                  className='w-full rounded hidden lg:block'
              />
            </section>

        </article>
    </section>
  )
}

export default GalaryList
