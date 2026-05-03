import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import CustomNavLink from "./CustomNavLink"
import { ShoppingCart, User2, Menu, X, ShoppingBag, User } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Designers", path: "/designers" },
    { name: "Editorial", path: "/editorial" },
    { name: "Archive", path: "/archive" },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-neutral-50/80 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-xl sm:text-2xl font-black tracking-tighter text-indigo-700">
            The Digital Curator
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <CustomNavLink key={link.path} to={link.path}>
                {link.name}
              </CustomNavLink>
            ))}
          </div>

          {/* Desktop Action Icons */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <button className="text-neutral-600 hover:text-indigo-500 transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button className="text-neutral-600 hover:text-indigo-500 transition-colors">
              <User2 size={20} />
            </button>
          </div>

          {/* Mobile UI (Icons + Menu Toggle) */}
          <div className="md:hidden flex items-center gap-2">
            <button className="p-2 text-neutral-600">
              <ShoppingBag size={20} />
            </button>
            <button className="p-2 text-neutral-600">
              <User size={20} />
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 text-neutral-700 hover:text-indigo-500 transition-colors z-[60]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed inset-0 z-[55] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "bg-black/50 opacity-100" : "bg-transparent opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
      />
      
      <aside className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[58] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full pt-20 px-6 space-y-6">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400">Navigation</p>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={({ isActive }) => 
                  `text-lg font-semibold transition-colors ${
                    isActive ? "text-indigo-600" : "text-neutral-800 hover:text-indigo-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          
          <hr className="border-neutral-100" />
          
          <div className="space-y-4">
            <button className="flex items-center gap-3 text-neutral-700 font-medium">
              <ShoppingBag size={20} /> Cart (0)
            </button>
            <button className="flex items-center gap-3 text-neutral-700 font-medium">
              <User size={20} /> Account
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Header