'use client';
import React from 'react';
import ProductHeroHeader from '@/components/ProductHeroHeader';
import CheckOutForm from '@/components/CheckOutForm';
import CheckOutFooter from '@/components/CheckOutFooter';
import BackNavigate from '@/components/BackNavigate';

const CheckoutPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/** Section is for Product Checkout billing */}
        <>
          <ProductHeroHeader />
          <BackNavigate newHref="/"/>
          <CheckOutForm />
          <CheckOutFooter />
        </> 
    
    </main>
  )
}

export default CheckoutPage
