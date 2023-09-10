import React from 'react'
import ProductSection from './ProductSection'

const MenuLists = ({ isMenuOpen }) => {
  return (
    <div 
        className={`${isMenuOpen && 'block' || 'hidden'}  md:hidden bg-white fixed left-0 top-12 right-0 flex items-center justify-center z-20 overflow-scroll`}
    >
      
      <div 
        className="relative w-full h-full max-w-[540px] max-h-full  items-center justify-center z-30 bg-white"
      >
        {/* Modal Content */}
        <div className="relative p-6 bg-white rounded-bl-lg rounded-br-lg shadow dark:bg-gray-700 z-50">
          <div className="flex items-center justify-center">
            <ProductSection /> 
           </div>
        </div>
      </div>
    </div>
  )
}

export default MenuLists
