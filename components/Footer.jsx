import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full p-5 md:py-5 md:px-0 text-center bg-black'>
        <div className='w-full mb-5 md:w-4/5 md:mx-auto flex gap-5 flex-col md:flex-row justify-center items-center md:justify-between'>
            <div className='font-bold w-full md:!w-1/2 flex justify-center md:justify-start'>
            <Link href="/" underline='none' 
              sx={{color: '#FFF', cursor: 'pointer', 
              fontSize: '0.813rem', 
              '&:hover': {color: '#D87D4A'} }}>
                <Image 
                  src="/assets/home/header/audiophile.png" 
                  width={80} height={80} alt='audiophile' 
                />            
            </Link>
            </div>

            <Navbar />

        </div>
        
        <div className='w-full md:w-4/5 md:mx-auto md:py-5 md:px-0 text-[0.938rem] font-[500] text-white flex gap-5 flex-col md:flex-row justify-center items-center md:justify-between'>
            <div className='w-full md:w-[45%] opacity-50 flex flex-col justify-center md:justify-start md:text-left'>
                <p className="py-4">
                    {`Audiophile is an all in one stop to fulfill your 
                    audio needs. We're a small team of music lovers 
                    and sound specialists who are devoted to helping 
                    you get the most out of personal audio. Come and 
                    visit our demo facility - we’re 
                    open 7 days a week.`}
                </p>

                <p className="py-4">
                    {`Copyright 2021. All Rights Reserved`}
                </p>
            </div>
            <div className='w-full md:w-[55%] flex flex-col md:flex-row gap-2 md:gap-x-10 justify-center md:justify-end items-center md:items-end'>
                <div className='flex gap-3'>
                    <Facebook sx={{ color: '#FFF', cursor: 'pointer' }} />
                    <Twitter sx={{ color: '#FFF', cursor: 'pointer' }} />
                    <Instagram sx={{ color: '#FFF', cursor: 'pointer' }} />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer
