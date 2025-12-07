import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-[#DDD8D8] flex mycontainer   items-center justify-between'>
        <div>
            <Image src={'/logo.webp'} width={100} height={100} />
        </div>

        <div>
            <li className='flex items-center justify-between gap-22'>
                <ul>
                    <Link href={"/jawa"}>Beranda</Link>
                </ul>
                <ul>
                    <Link href={"/jawa"}>Ajukan</Link>
                </ul>
                <ul>
                    <Link href={"/jawa"}>Riwayat</Link>
                </ul>
            </li>
        </div>

        <button>
            <Link className='px-6 py-0.5 flex items-center justify-center border-2 rounded-full font-semibold hover:bg-gray-700 ' href="/keunggulan"> Daftar</Link>
        </button>
    </nav>
  )
}

export default Navbar