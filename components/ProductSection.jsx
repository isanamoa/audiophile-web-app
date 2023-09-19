import React from 'react';
import { ShopButton } from './shared/Buttons';
import { useRouter } from 'next/navigation';

const ProductSection = () => {
    const router = useRouter();
  return (
    <section className='w-full lg:w-4/5 lg:mx-auto mt-6 px-6 py-10 lg:px-0 gap-20 flex flex-col md:flex-row md:gap-4 justify-center md:justify-between lg:justify-center items-center'>
        
        <article className='w-full h-[165px] flex flex-col justify-center items-center  bg-[#F1F1F1] rounded'>
            <div className='-mt-20 !w-[79.916px] h-[104px] rounded bg-cover bg-center bg-[url("/assets/home/menu/image-headphone.png")]' />

            <section className='w-full flex flex-col justify-center items-center gap-y-2 md:text-left text-center mt-8'>
                <h3 className='text-[0.938rem] text-black uppercase font-bold'>
                    headphones
                </h3>
                
                <ShopButton 
                    butTitle="shop" 
                    bgColors="bg-transparent"
                    colors="text-black" 
                    hoveredBg="hover:bg-transparent"
                    hoveredColor="hover:text-[#D87D4A]"
                    handleClick={()=>router.push("/category/headphones")}
                />
            </section>

        </article>

        <article className='w-full h-[165px] flex flex-col justify-center items-center  bg-[#F1F1F1] rounded'>
            <div className='-mt-20 !w-[79.916px] h-[104px] rounded bg-cover bg-center bg-[url("/assets/home/menu/image-speaker-zx9.png")]' />

            <section className='w-full flex flex-col justify-center items-center gap-y-2 md:text-left text-center mt-8'>
                <h3 className='text-[0.938rem] text-black uppercase font-bold'>
                    Speakers
                </h3>
                
                <ShopButton 
                    butTitle="shop" 
                    bgColors="bg-transparent"
                    colors="text-black" 
                    hoveredBg="hover:bg-transparent"
                    hoveredColor="hover:text-[#D87D4A]"
                    handleClick={()=>router.push("/category/speakers")}

                />
            </section>

        </article>

        <article className='w-full h-[165px] flex flex-col justify-center items-center  bg-[#F1F1F1] rounded'>
            <div className='-mt-20 !w-[100.916px] h-[104px] rounded bg-cover bg-center bg-[url("/assets/home/menu/image-earphone.png")]' />

            <section className='w-full flex flex-col justify-center items-center gap-y-2 md:text-left text-center mt-8'>
                <h3 className='text-[0.938rem] text-black uppercase font-bold'>
                    earphones
                </h3>
                
                <ShopButton 
                    butTitle="shop" 
                    bgColors="bg-transparent"
                    colors="text-black" 
                    hoveredBg="hover:bg-transparent"
                    hoveredColor="hover:text-[#D87D4A]"
                    handleClick={()=>router.push("/category/earphones")}

                />
            </section>

        </article>

    </section>
  )
}

export default ProductSection
