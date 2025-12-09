import Kotak from '@/feature/daftar/container/Kotak'
import Html from '@/shared/components/Html'
import Navbar from '@/shared/components/Navbar'
import React from 'react'

const page = () => {
  return (
    // 1. Main Container: Change h-screen to min-h-screen
    <div className='relative w-full min-h-screen overflow-hidden mb-20'> 
      <div className='absolute w-screen h-full inset-0 bg-[#3B5B8A] rounded-b-[50%] scale-x-150 z-0'>
      </div>
      <div className='relative z-10'>
        <Navbar></Navbar>    
        <Kotak></Kotak>
      </div>

    </div>
  )
}

export default page