import Footer from '@/shared/components/Footer'
import Navbar from   '@/shared/components/Navbar'
import Html  from '@/shared/components/Html'
import React from 'react'
import TextBox from '@/features/home/hero/container/TextBox'

const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
    <TextBox/>
    <Html/>
    <Footer/>
    </div>
    
  )
}

export default page