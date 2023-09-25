import React, { useEffect, useReducer } from 'react';
import { SeeButton } from './shared/Buttons';
import { useRouter } from 'next/navigation';
import CartItems from './CartItems';
import CartData from '@/utils/CartData';
//let CartData;

const reducer = (state, action) => {
    
    switch(action.type) {
      case 'increment': {
        state = [...state];
        state[action.value].qty += 1;
        console.log('increment', action.value);
        localStorage.setItem('CartData', JSON.stringify(state));      
        return state;
      }
      case 'decrement': {
        state = [...state];
        state = state[action.value].qty-- > 1 ? state : state.filter((item, index) => index !== action.value);
        console.log('decrement', action.value);
        localStorage.setItem('CartData', JSON.stringify(state));      
        return state;
      }
      case 'removeAll': {
        state = [];
        console.log('removeAll');
        localStorage.setItem('CartData', JSON.stringify([]));      
        return state;
      }
      default:
        return state;
    }
}

const CartPaper = ({ modalState }) => {
    
    /*useEffect( () => {
        CartData = JSON.parse(localStorage.getItem('CartData')) === null ?
            [] 
            : JSON.parse(localStorage.getItem('CartData'));
    }, []);*/
    
    const [carts, dispatch] = useReducer(reducer, CartData)
    const router = useRouter();

    const handleAction = () => {
        router.push(`/check-out`);
    }

  return (
    <div 
        className={`${modalState.isCartOpen && 'block' || 'hidden'} w-full h-full fixed left-0 top-16 right-0 flex items-start justify-start z-20 bg-gray-700`}
    >
    
        <div  
            className="relative w-full h-auto p-5 flex flex-row-reverse z-50"
        >
          {/* Modal Content */}
        {
            carts.length === 0 ?
            (<div className='relative lg:right-32 p-10 bg-white max-w-[377px] rounded-lg shadow '>
                <p className='text-black opacity-50'>Cart is empty</p>
            </div>) :
            (
            <div className="relative bg-white max-w-[377px] rounded-lg shadow">
              {/* Modal header lg:right-32*/}
              <div className="flex items-start justify-between p-4 border-b rounded-t">
                  <h3 className="text-xl uppercase font-semibold text-gray-900">
                      Cart ({carts.length})
                  </h3>
                  <button type='button' 
                    onClick={()=>dispatch({type:'removeAll'})}
                    className='text-[15px] text-black opacity-50'
                  >
                    Remove all
                  </button>
              </div>
              {/* Modal body */}
              <div className="p-6 space-y-6 max-h-80">
                  {/** Cart list block */}
                  { 
                    carts?.map((item, index) => ( 
                        <CartItems key={index} 
                        cart={item} 
                        incrementAction={()=>dispatch({type:'increment', value: index})}
                        decrementAction={()=>dispatch({type:'decrement', value: index})}
                    /> 
                    ))
                  }
              </div>
              
              {/* Modal footer */}
              <div className='flex flex-col p-6 mb-5 space-y-6 gap-2'>
                  
                  <div className='flex justify-between items-center'>
                      <p className='uppercase text-black opacity-50'>Total</p>
                      <p className='text-[#D87D4A]'>$ { carts?.reduce((total, item)=>{
                            return total + (parseInt(item.qty) * parseInt(item.price))
                        }, 0)}
                      </p>
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
            )

        }
      </div>
    
    </div>

  )
}

export default CartPaper
