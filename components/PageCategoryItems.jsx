import React from 'react';
import CategoryItems from './CategoryItems';

const PageCategoryItems = ({ categoryData }) => {
    
  return (
    <div className='w-full lg:w-4/5 lg:mx-auto pt-2 pb-5 px-6 py-5 lg:px-0 flex gap-20 flex-col md:gap-4 justify-center md:justify-center items-center'>
        
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
