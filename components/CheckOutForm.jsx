import React, { useState, useEffect } from 'react'
import { SpecialTextbox } from './shared/InputBoxes'
import { SeeButton } from './shared/Buttons'
import CheckOutInfo from './CheckOutInfo'
import CheckItems from './CheckItems';

const CheckOutForm = () => {
  const [isCheckOut, setCheckOut] = useState(false);
  const [eStatus, setEStatus] = useState(false);

  const [CartData, setCartData] = useState([]);
  const [buyerName, setBuyerName] = useState('');

  const handleName = (e) => {
    setBuyerName(e.target.value);
  }
  const handleCheckOut = (e) => {
    e.preventDefault();
    if(buyerName === '') {
        alert('Kindly fill all text inputs');
    }else{
        setCheckOut(prev=>!prev);
    }
  }

  const handleEStatus = () => {
    setEStatus(prev=>!prev);
  }

  useEffect( () => {
        JSON.parse(localStorage.getItem('CartData')) != null &&
        setCartData(JSON.parse(localStorage.getItem('CartData')));
    }, []);

  //console.log(CartData);

  const grandTotal = CartData?.reduce((total, item)=>{
        return total + (parseInt(item.qty) * parseInt(item.price))
    }, 0) + 50;

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
                            textValue={buyerName}
                            handleChange={handleName}
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
                            inputType="telephone"
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
                            inputType="text"
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
                                bgColors="bg-[#D87D4A] mr-3"
                                colors="accent-[#D87D4A]" 
                                outlin="outline-none" 
                                handleChange={handleEStatus}
                            />
                            <label>e-Money</label>
                        </div>

                        <div className='w-full p-3 my-2 border-2 rounded-md border-gray-200 hover:border-[#D87D4A]'>
                            <SpecialTextbox 
                                inputType="radio"
                                bgColors="bg-[#D87D4A] mr-3"
                                colors="accent-[#D87D4A]"
                                outlin="outline-none" 
                            />
                            <label>Cash on Delivery</label>
                        </div>
                    </div>

                </div>

                {/** e-Cash data block */}
                <div className={`${eStatus && 'block' || 'hidden'} w-full flex gap-3 flex-col md:flex-row justify-between items-center`}>
                    
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
            { 
                CartData?.map((item, index) => ( 
                    <CheckItems key={index} 
                    cart={item} 
                /> 
                ))
            }

            <div className='flex flex-col p-3 gap-2'>
                <div className='flex justify-between items-center'>
                    <p>Total</p>
                    <p>
                        ${ CartData?.reduce((total, item)=>{
                                return total + (parseInt(item.qty) * parseInt(item.price))
                            }, 0)}
                    </p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>Shipping</p>
                    <p>$50</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>VAT (INCLUDED)</p>
                    <p>
                        ${ (CartData?.reduce((total, item)=>{
                            return total + (parseInt(item.qty) * parseInt(item.price))
                        }, 0) * 0.2).toFixed(2).toLocaleString()}
                    </p>
                </div>

                <div className='flex justify-between items-center'>
                    <p>Grand Total</p>
                    <p className='text-[#D87D4A]'>
                        $ {grandTotal}
                    </p>
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
                    handleClick={handleCheckOut}
                />

                <CheckOutInfo 
                    checkData={{itemOne: CartData[0], itemRemain: CartData?.length - 1, grandTotal: grandTotal}} 
                    modalState={{isCheckOut, handleCheckOut}} 
                />

            </div>

        </form>
      
    </div>
  )
}

export default CheckOutForm
