// import React, { useState } from 'react'
// import {ArrowRight} from 'lucide-react'
// import RanLogo from '../assets/Images/RanLogo.png'
// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Services', href: '#services' },
//   { name: 'Industries', href: '#industries' },
//   { name: 'Startup Launchpad', href: '#startup' },
//   { name: 'Products', href: '#products' }
// ]

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm ">
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
//         <a href="#" className="flex items-center gap-2">
//           <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold ">
//             <img src={RanLogo} alt="RAN AI Logo" />
//           </div>
//           <span className="text-md  font-semibold text-indigo-600">RAN AI</span>
//         </a>

//         <nav className="hidden items-center gap-8 text-sm font-medium text-[#202020] md:flex">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="transition hover:text-indigo-600 hover:drop-shadow-md"
//             >
//               {item.name}
//             </a>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center gap-3">
//           <a
//             href="#contact"
//             className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
//           >
//             Contact Us
//             <span className="bg-white rounded-full p-1 flex items-center justify-center">
//               <ArrowRight  className="text-black w-4 h-4" />
//             </span>
//           </a>
//         </div>

//         <button
//           onClick={() => setIsOpen((p) => !p)}
//           className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-indigo-600"
//           aria-label="Toggle navigation"
//         >
//           <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
//         </button>
//       </div>

//       <div
//         className={
//           isOpen
//             ? "md:hidden max-h-96 py-4 opacity-100 overflow-hidden transition-all duration-300"
//             : "md:hidden max-h-0 py-0 opacity-0 overflow-hidden transition-all duration-300"
//         }
//       >
//         <div className="space-y-3 px-4">
//           {navItems.map((item) => (
//             <a
//               key={item.name}
//               href={item.href}
//               className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </a>
//           ))}
//           <a
//             href="#contact"
//             className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact Us
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RanLogo from "../assets/Images/RanLogo.png";



const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Startup Launchpad", href: "#startup" },
  { name: "Products", href: "#products" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ perspective: 1000 }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* 🔷 Logo (3D hover) */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="h-10 w-10 flex items-center justify-center">
            <img src={RanLogo} alt="RAN AI Logo" />
          </div>
          <span className="text-md font-semibold text-indigo-600">RAN AI</span>
        </motion.a>

        {/* 🔷 Nav Items (3D + underline + glow) */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-[#202020] md:flex">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
              whileHover={{
                rotateX: 8,
                rotateY: 8,
                scale: 1.08,
                textShadow: "0px 0px 8px rgba(79, 70, 229, 0.5)",
              }}
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {item.name}

              {/* underline */}
              <motion.span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </nav>

        {/* 🔷 Button (3D + arrow move + pulse) */}
        <div className="hidden md:flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{
              rotateX: 10,
              rotateY: -10,
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(65, 73, 238, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              hover: { duration: 0.2 },
            }}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white"
          >
            Contact Us
            <motion.span
              whileHover={{ x: 5 }}
              className="bg-white rounded-full p-1 flex items-center justify-center"
            >
              <ArrowRight className="text-black w-4 h-4" />
            </motion.span>
          </motion.a>
        </div>

        {/* 🔷 Toggle */}
        <motion.button
          onClick={() => setIsOpen((p) => !p)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-indigo-600"
        >
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            className="text-xl"
          >
            {isOpen ? "✕" : "☰"}
          </motion.span>
        </motion.button>
      </div>

      {/* 🔥 Mobile Menu (smooth + 3D open) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: i * 0.06,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{ x: 6, scale: 1.03 }}
                  className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navItems.length * 0.06,
                  type: "spring",
                  stiffness: 120,
                }}
                className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;