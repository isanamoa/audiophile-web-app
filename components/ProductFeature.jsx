import React from 'react'

const ProductFeature = ({ features }) => {
  return (
    <section className='w-full lg:w-4/5 lg:mx-auto lg:px-0 pt-3 pb-6 px-6 flex gap-20 flex-col md:flex-row md:gap-4 justify-center md:justify-center items-center'>
        
        <article className='w-full flex flex-col lg:flex-row gap-4'>
            
            <section className='w-full lg:w-[70%] flex flex-col gap-3'>
                <h4 className='font-bold uppercase text-[24px]'>Features</h4>
                <p className='lg:pr-48 text-slate-500 text-[15px]'>
                    {/*`Featuring a genuine leather head strap and premium earcups, these headphones 
                    deliver superior comfort for those who like to enjoy endless listening. 
                    It includes intuitive controls designed for any situation. Whether you’re 
                    taking a business call or just in your own personal space, the auto on/off and 
                    pause features ensure that you’ll never miss a beat.
                    The advanced Active Noise Cancellation with built-in equalizer allow you 
                    to experience your audio world on your terms. It lets you enjoy your audio in 
                    peace, but quickly interact with your surroundings when you need to. Combined 
                    with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 
                    Mark II headphones gives you superior sound, cutting-edge technology, and a 
                    modern design aesthetic.`*/}
                    {features?.features}
                </p>
            </section>

            <section className='w-full lg:w-[30%] flex flex-col md:flex-row md:justify-start lg:flex-col lg:justify-start gap-3 md:gap-x-[33%] lg:gap-3 pt-6 lg:pt-0'>
                <h4 className='font-bold uppercase text-[24px]'>In the Box</h4>
                <section className='flex flex-col text-[15px]'>
                    {
                        features?.accessories && features?.accessories.map((accessory, index) => (
                            <div key={index} className='w-full flex gap-3'>
                                <div className='text-[#D87D4A]'>{`${accessory.quantity}x`}</div>
                                <div className='text-slate-500'>{accessory.item}</div>
                            </div>
                        ))
                    }
                    
                    {/*
                        <div className='w-full flex gap-3'>
                        <div className='text-[#D87D4A]'>2x</div>
                        <div className='opacity-50'>Replacement Earcups</div>
                        </div>
                        <div className='w-full flex gap-3'>
                            <div className='text-[#D87D4A]'>1x</div>
                            <div className='opacity-50'>User Manual</div>
                        </div>
                        <div className='w-full flex gap-3'>
                            <div className='text-[#D87D4A]'>1x</div>
                            <div className='opacity-50'>3.5mm 5m Audio Cable</div>
                    </div>
                    */}
                </section>

            </section>

        </article>

    </section>
  )
}

export default ProductFeature
