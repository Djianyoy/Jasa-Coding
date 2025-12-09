import React from 'react'

const Inputlogin = () => {
  return (
    <>
      <label className="text-white text-sm font-semibold mb-1 mt-10">Email</label>
      {/* Tambahkan focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 ke class input */}
      <input
className="w-[420px] h-[49px] rounded-xl bg-white mb-4 px-4 placeholder-[#D9D9D9] border-2 border-transparent focus:ring-4 focus:ring-[#2E4C77] outline-none transition-all duration-150"    
    placeholder="Email"
      />

      <label className="text-white text-sm font-semibold mb-1">Kata sandi</label>
      {/* Terapkan class yang sama ke input lainnya */}
      <input    
className="w-[420px] h-[49px] rounded-xl bg-white mb-4 px-4 placeholder-[#D9D9D9] border-2 border-transparent focus:ring-4 focus:ring-[#2E4C77] outline-none transition-all duration-150"   
    placeholder="Kata sandi"
      />
    </>
  )
}

export default Inputlogin