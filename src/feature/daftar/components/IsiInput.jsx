const IsiInput = () => {
  return (
    <>
      <label className="text-white text-sm font-semibold mb-1">Email</label>    
      <input className="w-[420px] h-[49px] rounded bg-white mb-4 px-4 placeholder-[#D9D9D9]" placeholder="Email" />

      <label className="text-white text-sm font-semibold mb-1">Kata sandi</label>
      <input className="w-[420px] h-[49px] rounded bg-white mb-4 px-4 placeholder-[#D9D9D9]" placeholder="Kata sandi" />

      <label className="text-white text-sm font-semibold mb-1">Konfirmasi kata sandi</label>
      <input className="w-[420px] h-[49px] rounded bg-white mb-6 px-4 placeholder-[#D9D9D9]" placeholder="Konfirmasi kata sandi" />
    </>
  )
}


export default IsiInput
