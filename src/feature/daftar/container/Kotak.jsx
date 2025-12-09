import React from 'react'
import IsiInput from '../components/IsiInput'
import Button from '../components/Button'

const Kotak = () => {
  return (
    <div className="min-h-screen flex justify-center mt-12">
      <div className="flex items-center">
        
        {/* KIRI */}
          <div className="bg-[#3D4450] text-white rounded-3xl p-10 w-[470px] h-[586px] flex flex-col">
            <h2 className="text-5xl font-bold mb-2">Gabung dulu yuk!</h2>
            <p className="mb-10 text-lg">Mulai akses layanan coding yang kamu butuhkan.</p>
            <img src="/asset1.png" alt="logo" className=" mx-auto mt-21" />
          </div>

          {/* KANAN */}
        <div className="bg-[#E09F24] rounded-r-3xl p-22 w-[600px] min-h-[400px] flex flex-col justify-center">
          <IsiInput />
          <Button />
        </div>

      </div>
    </div>
  )
}

export default Kotak
