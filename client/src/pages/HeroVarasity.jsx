import { img2 } from "../utils/shoes"
import { img1 } from "../utils/shoes"
const HeroSplit = () => {
  return (
    <section className="h-screen w-full mt-4 flex p-2 gap-2 rounded-2xl bg-transparent">
      {/* LEFT PANEL */}
      <div
        style={{ backgroundImage: `url(${img1})` }}
        className={`
          rounded-3xl
          relative w-1/2 h-full
          bg-cover bg-center
          group
        `}
      >
        {/* Overlay */}
        <div className="absolute rounded-3xl inset-0 bg-black/10"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-20 text-white">
          <h1 className="text-3xl font-serif mb-4">
            New Arrivals
          </h1>
          <p className="text-md mb-8">
            The Latest And Greatest
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              SHOP MEN
            </button>
            <button className="px-6 py-3 cursor-pointer bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              SHOP WOMEN
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
      style={{ backgroundImage: `url(${img2})` }}
        className={`
        rounded-3xl
          relative w-1/2 h-full
          bg-contain bg-center
          group
        `}
      >
        {/* Overlay */}
        <div className="absolute rounded-3xl inset-0 bg-black/25"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-20 text-white">
          <h3 className="text-3xl font-serif mb-4">
            Varsity Collection
          </h3>
          <p className="text-md mb-8">
            Old School Vibes. New School Comfort.
          </p>

          <button className="w-fit px-6 py-3 cursor-pointer bg-white text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            SHOP NOW
          </button>
        </div>
      </div>

    </section>
  )
}

export default HeroSplit
