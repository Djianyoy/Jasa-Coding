const IsiInput = () => {
  return (
    <>
      <label className="text-white text-sm font-semibold mb-1">Email</label>
      {/* Tambahkan focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 ke class input */}
      <input
        className="w-[420px] h-[49px] rounded bg-white mb-4 px-4 placeholder-[#D9D9D9] border-2 border-transparent focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-150"
        placeholder="Email"
      />

      <label className="text-white text-sm font-semibold mb-1">Kata sandi</label>
      {/* Terapkan class yang sama ke input lainnya */}
      <input
        className="w-[420px] h-[49px] rounded bg-white mb-4 px-4 placeholder-[#D9D9D9] border-2 border-transparent focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-150"
        placeholder="Kata sandi"
      />

      <label className="text-white text-sm font-semibold mb-1">Konfirmasi kata sandi</label>
      {/* Terapkan class yang sama ke input lainnya */}
      <input
        className="w-[420px] h-[49px] rounded bg-white mb-6 px-4 placeholder-[#D9D9D9] border-2 border-transparent focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all duration-150"
        placeholder="Konfirmasi kata sandi"
      />
    </>
  )
}

export default IsiInput
