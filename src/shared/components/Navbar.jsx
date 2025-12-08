import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#3B5B8A] flex mycontainer items-center justify-between gap-40'>
        <div>
            <Image src={'/logo1.webp'} alt='logo' width={128} height={12} />
        </div>

        <div>
            <li className='flex items-center justify-between gap-28 text-lg text-[#FEF8F5] hover:text-white '>
                <ul>
                    <Link href={"/jawa"} className='hover:font-semibold'>Beranda</Link>
                </ul>
                <ul>
                    <Link href={"/jawa"} className='hover:font-semibold'>Ajukan</Link>
                </ul>
                <ul>
                    <Link href={"/jawa"} className='hover:font-semibold'>Riwayat</Link>
                </ul>
            </li>
        </div>

        <a href="/daftar" className='px-10 py-1.5 flex items-center justify-center border-gray-300 border-4 rounded-full text-white text-base font-semibold hover:bg-[#F2B33D] '> 
            Daftar
        </a>
    </nav>
  )
}

export default Navbar