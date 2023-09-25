import React from 'react'
import { SeeButton } from './shared/Buttons'
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material'
import Image from 'next/image';

const CheckOutInfo = ({ checkData, modalState }) => {
    const router = useRouter();

    const { itemOne, itemRemain, grandTotal } = checkData;

    const handleAction = () => {
        router.refresh('/')
        
    }

  return (
    <div 
        className={`${modalState.isCheckOut && 'block' || 'hidden'}  fixed left-0 top-16 right-0 flex items-center justify-center z-20`}
    >
      
      <div 
        className="relative w-full h-full max-w-[540px] max-h-full p-3  items-center justify-center"
      >
        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow z-50">
            {/* Modal header */}
            <div className="flex gap-3 flex-col items-start justify-start p-4 border-b rounded-t ">
                <div className='py-3 text-white text-2xl px-5 rounded-full bg-[#D87D4A]'>
                    +
                </div>
                <h3 className="text-xl uppercase font-semibold text-gray-900">
                    Thank you <br/> for your order
                </h3>
                <p className='first-letter:capitalize opacity-50'>you will receive an email confirmation shortly</p>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6 flex items-center justify-center">
                {/** Cart list block */}

                <div className='w-full flex justify-between'>

                <div className='w-1/2 bg-[#F1F1F1] p-3 rounded-tl-lg rounded-bl-lg flex gap-x-3 flex-col items-start justify-start'>
                    
                    <div className='flex gap-x-5 justify-between items-start'>
                        <div className='flex gap-x-3 justify-between items-start'>
                            <div className='!w-[60px] h-[64px] rounded flex justify-center items-center'>
                                <Image src={`/assets/cart/image-${itemOne?.slug}.jpg`} 
                                    alt='cart image' 
                                    width={40} height={40} 
                                />                            
                            </div>

                            <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>

                                <p className='text-[15px] text-black uppercase font-bold'>
                                    {itemOne?.name}
                                </p>
                                
                                <p className='text-[14px] text-black opacity-50'>${itemOne?.price * itemOne?.qty}</p>
                                
                            </div>
                        </div>
                        <div className='pr-3'>
                            <p className='text-black opacity-50'>x{itemOne?.qty}</p>
                        </div>
                    </div>

                    {   
                        itemRemain >= 1 &&
                        <div className='w-full text-center'>
                            <hr />
                            <p className='text-[12px] opacity-50 py-2 pl-10'>{`and ${itemRemain} other items(s)`}</p>
                        </div>
                    }
                </div>

                <div className='w-1/2 rounded-tr-lg rounded-br-lg bg-black pl-6 flex flex-col items-start justify-center'>
                    <p className='uppercase text-sm text-gray-400 pb-2'>Grand Total</p>
                    <p className='text-white'>$ {grandTotal}</p>
                </div>
                
                </div>

            </div>
            
            {/* Modal footer */}
            <div className='flex flex-col p-6 space-y-6 gap-2'>
                
                <Link href="/"
                    underline='none'
                    sx={{ width:1, height:'48px', 
                    mt:3, p:2, color:'#FFF',
                    backgroundColor: "#D87D4A",
                    textTransform:'uppercase',
                    textAlign:'center',
                    '&:hover': {opacity:0.5} }}
                >
                    back to home
                </Link>
            </div>

          </div>
      </div>
    </div>
  )
}

export default CheckOutInfo
