import { useRef, useState } from "react"
import { shoes } from "../utils/shoes.js"

/* ---------- COLOR INTERPOLATION ---------- */
const lerp = (a, b, t) => a + (b - a) * t
const lerpColor = (c1, c2, t) => ({
  r: Math.round(lerp(c1.r, c2.r, t)),
  g: Math.round(lerp(c1.g, c2.g, t)),
  b: Math.round(lerp(c1.b, c2.b, t)),
})

const colorStops = [
  { pos: 0, color: { r: 230, g: 225, b: 215 } },
  { pos: 0.5, color: { r: 215, g: 200, b: 185 } },
  { pos: 1, color: { r: 185, g: 155, b: 135 } },
]

const getInterpolatedColor = (xRatio) => {
  for (let i = 0; i < colorStops.length - 1; i++) {
    const a = colorStops[i]
    const b = colorStops[i + 1]
    if (xRatio >= a.pos && xRatio <= b.pos) {
      const t = (xRatio - a.pos) / (b.pos - a.pos)
      return lerpColor(a.color, b.color, t)
    }
  }
  return colorStops[0].color
}

const HeroShoes = () => {
  const imageRef = useRef(null)

  const [index, setIndex] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [direction, setDirection] = useState("right")
  const [arrowColor, setArrowColor] = useState("rgb(230,225,215)")
  const [isInside, setIsInside] = useState(false)

  const prevIndex = (index - 1 + shoes.length) % shoes.length
  const nextIndex = (index + 1) % shoes.length

  const prev = () => setIndex(prevIndex)
  const next = () => setIndex(nextIndex)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width))
    const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))
    const ratioX = x / rect.width

    setMouse({ x, y })
    setDirection(ratioX < 0.5 ? "left" : "right")

    const { r, g, b } = getInterpolatedColor(ratioX)
    setArrowColor(`rgb(${r}, ${g}, ${b})`)
  }

  const translucentColor = arrowColor
    .replace("rgb", "rgba")
    .replace(")", ", 0.35)")

  return (
    <section className="relative h-screen w-full bg-[#f4f1ea] flex flex-col justify-center">

      {/* IMAGE REGION */}
      <div
        ref={imageRef}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
        onMouseMove={handleMouseMove}
        onClick={() => (direction === "left" ? prev() : next())}
        className="relative w-full flex items-center justify-center overflow-hidden cursor-none"
      >
        {/* LEFT */}
        <div
          onClick={prev}
          className="absolute left-[-12%] w-[420px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
        >
          <img src={shoes[prevIndex].link} className="w-full" />
        </div>

        {/* CENTER */}
        <div className="relative z-10 w-[600px]">
          <img src={shoes[index].link} className="w-full" />
        </div>

        {/* RIGHT */}
        <div
          onClick={next}
          className="absolute right-[-12%] w-[420px] opacity-50 scale-90 cursor-pointer transition-all duration-500"
        >
          <img src={shoes[nextIndex].link} className="w-full" />
        </div>

        {/* ARROW — NEVER REMOVED */}
        {isInside && (
          <div
            style={{
              left: mouse.x,
              top: mouse.y,
              backgroundColor: translucentColor,
              transform: `
                translate(-50%, -50%)
                rotate(${direction === "left" ? "180deg" : "0deg"})
              `,
            }}
            className="
              absolute z-[999]
              h-20 w-20 rounded-full
              flex items-center justify-center
              text-white text-2xl
              pointer-events-none
              backdrop-blur-md
              border border-white/30
              transition-[background-color,transform]
              duration-300 ease-out
            "
          >
            →
          </div>
        )}
      </div>

      {/* TEXT — CLOSER TO IMAGE */}
      <div className="mt-6 text-center gap-3">
        <h2 className="text-4xl font-serif">{shoes[index].name}</h2>
        <p className="mt-2 text-lg">{shoes[index].price}</p>
        <br />
        <a href="" className="hover:bg-black hover:text-white text-md font-semibold bg-transparent border-1 mr-2 px-3 py-2 border-black rounded-full">SHOP MEN</a>
        <a href=""  className="hover:bg-black hover:text-white text-md font-semibold bg-transparent border-1 px-3 py-2 border-black rounded-full" >SHOP WOMEN</a>
      </div>

    </section>
  )
}

export default HeroShoes
