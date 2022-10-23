/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'
import img from '../public/img/p1.jpg'


const P1 = () => {
  return (
    <div className='-z-10'>
   {/* <Image height={1080} width={1920} src={img} alt="" /> */}
     <img className='h-screen w-screen' src="img/p1.jpg" alt="" /> 
     <div className='absolute top-[90px] left-36 text-center p-10'> X</div>
    
    </div>
  )
}

export default P1