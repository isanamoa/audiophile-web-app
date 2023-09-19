import React from 'react';
import { SeeButton } from './shared/Buttons';
import { SpecialTextbox } from './shared/InputBoxes';

const CartItems = () => {
  return (
    <div className='flex justify-between items-start'>
        <div className='w-full flex gap-x-3 justify-between items-start'>
            <div className='!w-[64px] h-[64px] bg-[#F1F1F1] rounded flex justify-center items-center'>
                <div className='!w-[36.19px] h-[40px] bg-contain bg-no-repeat bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />
            </div>

            <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>

                <p className='text-[15px] text-black uppercase font-bold'>
                    XX99 Mark I 
                </p>
                
                <p className='text-[14px] text-black opacity-50'>$2,999</p>
                
            </div>
        </div>
        <div className='!w-[120px] h-[48px] flex justify-center items-center'>
            <SeeButton 
                wid="w-auto" hig="h-auto"
                padd="px-2"
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
                wid="w-[48px]" 
                bordered="border-0" 
                hoveredColor="hover:text-black"
                hoveredBg="hover:bg-[#F1F1F1]"
                outlin="outline-none" 
            />

            <SeeButton 
                wid="w-auto" hig="h-auto"
                padd="px-2"
                butTitle="+" 
                bgColors="bg-[#F1F1F1]"
                bordered='border-0' 
                colors="text-black" 
                hoveredBg="hover:bg-[#F1F1F1]"
                hoveredColor="hover:text-[#D87D4A]"
            />
                

        </div>
    </div>
  )
}

export default CartItems
