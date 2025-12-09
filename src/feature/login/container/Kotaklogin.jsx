    import React from 'react'
    import Inputlogin from '../components/Inputlogin'
    import Buttonlogin from '../components/Buttonlogin'

    const Kotaklogin = () => {
  return (
    <div className="min-h-screen flex justify-center mt-12">
      <div className="flex items-center">
        
        {/* KIRI */}
          <div className="bg-[#3D4450] text-white rounded-3xl p-10 w-[470px] h-[586px] flex flex-col">
            <h2 className="text-5xl font-bold mb-2">Masuk ke akun kamu!</h2>
            <p className="mb-10 text-lg">Ayo lanjutkan perjalanan codingmu bersama kami</p>
            <img src="/asset1.png" alt="logo" className="mx-auto mt-21" />
          </div>

          {/* KANAN */}
        <div className="bg-[#E09F24] rounded-r-3xl p-22 w-[600px] h-[544px] flex flex-col justify-center">
          <Inputlogin />
          <Buttonlogin/>
        </div>

      </div>
    </div>
  )
}

export default Kotaklogin