import React from 'react';
import CategoryItems from './CategoryItems';

const PageCategoryItems = ({ categoryData }) => {
    
  return (
    <div className='w-full pt-2 pb-5 px-5 md:w-4/5 md:mx-auto md:px-0 md:py-5 gap-20 flex flex-col md:gap-4 justify-center md:justify-center items-center'>
        
        {
            categoryData && 
            categoryData?.map((product, index) => (
            <CategoryItems key={index} 
                productSlug={product.slug} 
                productName={product.name}
                productState={product.new}
                rowDirection={index}
                productDescription={product.description}
                productCategory={product.category} 
                productImage={product.categoryImage}
            /> 
        ))
        }

    </div>
  )
}

export default PageCategoryItems
