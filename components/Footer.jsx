import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Link } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Footer = () => {
  return (
    <section className='w-full px-6 py-5 lg:px-0 text-center bg-black'>
        <article className='w-full mb-5 lg:w-4/5 lg:mx-auto flex gap-5 flex-col lg:flex-row justify-center items-center md:justify-start md:items-start lg:items-center lg:justify-between'>
            <section className='font-bold w-full lg:!w-1/2 mt-8 flex justify-center md:justify-start'>
                <Link href="/" underline='none' 
                sx={{color: '#FFF', cursor: 'pointer', 
                fontSize: '0.813rem', 
                '&:hover': {color: '#D87D4A'} }}>
                    <Image 
                    src="/assets/home/header/audiophile.png" 
                    width={80} height={80} alt='audiophile' 
                    />            
                </Link>
            </section>

            <Navbar />

        </article>
        
        <article className='w-full lg:w-4/5 lg:mx-auto text-[0.938rem] font-medium text-white flex gap-5 flex-col md:flex-row justify-center items-center md:justify-between'>
            <section className='w-full lg:w-[44%] opacity-50 flex flex-col justify-center md:justify-start md:text-left'>
                <p className="py-4">
                    {`Audiophile is an all in one stop to fulfill your 
                    audio needs. We're a small team of music lovers 
                    and sound specialists who are devoted to helping 
                    you get the most out of personal audio. Come and 
                    visit our demo facility - we’re 
                    open 7 days a week.`}
                </p>
            </section>
        </article>

        <article className='w-full lg:w-4/5 lg:mx-auto text-[0.938rem] font-medium text-white flex gap-5 flex-col md:flex-row justify-center items-center md:justify-between'>
            <section className='w-full md:w-[45%] opacity-50 flex flex-col justify-center md:justify-start md:text-left'>
                <p className="py-4">
                    {`Copyright 2021. All Rights Reserved`}
                </p>
            </section>
            <section className='w-full md:w-[55%] lg:h-16 flex flex-col md:flex-row gap-2 md:gap-x-10 justify-center items-center md:justify-end md:items-end lg:justify-end lg:items-center'>
                <section className='flex gap-3'>
                    <Facebook sx={{ color: '#FFF', cursor: 'pointer', '&:hover':{color:'#D87D4A'} }} />
                    <Twitter sx={{ color: '#FFF', cursor: 'pointer', '&:hover':{color:'#D87D4A'} }} />
                    <Instagram sx={{ color: '#FFF', cursor: 'pointer', '&:hover':{color:'#D87D4A'} }} />
                </section>
            </section>
        </article>
        
    </section>
  )
}

export default Footer
