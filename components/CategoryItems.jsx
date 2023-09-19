import React from 'react'
import { SeeButton } from './shared/Buttons'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const CategoryItems = ({ productSlug, productName, productState, rowDirection, productDescription, productCategory, productImage }) => {
    const router = useRouter();

    const handleAction = () => {
        router.push(`/category/${productCategory}/${productSlug}`);
    }
  return (
    <article className={`w-full h-[724px] mb-3 md:mb-12 lg:h-[540px] flex gap-8 lg:gap-x-20 flex-col ${rowDirection % 2 === 1 && 'lg:flex-row-reverse' || 'lg:flex-row'} justify-start items-start rounded`}>
            
        <section className='!w-full h-[352px] lg:h-[540px] bg-[#F1F1F1] rounded flex justify-center items-center'>
            <section className='!w-[220px] lg:!w-[349.238px] h-[243px] lg:h-[386px] bg-contain bg-no-repeat bg-center' >
                <Image 
                    width={50} 
                    height={95} 
                    src={productImage?.mobile} 
                    alt="similar product image"
                    className='w-full h-full md:hidden'
                />

                <Image 
                    width={120} 
                    height={150} 
                    src={productImage?.tablet} 
                    alt="similar product image"
                    className='w-full h-full hidden md:block lg:hidden'
                />

                <Image 
                    width={120} 
                    height={150}  
                    src={productImage?.desktop} 
                    alt="similar product image"
                    className='w-full h-full hidden lg:block'
                />
            </section>
        </section>

        <section className='w-full lg:h-[540px] flex flex-col justify-between items-center lg:justify-center lg:items-start gap-y-5 lg:text-left text-center'>
            {
                productState &&
                <p className='text-[14px] text-[#e7aa87] uppercase font-semibold '>new product</p>
            }
            
            <h3 className='text-[28px] uppercase font-bold md:px-[25%] lg:px-0'>
                {/*XX99 Mark II <br className='hidden lg:block'/>
                Headphones*/}
                { productName }
            </h3>

            <p className='text-[15px] text-slate-400 md:px-[10%] lg:px-0'>
                
                {/*The new XX99 Mark II headphones is the pinnacle of pristine <br className='hidden lg:block'/>
                audio. It redefines your premium headphone experience by <br className='hidden lg:block'/>
                reproducing the balanced depth and precision of studio-quality <br className='hidden lg:block'/>
                sound.*/}
                { productDescription }
            </p>
            
            <SeeButton 
                type="button"
                wid="w-[160px]" hig="h-[48px]"
                butTitle="see product" 
                bgColors="bg-[#D87D4A]"
                bordered='border-0' 
                colors="text-white" 
                hoveredBg="hover:bg-[#D87D4A]"
                hoveredColor="hover:opacity-50"
                handleClick={handleAction}
            />
        </section>

    </article>
  )
}

export default CategoryItems
