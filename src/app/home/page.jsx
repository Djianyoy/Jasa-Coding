import Footer from '@/shared/components/Footer'
import Navbar from   '@/shared/components/Navbar'
import React from 'react'
import TextBox from '@/features/home/hero/container/TextBox'
import BoxAbout from '@/features/home/about/container/BoxAbout'
import Image from 'next/image'
import Keunggulan from '@/features/home/keunggulan/container/Keunggulan'

const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
    <TextBox/>
    <Image src='/bgImage3.webp' alt='bgHtml1' width={350} height={100} className='absolute z-0 top-180 left-0'/>
    <BoxAbout/>
    <Image src='/bgImage4.webp' alt='bgHtml2' width={350} height={100} className='absolute z-0 top-350 right-0'/>
    <Keunggulan/>
    <Footer/>
    </div>
    
  )
}

export default page