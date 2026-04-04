import React, { useState } from 'react'
import {ArrowRight} from 'lucide-react'
import RanLogo from '../assets/Images/RanLogo.png'
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Industries', href: '#industries' },
  { name: 'Startup Launchpad', href: '#startup' },
  { name: 'Products', href: '#products' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm ">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold ">
            <img src={RanLogo} alt="RAN AI Logo" />
          </div>
          <span className="text-md  font-semibold text-indigo-600">RAN AI</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#202020] md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-indigo-600 hover:drop-shadow-md"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Contact Us
            <span className="bg-white rounded-full p-1 flex items-center justify-center">
              <ArrowRight  className="text-black w-4 h-4" />
            </span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen((p) => !p)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-indigo-600"
          aria-label="Toggle navigation"
        >
          <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <div
        className={
          isOpen
            ? "md:hidden max-h-96 py-4 opacity-100 overflow-hidden transition-all duration-300"
            : "md:hidden max-h-0 py-0 opacity-0 overflow-hidden transition-all duration-300"
        }
      >
        <div className="space-y-3 px-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar