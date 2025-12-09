import React from 'react'

const Card = ({ number, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl w-full md:w-[250px] flex flex-col items-center gap-4">
      <div className="bg-[#F2B33D] w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {number}
      </div>
      <h3 className="text-[#2E4C77] font-semibold text-lg">{title}</h3>
      <p className="text-center text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default Card