import React from 'react'

const Button = () => {
  return (
    <>
      <button className="w-[246px] h-[54px] rounded-3xl bg-[#2E4C77] text-[#E4E1E1] text-xl font-semibold mx-auto block">
        <a href="/home">Daftar</a>
      </button>

      <p className="text-center text-sm mt-4 text-white">
        Sudah punya akun?{" "}
        <a href="/login" className="font-semibold hover:underline">Masuk</a>
      </p>
    </>
  )
}

export default Button
