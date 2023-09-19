import React from 'react';
import { SeeButton } from './shared/Buttons';
import { useRouter } from 'next/navigation';
import CartItems from './CartItems';

const CartPaper = ({ modalState }) => {
    const router = useRouter();

    const handleAction = () => {
        router.push(`/checkout`);
    }

  return (
    <div 
        className={`${modalState.isCartOpen && 'block' || 'hidden'} w-full fixed left-0 top-16 right-0 flex items-start justify-start z-20`}
    >
    
        <div  
            className="relative w-full h-auto p-5 flex flex-row-reverse z-50"
        >
          {/* Modal Content */}
          <div className="relative lg:right-32 bg-white max-w-[377px] rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl uppercase font-semibold text-gray-900 dark:text-white">
                      Cart (3)
                  </h3>
                  <button type='button' className='text-[15px] text-black opacity-50'>Remove all</button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6 overflow-y-scroll max-h-80">
                  {/** Cart list block */}
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
                  <CartItems />
              </div>
              
              {/* Modal footer */}
              <div className='flex flex-col p-6 mb-5 space-y-6 gap-2'>
                  
                  <div className='flex justify-between items-center'>
                      <p className='uppercase text-black opacity-50'>Total</p>
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
