import Kotaklogin from '@/feature/login/container/Kotaklogin'
import Navbar from '@/shared/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="bg-[#F2B33D] pb-20">
      <div className='relative w-full min-h-screen overflow-hidden'> 
        <div className='absolute w-screen h-full inset-0 bg-[#3B5B8A] rounded-b-[50%] scale-x-150 z-0'>
        </div>
        <div className='relative z-10'>
          <Navbar />    
          <Kotaklogin/>
        </div>
      </div>
    </div>
  )
}

export default page