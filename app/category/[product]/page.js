'use client';
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

import CategoryHeroHeader from '@/components/CategoryHeroHeader'
import PageCategoryItems from '@/components/PageCategoryItems'
import ProductSection from '@/components/ProductSection'
import FooterSection from '@/components/FooterSection'
import useAudiophileApi from '@/api/useAudiophileApi';
import BackNavigate from '@/components/BackNavigate';

const CategoryPage = () => {
  const audiophile = useAudiophileApi();
  const { fileData, fetchCategory} = audiophile;

  const { product } = useParams();
  
  useEffect(() => {
    fetchCategory(product)
  }, [product]);
  
  const sortCategory = fileData?.sort((a, b)=>{
    return b.new - a.new;
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CategoryHeroHeader categoryTitle={product}/>

      {/** Section is for Category page */
      
        fileData != [] && 
        <>
          <BackNavigate newHref="/"/>
          <PageCategoryItems categoryData={sortCategory}/>
          <ProductSection categoryData={fileData}/>
          <FooterSection categoryData={fileData}/>
        </>
      }
        
    </main>
  )
}

export default CategoryPage;
