'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

import ProductHeroHeader from '@/components/ProductHeroHeader';
import ProductViewCard from '@/components/ProductViewCard';
import ProductFeature from '@/components/ProductFeature';
import SimilarProductCard from '@/components/SimilarProductCard';
import GalaryList from '@/components/GalaryList';
import ProductSection from '@/components/ProductSection';
import FooterSection from '@/components/FooterSection';
import useAudiophileApi from '@/api/useAudiophileApi';
import BackNavigate from '@/components/BackNavigate';

const ProductPage = () => {
  const audiophile = useAudiophileApi();
  const { fileData, fetchProductByID} = audiophile;

  const { productid } = useParams();
  //const productName = productid.split('-').join(" ");
  //console.log(productid);

  useEffect(() => {
    fetchProductByID(productid);
  }, [productid]);
  
  //console.log(fileData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/** Section is for Product detail */}
        <>
          <ProductHeroHeader />
          <BackNavigate newHref={`/category/${fileData?.category}`}/>
          <ProductViewCard products={fileData} />
          <ProductFeature features={fileData}/>
          <GalaryList galleryData={fileData} />
          <SimilarProductCard similar={fileData} />
          <ProductSection />
          <FooterSection />
        </> 
    
    </main>
  )
}

export default ProductPage
