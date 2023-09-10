import React from 'react'
import { SeeButton } from './shared/Buttons'
import { useRouter } from 'next/navigation';
import { Link } from '@mui/material'

const CheckOutInfo = ({ modalState }) => {
    const router = useRouter();

    const handleAction = () => {
        router.refresh('/')
        
    }

  return (
    <div 
        className={`${modalState.isCartOpen && 'block' || 'hidden'}  fixed left-0 top-16 right-0 flex items-center justify-center z-20`}
    >
      
      <div 
        className="relative w-full h-full max-w-[540px] max-h-full p-3  items-center justify-center"
      >
        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 z-50">
            {/* Modal header */}
            <div className="flex gap-3 flex-col items-start justify-start p-4 border-b rounded-t dark:border-gray-600">
                <div className='py-3 text-white text-2xl px-5 rounded-full bg-[#D87D4A]'>
                    +
                </div>
                <h3 className="text-xl uppercase font-semibold text-gray-900 dark:text-white">
                    Thank you <br/> for your order
                </h3>
                <p className='first-letter:capitalize opacity-50'>you will receive an email confirmation shortly</p>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6 flex items-center justify-center">
                {/** Cart list block */}

                <div className='w-full flex justify-between'>

                <div className='w-1/2 bg-[#F1F1F1] p-3 rounded-tl-lg rounded-bl-lg flex gap-2 flex-col items-start justify-start'>
                    
                    <div className='flex gap-x-5 justify-between items-start'>
                        <div className='flex gap-x-5 justify-between items-start'>
                            <div className='!w-[64px] h-[64px] rounded flex justify-center items-center'>
                                <div className='!w-[36.19px] h-[40px] bg-contain bg-no-repeat bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />
                            </div>

                            <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>

                                <p className='text-[15px] uppercase font-bold'>
                                    XX99 Mark I 
                                </p>
                                
                                <p className='text-[14px] opacity-50'>$2,999</p>
                                
                            </div>
                        </div>
                        <div>
                        <p className='opacity-50'>x1</p>
                        </div>
                    </div>

                    <div className='text-center'>
                        <hr />
                        <p className='text-[12px] opacity-50 py-2 pl-10'>and 2 other items(s)</p>
                    </div>
                </div>

                <div className='w-1/2 rounded-tr-lg rounded-br-lg bg-black pl-6 flex flex-col items-start justify-center'>
                    <p className='uppercase text-sm text-gray-400 pb-2'>Grand Total</p>
                    <p className='text-white'>$5,446</p>
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
