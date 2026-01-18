const ProductCard = ({ shoe }) => {
  return (
    <div
      className="
        min-w-[320px] sm:min-w-[360px]
        bg-white rounded-[24px]
        p-6
        flex flex-col
      "
    >
      {/* Image Area */}
      <div className="relative flex items-center justify-center h-[260px]">
        {/* NEW badge */}
        <span className="absolute top-2 left-2 text-xs px-3 py-1 rounded-full bg-[#e6dfd3]">
          NEW
        </span>

        <img
          src={shoe.link}
          alt={shoe.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold tracking-wide uppercase">
          {shoe.name}
        </h3>
        <p className="text-sm text-gray-700 mt-1">
          {/* optional subtitle later */}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 flex items-center justify-between">
        {/* Color Swatch */}
        <div className="relative w-6 h-6 rounded-full border border-black/50 flex items-center justify-center">
          <div
            className={`w-4 h-4 rounded-full ${shoe.color}`}
          />
        </div>

        <span className="text-sm font-semibold">
          {shoe.price}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
