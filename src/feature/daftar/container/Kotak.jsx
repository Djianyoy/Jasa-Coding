import React from 'react'
import IsiInput from '../components/IsiInput'
import Button from '../components/Button'

const Kotak = () => {
  return (
    <div className="min-h-screen flex justify-center mt-12">
      <div className="flex items-center">
        
        {/* KIRI */}
        <div className="bg-[#6C6A6A] text-white rounded-3xl p-10 w-[470px] h-[586px] flex flex-col">
          <h2 className="text-5xl font-bold mb-2">Selamat datang!</h2>
          <p className="mb-10 text-lg">open joki bg</p>
          <div className="bg-[#D4D4D4] w-[233px] h-[233px] mx-auto mt-12"></div>
        </div>

        {/* KANAN */}
        <div className="bg-[#C7C7C7BF] rounded-r-3xl p-22 w-[600px] min-h-[400px] flex flex-col justify-center">
          <IsiInput />
          <Button />
        </div>

      </div>
    </div>
  )
}

export default Kotak
