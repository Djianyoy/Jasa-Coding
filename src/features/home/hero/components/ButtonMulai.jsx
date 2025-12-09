import { AArrowDown, ArrowDown, ArrowDownAZIcon, ArrowDownIcon, LucideArrowDown } from 'lucide-react'
import React from 'react'

const ButtonMulai = () => {
  return (
    <button href="/daftar" className='bg-[#3D4450] px-6 py-2 flex items-center justify-center gap-2 rounded-full text-[#C4B47D] text-base font-semibold hover:bg-[#F2B33D] z-10 hover:text-[#3B5B8A] '> 
            <a href="#about">
                Mulai
            </a>
            <LucideArrowDown/>
    </button>
  )
}

export default ButtonMulai