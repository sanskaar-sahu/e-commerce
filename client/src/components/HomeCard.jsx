import React from 'react'
import ButtonImg from './ButtonImg'

const HomeCard = ({src}) => {
  return (
    <div
      className="
        relative w-80 overflow-hidden
        group
        border border-white/20
        rounded-xl
        hover:rounded-full
        hover:border-white/70
        transition-[border-radius,border-color,transform]
        duration-700
        ease-in-out
        hover:scale-[1.02]
      "
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <ButtonImg />
    </div>
  )
}

export default HomeCard
