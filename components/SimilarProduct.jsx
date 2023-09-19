import React from 'react';
import { SeeButton } from './shared/Buttons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SimilarProduct = ({ otherName, otherSlug, otherImageList }) => {
    const router = useRouter();

    const otherCategory = otherSlug.split("-").includes('headphones') && 'headphones'
        || otherSlug.split("-").includes('earphones') && 'earphones'
        || otherSlug.split("-").includes('speaker') && 'speaker';
    
    //console.log(otherCategory);

    const handleAction = () => {
        router.push(`/category/${otherCategory}/${otherSlug}`);
    }

   return (
    <article className='!w-full h-[auto] lg:!w-[350px] lg:h-[471px] flex gap-8 lg:gap-x-20 flex-col justify-start items-start rounded mb-10'>
                
        <section className='!w-full h-[120px] md:!w-[223px] lg:!w-[350px] md:h-[318px] bg-[#F1F1F1] rounded flex justify-center items-center'>
            {/*
            <div className='!w-[73px] h-[95px] lg:!w-[199px]  lg:h-[199px] bg-contain bg-no-repeat bg-center 
            bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]' 
            />*/}

            <section className='w-full h-full bg-contain bg-no-repeat bg-center flex items-center justify-center'>
                <Image 
                    width={50} 
                    height={95} 
                    src={otherImageList?.mobile} 
                    alt="similar product image"
                    className='w-full h-full md:hidden'
                />

                <Image 
                    width={70} 
                    height={105} 
                    src={otherImageList?.tablet} 
                    alt="similar product image"
                    className='w-full h-full hidden md:block lg:hidden'
                />

                <Image 
                   width={90} 
                   height={125} 
                   src={otherImageList?.desktop} 
                   alt="similar product image"
                   className='w-full h-full hidden lg:block'
                />
            </section>
            
        </section>

        <section className='w-full flex flex-col justify-center items-center gap-y-8 text-center'>

            <h3 className='text-[14px] lg:text-[24px] uppercase font-bold'>
                {otherName} 
            </h3>
            
            <SeeButton 
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

export default SimilarProduct
