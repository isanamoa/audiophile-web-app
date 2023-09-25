import Image from 'next/image'
import React from 'react'

const CheckItems = ({ cart }) => {
  return (
    <div className='flex p-3 justify-between items-start'>
        <div className='flex gap-x-3 justify-between items-start'>
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
                
                <p className='text-[14px] text-slate-400'>
                    {`$ ${cart?.price * cart?.qty}`}
                </p>
                
            </div>
        </div>
        <div>
            <p className='text-[14px] text-slate-400'>x{cart?.qty}</p>
        </div>
    </div>
  )
}

export default CheckItems
