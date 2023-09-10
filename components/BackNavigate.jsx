import React from 'react';
import { Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const BackNavigate = ({ newHref }) => {
  const router = useRouter();

  return (
    <div className='w-full py-2 px-5 md:w-4/5 md:mx-auto md:px-0 md:py-5'>
      <Link
        underline='none'
        component="button"
        onClick={() => router.back(newHref)}
        sx={{ height:'48px', 
          mt:3, color:'#000',
          backgroundColor: "transparent",
          textTransform:'capitalize',
          textAlign:'center',
          '&:hover': {color:"#D87D4A"} 
        }}
      >
        go back
      </Link>
    </div>
  )
}

export default BackNavigate
