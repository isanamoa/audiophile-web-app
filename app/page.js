'use client';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import AdSection from '@/components/AdSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {

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
