import Image from 'next/image'
import React from 'react'
import ButtonMulai from '../components/ButtonMulai'


const Background = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden md:px-10 lg:px-14 xl:16 px-18'>
        <div className='absolute w-screen inset-0 bg-[#3B5B8A] rounded-b-[50%] scale-x-176 z-1'>
        
        </div>
        
        <div className='flex justify-between'>
            <div className='lg:py-40 h-screen z-10 mx-4 py-4 space-y-4'>
                <Image src='/logo1.webp' alt='logo2' width={350} height={350}/>
                <p className='text-lg text-white'>Jasa Coding hadir untuk membantu kalian semua</p>
                <ButtonMulai/>
            </div>

            <div className=''>
                <Image src='/mask.png' alt='bg1' width={582} height={250} color="" className='absolute top-8 right-0 z-10' />
            </div>
        </div>

    </div>
  )
}

export default Background