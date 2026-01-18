import React from 'react'

const ButtonImg = () => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">

      {/* NEW ARRIVAL */}
      <button
        className="
          px-3 py-2
          bg-transparent text-white
          border border-white
          rounded-2xl
          transition-all duration-300
          group-hover:border-transparent
        "
      >
        NEW ARRIVAL
      </button>

      {/* SHOP MEN */}
      <button
        className="
          px-3 py-2
          bg-transparent text-white
          border border-white
          rounded-2xl
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
        "
      >
        SHOP MEN
      </button>

      {/* SHOP WOMEN */}
      <button
        className="
          px-3 py-2
          bg-transparent text-white
          border border-white
          rounded-2xl
          opacity-0 translate-y-4
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 delay-100
        "
      >
        SHOP WOMEN
      </button>

    </div>
  )
}

export default ButtonImg
