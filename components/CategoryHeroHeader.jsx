import React from 'react'
import Header from './Header'

const CategoryHeroHeader = ({ categoryTitle }) => {
  return (
    <div className='bg-black text-white w-full relative z-0 sm:flex sm:justify-between'>
      <Header />
      <div className='w-full md:w-4/5 md:mx-auto flex justify-center items-center mt-24 mb-8'>
            <h2 className='font-bold text-[40px] uppercase'>
                {categoryTitle}
            </h2>
      </div>
    </div>
  )
}

export default CategoryHeroHeader