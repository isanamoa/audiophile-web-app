'use client';
import React, { useState } from 'react';
import { Close, Menu, MenuOpen, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from '@mui/material';
import CartPaper from './CartPaper';
import MenuLists from './MenuLists';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleCartState = () => {
    setIsCartOpen(prev=>!prev);
  }

  const MenuToggle = () => {
    setIsMenuOpen(prev=>!prev);
  }

  return (
    <>
      <header className='fixed z-50 w-full flex justify-between items-center px-6 py-5 lg:px-0 text-white bg-black shadow-lg'>
        <div className='relative z-10 w-full bg-black shadow-lg lg:w-4/5 mx-auto flex justify-between items-center'>
          <div className='w-auto'>
              {
                isMenuOpen &&
                <Close sx={{cursor: 'pointer', display: {xs:'block', md:'none'}}} onClick={MenuToggle}/>
                || 
                <Menu sx={{cursor: 'pointer', display: {xs:'block', md:'none'}}} onClick={MenuToggle}/>
              }
              
              <Link href="/" underline='none' 
                sx={{color: '#FFF', cursor: 'pointer', 
                fontSize: '0.813rem', 
                display: {xs:'none', md:'block'},
                '&:hover': {color: '#D87D4A'} }}>
                  <Image 
                    src="/assets/home/header/audiophile.png" 
                    width={80} height={80} alt='audiophile' 
                  />            
              </Link>
          </div>
          <div className='w-auto md:w-4/5 lg:w-auto'>
            <div className='hidden lg:flex flex-row gap-2 md:gap-x-10 justify-start  items-start font-bold '>
              <Link href="/" underline='none' 
                sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>HOME</Link>
              
              <Link underline='none' 
                component="button"
                onClick={() => router.push("/category/headphones")}
                sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>HEADPHONES</Link>
              
              <Link underline='none' 
                component="button"
                onClick={() => router.push("/category/speakers")}
                sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'}  }}>SPEAKERS</Link>
              
              <Link underline='none' 
                component="button"
                onClick={() => router.push("/category/earphones")}
                sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>EARPHONES</Link>
            
            </div>
              
              <Link href="/" underline='none' 
                sx={{color: '#FFF', cursor: 'pointer', 
                fontSize: '0.813rem', 
                display: {xs:'block', md:'none'},
                '&:hover': {color: '#D87D4A'} }}>
                  <Image 
                    src="/assets/home/header/audiophile.png" 
                    width={80} height={80} alt='audiophile' 
                  />
              </Link>

          </div>

          <div>
            <ShoppingCartOutlined 
              sx={{cursor:'pointer'}}
              onClick={handleCartState} 
            />
            <CartPaper modalState={{isCartOpen, handleCartState}} />
        </div>

      </div>

    </header>
    <MenuLists isMenuOpen={isMenuOpen} />
    </>
  )
}

export default Header
