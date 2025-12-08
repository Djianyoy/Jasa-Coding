import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-400 mt-100'>
        <div className='px-24 pt-18 pb-4'>
            <Image src={'/logo.webp'} alt='logoFooter' width={150} height={150} className='p-2' />
            <p>©Jasa Coding 2025. All rights reserved. Universitas Brawijaya</p>
        </div>

        <div className='w-full py-4 border-t-2 flex items-center justify-center'>
            <p>Made with ❤️ by Staff Muda PIT KBMDSI</p>
        </div>
    </div>
  )
}

export default Footer