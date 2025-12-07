import Background from '@/features/home/hero/container/Background'
import Footer from '@/shared/components/Footer'
import Navbar from '@/shared/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white'>
    <Navbar/>
    <Background />
    <Footer/>
    </div>
    
  )
}

export default page