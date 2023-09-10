import React from 'react';
import { SeeButton } from './shared/Buttons';
import { SpecialTextbox } from './shared/InputBoxes';
import Image from 'next/image';

const ProductViewCard = ({ products }) => {
  return (
    <div className='w-full pt-3 pb-10 px-5 md:w-4/5 md:mx-auto md:px-0 md:py-5 gap-20 flex flex-col md:flex-row md:gap-4 justify-center md:justify-center items-center'>
        <div className='w-full h-[724px] lg:h-[540px] flex gap-8 lg:gap-x-20 flex-col lg:flex-row justify-start items-start rounded'>
            
            <div className='!w-full h-[352px] lg:h-[540px] bg-[#F1F1F1] rounded flex justify-center items-center'>
                <Image 
                    width={220} 
                    height={243} 
                    src={products?.image?.mobile} 
                    alt="Speakers" 
                    className='w-full h-full md:hidden'
                />

                <Image 
                    width={220} 
                    height={243} 
                    src={products?.image?.tablet} 
                    alt="Speakers" 
                    className='w-full h-full hidden md:block lg:hidden'
                />

                <Image 
                    width={349} 
                    height={386} 
                    src={products?.image?.desktop} 
                    alt="Speakers" 
                    className='w-full h-full hidden lg:block'
                />

                {/*<div className='!w-[220px] lg:!w-[349.238px] 
                    h-[243px] lg:h-[386px] bg-contain bg-no-repeat 
                    bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' 
                />*/}
            </div>

            <div className='w-full lg:h-[540px] flex flex-col justify-between items-start lg:justify-center gap-y-5 md:text-left text-left mt-8'>
                {
                    products?.new && 
                    <p className='text-[14px] text-[#e7aa87] uppercase font-semibold'>new product</p>
                }
                
                <h3 className='text-[28px] uppercase font-bold'>
                    {/*XX99 Mark II <br className='hidden lg:block'/>
                    Headphones*/}
                    {products?.name}
                </h3>

                <p className='text-[15px] text-slate-500'>                
                    {/*The new XX99 Mark II headphones is the pinnacle of pristine <br className='hidden lg:block'/>
                    audio. It redefines your premium headphone experience by <br className='hidden lg:block'/>
                    reproducing the balanced depth and precision of studio-quality <br className='hidden lg:block'/>
                    sound.*/}
                    {products?.description}
                </p>

                <p className='font-bold'>                
                    {/*$ 2,999*/}
                    {products?.price && `$ ${products?.price}`}
                </p>
                
                <div className='flex gap-3'>
                    <div className='!w-[80px] lg:!w-[120px] h-[48px] flex'>
                        <SeeButton 
                            wid="w-auto" hig="h-auto"
                            padd="px-4"
                            butTitle="-" 
                            bgColors="bg-[#F1F1F1]"
                            bordered='border-0' 
                            colors="text-black" 
                            hoveredBg="hover:bg-[#F1F1F1]"
                            hoveredColor="hover:text-[#D87D4A]"
                        />

                        <SpecialTextbox 
                            inputType='text'
                            placeValue="1" 
                            bgColors="bg-[#F1F1F1]"
                            colors="text-black" 
                            alignTextValue="text-center"
                            wid="w-full" 
                            hig="h-[48px]" 
                            bordered="border-0" 
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-[#F1F1F1]"
                            outlin="outline-none" 
                        />

                        <SeeButton 
                            wid="w-auto" hig="h-auto"
                            padd="p-2"
                            butTitle="+" 
                            bgColors="bg-[#F1F1F1]"
                            bordered='border-0' 
                            colors="text-black" 
                            hoveredBg="hover:bg-[#F1F1F1]"
                            hoveredColor="hover:text-[#D87D4A]"
                        />
                    </div>

                    <SeeButton 
                        wid="w-[160px]" hig="h-[48px]"
                        butTitle="add to cart" 
                        bgColors="bg-[#D87D4A]"
                        bordered='border-0' 
                        colors="text-white" 
                        hoveredBg="hover:bg-[#D87D4A]"
                        hoveredColor="hover:opacity-50"
                    />
                </div>
            </div>

        </div>
    </div>
  )
}

export default ProductViewCard
