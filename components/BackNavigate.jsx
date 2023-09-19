import React from 'react';
import { Link } from '@mui/material';
import { useRouter } from 'next/navigation';

const BackNavigate = ({ newHref }) => {
  const router = useRouter();

  return (
    <div className='w-full lg:w-4/5 lg:mx-auto py-2 px-6 lg:px-0'>
      <Link
        underline='none'
        component="button"
        onClick={() => router.push(newHref)}
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
