'use client';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import AdSection from '@/components/AdSection';
import FooterSection from '@/components/FooterSection';
//import useAudiophileApi from '@/api/useAudiophileApi';

export default function Home() {
  //const audiophile = useAudiophileApi();
  //const { fileData } = audiophile;
  //console.log(fileData);

  //const speakers = fileData.filter( datum => datum.category === 'speakers' );
  //console.log('speakers', speakers);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {
        <>
        <HeroSection />
        <ProductSection />
        <AdSection />
        <FooterSection />
        </>  
      }      
    </main>
  )
}
