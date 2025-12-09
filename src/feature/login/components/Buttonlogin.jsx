import React from 'react'

const Buttonlogin = () => {
  return (
    <>
      <button className="w-[246px] h-[54px] rounded-3xl bg-[#2E4C77] text-[#E4E1E1] text-xl font-semibold mx-auto block">
        <a href="/home">Login</a>
      </button>

      <p className="text-center text-sm mt-4 text-white">
        Belum punya akun?{" "}
        <a href="/daftar" className="font-semibold hover:underline">Daftar</a>
      </p>
    </>
  )
}

export default Buttonlogin