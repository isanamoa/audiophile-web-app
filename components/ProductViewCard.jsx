import React, { useEffect, useState } from 'react';
import { SeeButton } from './shared/Buttons';
import { ReadOnlyTextbox } from './shared/InputBoxes';
import Image from 'next/image';

let CartData;

const ProductViewCard = ({ product }) => {
    const [cartQty, setCartQty] = useState(1);

    useEffect( () => {
        CartData = JSON.parse(localStorage.getItem('CartData')) === null ?
            [] 
            : JSON.parse(localStorage.getItem('CartData'));
    }, []);

    const qtyDecrement = (e) => {
        e.preventDefault();
        setCartQty(count => count > 1 ? count - 1 : count);
    }

    const qtyIncrement = (e) => {
        e.preventDefault();
        setCartQty(count => count + 1);
    }
    
    const handleNewCart = (e) => {
        if (CartData.find(value => value.id === product?.id) ) {
            alert('Item added to cart already'); 
            e.preventDefault();
        }else{
            const tempData = {
                id: product?.id,
                slug: product?.slug,
                name: product?.name,
                price: product?.price,
                qty: cartQty
            }
            
            CartData.push(tempData)
            localStorage.setItem('CartData', JSON.stringify(CartData))
            alert('New item added to cart');
            //console.log('Local storage data', localStorage.getItem('CartData')); 
        }      
    }

  return (
    <section className='w-full lg:w-4/5 lg:mx-auto lg:px-0 pt-3 pb-24 md:pb-16 px-6 flex gap-20 flex-col md:flex-row md:gap-4 justify-center md:justify-center items-center'>
        <article className='w-full h-[724px] md:h-[480px] lg:h-[540px] flex gap-8 lg:gap-x-20 flex-col md:flex-row justify-start items-start rounded'>
            
            <section className='!w-full h-[352px] md:h-[480px] lg:h-[540px] bg-[#F1F1F1] rounded flex justify-center items-center'>
                <Image 
                    width={220} 
                    height={243} 
                    src={product?.image?.mobile} 
                    alt="Speakers" 
                    className='w-full h-full md:hidden'
                />

                <Image 
                    width={220} 
                    height={243} 
                    src={product?.image?.tablet} 
                    alt="Speakers" 
                    className='w-full h-full hidden md:block lg:hidden'
                />

                <Image 
                    width={349} 
                    height={386} 
                    src={product?.image?.desktop} 
                    alt="Speakers" 
                    className='w-full h-full hidden lg:block'
                />

                {/*<div className='!w-[220px] lg:!w-[349.238px] 
                    h-[243px] lg:h-[386px] bg-contain bg-no-repeat 
                    bg-center bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' 
                />*/}
            </section>

            <section className='w-full lg:h-[540px] flex flex-col justify-between items-start lg:justify-center gap-y-5 md:text-left text-left mt-8'>
                {
                    product?.new && 
                    <p className='text-[14px] text-[#e7aa87] uppercase font-semibold'>new product</p>
                }
                
                <h3 className='text-[28px] uppercase font-bold'>
                    {/*XX99 Mark II <br className='hidden lg:block'/>
                    Headphones*/}
                    {product?.name}
                </h3>

                <p className='text-[15px] text-slate-500'>                
                    {/*The new XX99 Mark II headphones is the pinnacle of pristine <br className='hidden lg:block'/>
                    audio. It redefines your premium headphone experience by <br className='hidden lg:block'/>
                    reproducing the balanced depth and precision of studio-quality <br className='hidden lg:block'/>
                    sound.*/}
                    {product?.description}
                </p>

                <p className='font-bold'>                
                    {/*$ 2,999*/}
                    {product?.price && `$ ${product?.price}`}
                </p>
                
                <form onSubmit={handleNewCart} className='flex gap-3'>
                    <section className='!w-[80px] lg:!w-[120px] h-[48px] flex'>
                        <SeeButton 
                            wid="w-auto" hig="h-auto"
                            padd="px-2"
                            butTitle="-" 
                            bgColors="bg-[#F1F1F1]"
                            bordered='border-0' 
                            colors="text-black" 
                            hoveredBg="hover:bg-[#F1F1F1]"
                            hoveredColor="hover:text-[#D87D4A]"
                            handleClick={qtyDecrement}
                        />

                        <ReadOnlyTextbox 
                            inputType='text'
                            textValue={cartQty}
                            classStyle='w-full h-[48px] bg-[#F1F1F1] text-black text-center border-0 outline-none hover:text-black hover:bg-[#F1F1F1]'

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
                            handleClick={qtyIncrement}
                            
                        />
                    </section>

                    <SeeButton 
                        type='submit'
                        wid="w-[160px]" hig="h-[48px]"
                        butTitle="add to cart" 
                        bgColors="bg-[#D87D4A]"
                        bordered='border-0' 
                        colors="text-white" 
                        hoveredBg="hover:bg-[#D87D4A]"
                        hoveredColor="hover:opacity-50"
                    />
                </form>
            </section>

        </article>
    </section>
  )
}

export default ProductViewCard
