import React from 'react'

const Heade = ({title, icons}) => {
  return (
    <>
        <title>{title}</title> 
        <link rel='shortcut icon' href={icons} type='image/x-icon' />
    </>
  )
}

export default Heade;
