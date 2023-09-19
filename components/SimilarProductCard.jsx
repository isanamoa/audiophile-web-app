import React from 'react'
import SimilarProduct from './SimilarProduct'

const SimilarProductCard = ({ similar }) => {
  return (
    <section className='w-full lg:w-4/5 lg:mx-auto lg:px-0 py-10 px-6 mt-12'>
        <h2 className='text-[16px] lg:text-[32px] uppercase text-center mb-4 font-bold'>you may also like</h2>
        
        <section className='w-full flex gap-20 flex-col md:flex-row md:gap-4 justify-center md:justify-between items-center'>
            {
                similar?.others && 
                similar?.others.map((other, index) => (
                    <SimilarProduct key={index} 
                        otherName={other.name}
                        otherSlug={other.slug} 
                        otherImageList={other.image}
                    /> 
                ))
                    
            }

            
        </section>

    </section>
    
  )
}

export default SimilarProductCard
