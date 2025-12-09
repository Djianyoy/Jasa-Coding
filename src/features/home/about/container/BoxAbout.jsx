import Image from 'next/image'
import React from 'react'

const BoxAbout = () => {
  return (
    <div id='about' className='relative w-full h-screen overflow-x-hidden flex items-center justify-center z-0'>
        
            <Image src='/frameAbout.webp' alt='frame' width={850} height={490} className='' />
        
            <div className='bg-[#2E4C77] w-170 h-80 absolute my-18 mx-28 px-4 z-10 rounded-b-[70px] shadow-2xl flex flex-col items-center justify-center gap-8  '>
                <h1 className='text-white text-5xl font-bold'>
                    Tentang Kami
                </h1>
                <p className='text-white text-center text-md'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel neque arcu. Duis sem turpis, laoreet et magna vel, consectetuLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel neque arcu. Duis sem turpis, laoreet et magna vel, consectetur consectetur enim. Aenean hendrerit laoreet mauris ac rutrum. Vivamus vitae diam at eros mollis tristique. Sed sapien turpis, vulputate id gravida vulputate, cursus ut augue. Aliquam ultrices magna justo. In dignissim justo ut orci laoreet efficitur. Mauris aliquam nibh nisi, quis consequat tellus dapibus ac. 
                </p>
            </div>
       

        
        
        
    </div>
  )
}

export default BoxAbout