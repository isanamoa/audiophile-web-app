import React from 'react'
import { Link } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <div className='w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-x-10 justify-center md:justify-end items-center md:items-end font-bold uppercase'>
        <Link underline='none' sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>Home</Link>
        <Link underline='none' sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>Headphones</Link>
        <Link underline='none' sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'}  }}>Speakers</Link>
        <Link underline='none' sx={{color: '#FFF', cursor: 'pointer', fontSize: '0.813rem', '&:hover': {color: '#D87D4A'} }}>Earphones</Link>
      </div>
    </>
  )
}

export default Navbar
