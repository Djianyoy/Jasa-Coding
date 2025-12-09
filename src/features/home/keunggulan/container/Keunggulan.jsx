// components/Background.jsx
import React from 'react'
import Card from '../components/Card' 
import { cardData } from '../hooks/cardData'


const Keunggulan = () => {
  return (
    <div className="relative w-full h-[500px] bg-[#2E4C77] rounded-b-[50%] flex items-center justify-center flex-col py-10">
      {/* Background Title */}
      <h1 className="text-white text-3xl font-bold mb-8">Keunggulan</h1>
      
      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}

export default Keunggulan
