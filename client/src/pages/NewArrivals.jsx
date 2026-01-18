import { shoes } from "../utils/shoes"
import ProductCard from "../components/ProductCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const NewArrivals = () => {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-[#f4f1ea] py-16 px-4 sm:px-10">

      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-sm tracking-widest uppercase border-b border-black pb-1">
          New Arrivals
        </h2>

        <div className="hidden sm:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        ref={scrollRef}
        className="
          flex gap-6
          overflow-x-auto
          pb-2
          scrollbar-hide
        "
      >
        {shoes.map((shoe) => (
          <ProductCard key={shoe.id} shoe={shoe} />
        ))}
      </div>

    </section>
  )
}

export default NewArrivals
