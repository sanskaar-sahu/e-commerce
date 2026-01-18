import {
  HelpCircle,
  Search,
  ShoppingBag,
  User,
} from "lucide-react"
import { useEffect, useState } from "react"

const Nav = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling DOWN
        setShow(false)
      } else {
        // scrolling UP
        setShow(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`
        fixed top-5 left-1/2 -translate-x-1/2
        w-[90%]
        bg-[#ecece3]
        rounded-full
        border border-yellow-100
        z-50
        transition-transform duration-300 ease-in-out
        ${show ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold italic">allbirds</h1>

          {/* Center Navigation */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm hover:text-gray-600">MEN</a>
            <a href="#" className="text-sm hover:text-gray-600">WOMEN</a>
            <a href="#" className="text-sm hover:text-gray-600">SALE</a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-gray-600">Our Stores</a>
            <a href="#" className="text-sm hover:text-gray-600">About</a>
            <a href="#" className="text-sm hover:text-gray-600">ReRun</a>

            <div className="flex items-center gap-4 ml-4">
              <Search className="w-5 h-5 hover:text-gray-600" />
              <User className="w-5 h-5 hover:text-gray-600" />
              <HelpCircle className="w-5 h-5 hover:text-gray-600" />
              <ShoppingBag className="w-5 h-5 hover:text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
