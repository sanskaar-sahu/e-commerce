const Arrow = ({ x, y, direction, color }) => {
  const translucentColor = color
    .replace("rgb", "rgba")
    .replace(")", ", 0.35)")

  return (
    <div
      style={{
        left: x,
        top: y,
        backgroundColor: translucentColor,
        transform: `
          translate(-50%, -50%)
          rotate(${direction === "left" ? "180deg" : "0deg"})
        `,
      }}
      className="
        absolute z-50
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
  )
}

export default Arrow
