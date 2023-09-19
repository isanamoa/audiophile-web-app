import React, { useState } from 'react'
import { SpecialTextbox } from './shared/InputBoxes'
import { SeeButton } from './shared/Buttons'
import CheckOutInfo from './CheckOutInfo'

const CheckOutForm = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const handleCartState = (e) => {
    e.preventDefault();
    setIsCartOpen(prev=>!prev);
  }

  return (
    <div className='w-full lg:w-4/5 lg:mx-auto pt-3 pb-10 px-6 lg:px-0 flex gap-20 flex-col lg:flex-row md:gap-4 justify-center lg:justify-between items-center lg:items-start'>
        <form className='w-full lg:w-[75%] p-4 mb-5 bg-white shadow-xl rounded-lg'>
            
            <h2 className='text-[24px] lg:text-[32px] text-black uppercase font-bold pb-3'>CheckOut</h2>
            {/** Billing block */}

            <div className='w-full pt-6'>
                <h5 className='text-[14px] text-[#D87D4A] uppercase font-semibold'>Billing Details</h5>
                <div className='w-full flex gap-3 flex-col md:flex-row justify-between items-center'>
                    <div className='w-full lg:w-1/2 my-3'>
                        <label className='block'>Name</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="Alexei Ward" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                    <div className='w-full  lg:w-1/2 my-3'>
                        <label className='block'>Email Address</label>
                        <SpecialTextbox 
                            inputType="email"
                            placeValue="alexei@mail.com" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>

                <div className='w-full flex gap-3 flex-col md:flex-row justify-between items-center'>
                    
                    <div className='w-full md:w-1/2 my-3'>
                        <label className='block'>Phone Number</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="+1 202-555-0136" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>

            </div>

            {/** Shipping block */}

            <div className='w-full mt-3'>
                <h5 className='text-[14px] text-[#D87D4A] uppercase font-semibold'>Shipping Info</h5>
                
                <div className='w-full flex gap-3 flex-col lg:flex-row justify-between items-center'>
                    <div className='w-full lg:w-full my-3'>
                        <label className='block'>Your Address</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="1137 Williams Avenue" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>

                <div className='w-full flex gap-3 flex-col md:flex-row justify-between items-center'>
                    <div className='w-full  lg:w-1/2 my-3'>
                        <label className='block'>Zip Code</label>
                        <SpecialTextbox 
                            inputType="email"
                            placeValue="10001" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                    <div className='w-full lg:w-1/2 my-3'>
                        <label className='block'>City</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="New York" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>

                <div className='w-full flex gap-3 flex-col md:flex-row justify-between items-center'>
                    
                    <div className='w-full lg:w-1/2 my-3'>
                        <label className='block'>Country</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="United States" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>


            </div>

            {/** Payment block */}
            <div className='w-full mt-3 mb-4'>
                <h5 className='text-[14px] text-[#D87D4A] uppercase font-semibold'>Payment Details</h5>
                {/** e-Cash options block */}
                <div className='w-full flex gap-x-3 flex-col md:flex-row justify-between items-start'>
                    <div className='w-full lg:w-1/2 mt-3'>
                        <label className='block'>Payment Method</label>
                    </div>

                    <div className='w-full  lg:w-1/2 mb-3'>
                        <div className='w-full p-3 my-2 border-2 rounded-md border-gray-200 hover:border-[#D87D4A]'>
                            <SpecialTextbox 
                                inputType="radio"
                                placeValue="1137 Williams Avenue" 
                                bgColors="bg-[#D87D4A] mr-3"
                                colors="text-[#D87D4A]" 
                                hoveredBorderColor="hover:border-[#D87D4A]"
                                hoveredColor="hover:text-[#D87D4A]"
                                hoveredBg="hover:bg-transparent"
                                outlin="outline-none" 
                            />
                            <label>e-Money</label>
                        </div>

                        <div className='w-full p-3 my-2 border-2 rounded-md border-gray-200 hover:border-[#D87D4A]'>
                            <SpecialTextbox 
                                inputType="radio"
                                placeValue="1137 Williams Avenue" 
                                bgColors="bg-[#D87D4A] mr-3"
                                colors="text-[#D87D4A]" 
                                hoveredBorderColor="hover:border-[#D87D4A]"
                                hoveredColor="hover:text-[#D87D4A]"
                                hoveredBg="hover:bg-[#D87D4A]"
                                outlin="outline-none" 
                            />
                            <label>Cash on Delivery</label>
                        </div>
                    </div>

                </div>

                {/** e-Cash data block */}
                <div className='w-full flex gap-3 flex-col md:flex-row justify-between items-center'>
                    
                    <div className='w-full lg:w-1/2 my-3'>
                        <label className='block'>e-Money Number</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="238521993" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                    <div className='w-full lg:w-1/2 my-3'>
                        <label className='block'>e-Money PIN</label>
                        <SpecialTextbox 
                            inputType="text"
                            placeValue="6891" 
                            bgColors="bg-transparent"
                            colors="text-black" 
                            alignTextValue="text-left"
                            wid="w-full" 
                            hig="h-[48px]" 
                            inptPadd="pl-2"
                            bordered="border-2 border-gray-200 rounded-md" 
                            hoveredBorderColor="hover:border-[#D87D4A]"
                            hoveredColor="hover:text-black"
                            hoveredBg="hover:bg-transparent"
                            outlin="outline-none" 
                        />
                    </div>

                </div>


            </div>

        </form>

        <form className='w-full lg:w-[25%] p-4 bg-white shadow-lg rounded-md'>
            <h3 className='text-[18px] p-3 text-black uppercase font-bold my-3'>Summary</h3>
            {/** Cart Total block */}

            {/** Cart list block */}
            <div className='flex p-3 justify-between items-start'>
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
                <div>
                    <p className='text-[14px] opacity-50'>x1</p>
                </div>
            </div>

            <div className='flex flex-col p-3 gap-2'>
                <div className='flex justify-between items-center'>
                    <p>Total</p>
                    <p>$5,396</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>Shipping</p>
                    <p>$50</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>VAT (INCLUDED)</p>
                    <p>$1,079</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>Grand Total</p>
                    <p className='text-[#D87D4A]'>$5,446</p>
                </div>

                <SeeButton 
                    type="button"
                    wid="w-full" hig="h-[48px]"
                    padd="mt-3 p-2"
                    butTitle="continue & pay" 
                    bgColors="bg-[#D87D4A]"
                    bordered='border-0' 
                    colors="text-white" 
                    hoveredBg="hover:bg-[#D87D4A]"
                    hoveredColor="hover:opacity-50"
                    handleClick={handleCartState}
                />

                <CheckOutInfo modalState={{isCartOpen, handleCartState}} />

            </div>

        </form>
      
    </div>
  )
}

export default CheckOutForm
