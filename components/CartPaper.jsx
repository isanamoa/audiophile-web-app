import React from 'react'
import { SeeButton } from './shared/Buttons';
import { SpecialTextbox } from './shared/InputBoxes';
import { useRouter } from 'next/navigation';

const CartPaper = ({ modalState }) => {
    const router = useRouter();

    const handleAction = () => {
        router.push(`/checkout`);
    }

  return (
    <div 
        className={`${modalState.isCartOpen && 'block' || 'hidden'}  fixed left-0 top-16 right-0 flex items-start justify-start z-20 overflow-y-auto`}
    >
    
        <div  
            className="relative w-full h-full p-5 top-12 flex flex-row-reverse z-50"
        >
          {/* Modal Content */}
          <div className="relative lg:right-48 bg-white max-w-[377px] rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl uppercase font-semibold text-gray-900 dark:text-white">
                      Cart (3)
                  </h3>
                  <button type='button' className='text-[15px] text-black opacity-50'>Remove all</button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6">
                  {/** Cart list block */}
                  <div className='flex justify-between items-start'>
                      <div className='flex gap-x-3 justify-between items-start'>
                          <div className='!w-[64px] h-[64px] bg-[#F1F1F1] rounded flex justify-center items-center'>
                              <div className='!w-[36.19px] h-[40px] bg-contain bg-no-repeat bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' />
                          </div>

                          <div className='w-full flex flex-col justify-start items-start gap-y-2 text-left'>

                              <p className='text-[15px] uppercase font-bold'>
                                  XX99 Mark I 
                              </p>
                              
                              <p className='text-[14px] opacity-50'>$2,999</p>
                              
                          </div>
                      </div>
                      <div className='!w-[120px] h-[48px] flex'>
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
                  </div>
              </div>
              
              {/* Modal footer */}
              <div className='flex flex-col p-6 space-y-6 gap-2'>
                  
                  <div className='flex justify-between items-center'>
                      <p>Total</p>
                      <p className='text-[#D87D4A]'>$5,446</p>
                  </div>

                  <SeeButton 
                      wid="w-full" hig="h-[48px]"
                      padd="mt-3 p-2"
                      butTitle="checkout"   
                      bgColors="bg-[#D87D4A]"
                      bordered='border-0' 
                      colors="text-white" 
                      hoveredBg="hover:bg-[#D87D4A]"
                      hoveredColor="hover:opacity-50"
                      handleClick={handleAction}
                  />
              </div>

          </div>
      </div>
    
    </div>

  )
}

export default CartPaper
