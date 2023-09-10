import React from 'react'
import SimilarProduct from './SimilarProduct'

const SimilarProductCard = ({ similar }) => {
  return (
    <div className='w-full py-10 px-5 mt-12 md:w-4/5 md:mx-auto md:px-0 md:py-5'>
        <h2 className='text-[16px] lg:text-[32px] uppercase text-center mb-4 font-bold'>you may also like</h2>
        
        <div className='w-full flex gap-20 flex-col md:flex-row md:gap-4 justify-center md:justify-between items-center'>
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

            
        </div>

    </div>
    
  )
}

export default SimilarProductCard
