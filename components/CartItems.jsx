import React from 'react';
import { SeeButton } from './shared/Buttons';
import { ReadOnlyTextbox } from './shared/InputBoxes';
import Image from 'next/image';

const CartItems = ({ cart, incrementAction, decrementAction }) => {
    //console.log(incrementAction);
  return (
    <div className='flex justify-between items-start'>
        <div className='w-full flex gap-x-3 justify-between items-start'>
            <div className='!w-[64px] h-[64px] bg-[#F1F1F1] rounded flex justify-center items-center'>
                {/** <div className='!w-[36.19px] h-[40px] bg-contain bg-no-repeat bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' /> */}
                <Image src={`/assets/cart/image-${cart?.slug}.jpg`} 
                    alt='cart image' 
                    width={40} height={40} 
                />
            </div>

            <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>

                <p className='text-[15px] text-ellipsis text-black uppercase font-bold'>
                    {cart?.name} 
                </p>
                
                <p className='text-[14px] text-black opacity-50'>
                    {`$ ${cart?.price * cart?.qty}`}
                </p>
                
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
                handleClick={decrementAction}

            />

            <ReadOnlyTextbox 
                inputType='text'
                textValue={cart?.qty}
                classStyle='w-full bg-[#F1F1F1] text-black text-center border-0 outline-none hover:text-black hover:bg-[#F1F1F1]'
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
                handleClick={incrementAction}
            />
                

        </div>
    </div>
  )
}

export default CartItems
