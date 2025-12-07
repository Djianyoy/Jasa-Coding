import Image from 'next/image'
import React from 'react'


const Background = () => {
  return (
    <div className='relative w-full h-screen  overflow-hidden'>
        <div className='absolute w-screen h-218 inset-0 bg-[#DDD8D8] rounded-b-full z-0'>
        
         </div>
        
        <div className='flex justify-end'>
            <Image src='/BGIMAGE.webp' width={550} height={100} color="" className='absolute top-0 right-0 z-10' />
        </div>
    </div>
  )
}

export default Background