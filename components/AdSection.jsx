import React from 'react';
import { SeeButton } from './shared/Buttons';
import { useRouter } from 'next/navigation';

const AdSection = () => {
    const router = useRouter();
  return (
    <div className='w-full lg:w-4/5 lg:mx-auto px-6 py-5 lg:px-0'>
        
        <div className='w-full mb-10 lg:overflow-y-hidden h-[37.5rem] md:h-[35rem] rounded bg-[#D87D4A] flex flex-col gap-y-7 justify-center items-center lg:flex-row lg:gap-12'>
            <div className='w-full lg:mt-24 lg:w-1/2 flex lg:flex-col justify-center items-center lg:justify-end'>
                
                <div className={`!w-[172px] h-[207px] lg:!w-[410.234px] lg:h-[493px] bg-cover bg-center 
                    bg-[url("/assets/home/mobile/image-speaker-zx9.png")] 
                    md:bg-[url("/assets/home/tablet/image-speaker-zx9.png")]
                    lg:bg-[url("/assets/home/desktop/image-speaker-zx9.png")]`} />
                
            </div>
            <div className='w-full lg:-mt-24 lg:w-1/3 flex flex-col justify-center items-center lg:justify-start lg:items-start gap-5 text-center lg:text-left text-white'>
                <h3 className='text-[2.25rem] uppercase font-bold px-20 md:px-0'>
                    ZX9 <br className='hidden md:block'/>
                    SPEAKER
                </h3>
                <p className='text-[0.938rem] text-slate-200 font-medium px-5 lg:px-0'>
                    Upgrade to premium speakers that are <br className='hidden md:block'/>
                    phenomenally built to deliver truly remarkable <br className='hidden md:block'/>
                    sound.
                    
                </p>
                <SeeButton 
                    wid="w-[160px]" hig="h-[48px]"
                    butTitle="see product" 
                    bgColors="bg-black"
                    bordered='border-2' 
                    colors="text-white" 
                    hoveredBg="hover:bg-white"
                    hoveredColor="hover:text-black"
                    handleClick={()=>router.push("/category/speakers/zx9-speaker")}

                />
            </div>
        </div>

        <div className='static mb-10 w-full rounded flex flex-col justify-center items-center md:flex-row'>
            <div className='!w-full h-[320px] rounded bg-cover bg-center 
                bg-[url("/assets/home/mobile/image-speaker-zx7.jpg")]
                md:bg-[url("/assets/home/tablet/image-speaker-zx7.jpg")]
                lg:bg-[url("/assets/home/desktop/image-speaker-zx7.jpg")]' 
            />

            <div className='absolute md:p-[15%] z-10 w-full flex flex-col justify-start items-start gap-y-5 text-left text-black pl-10'>
                <h3 className='text-[1.75rem] uppercase font-bold'>
                    ZX7 SPEAKER
                </h3>
                
                <SeeButton 
                    wid="w-[160px]" hig="h-[48px]"
                    butTitle="see product" 
                    bgColors="bg-transparent"
                    bordered='border-2' 
                    colors="text-black" 
                    hoveredBg="hover:bg-black"
                    hoveredColor="hover:text-white"
                    handleClick={()=>router.push("/category/speakers/zx7-speaker")}
                />
            </div>
        </div>

        <div className='mb-10 w-full h-[424px] md:h-[320px] rounded flex gap-6 flex-col justify-center items-center md:flex-row'>
            <div className='!w-full h-[200px] md:h-[320px] rounded bg-cover bg-center  
                bg-[url("/assets/home/mobile/image-earphones-yx1.jpg")]
                md:bg-[url("/assets/home/tablet/image-earphones-yx1.jpg")]
                lg:bg-[url("/assets/home/desktop/image-earphones-yx1.jpg")]' 
            />

            <div className='w-full h-[200px] md:h-[320px] rounded flex flex-col justify-center items-start gap-y-5 text-left text-black bg-[#F1F1F1] pl-10'>
                <h3 className='text-[1.75rem] uppercase font-bold'>
                    yx1 earphones
                </h3>
                
                <SeeButton 
                    wid="w-[160px]" hig="h-[48px]"
                    butTitle="see product" 
                    bgColors="bg-transparent"
                    bordered='border-2' 
                    colors="text-black" 
                    hoveredBg="hover:bg-black"
                    hoveredColor="hover:text-white"
                    handleClick={()=>router.push("/category/earphones/yx1-earphones")}

                />
            </div>
        </div>

    </div>
  )
}

export default AdSection
