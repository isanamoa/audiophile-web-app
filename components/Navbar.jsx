import React from 'react'
import { Link } from '@mui/material'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <section className='w-full lg:w-1/2 mt-3 flex flex-col md:flex-row gap-2 md:gap-x-10 justify-center items-center md:justify-start md:items-start lg:justify-end lg:items-end font-bold uppercase'>
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
      </section>
    </>
  )
}

export default Navbar
