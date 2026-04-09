// // import React, { useState } from 'react'
// // import {ArrowRight} from 'lucide-react'
// // import RanLogo from '../assets/Images/RanLogo.png'
// // const navItems = [
// //   { name: 'Home', href: '#home' },
// //   { name: 'About', href: '#about' },
// //   { name: 'Services', href: '#services' },
// //   { name: 'Industries', href: '#industries' },
// //   { name: 'Startup Launchpad', href: '#startup' },
// //   { name: 'Products', href: '#products' }
// // ]

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false)

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-sm ">
// //       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
// //         <a href="#" className="flex items-center gap-2">
// //           <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold ">
// //             <img src={RanLogo} alt="RAN AI Logo" />
// //           </div>
// //           <span className="text-md  font-semibold text-indigo-600">RAN AI</span>
// //         </a>

// //         <nav className="hidden items-center gap-8 text-sm font-medium text-[#202020] md:flex">
// //           {navItems.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.href}
// //               className="transition hover:text-indigo-600 hover:drop-shadow-md"
// //             >
// //               {item.name}
// //             </a>
// //           ))}
// //         </nav>

// //         <div className="hidden md:flex items-center gap-3">
// //           <a
// //             href="#contact"
// //             className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
// //           >
// //             Contact Us
// //             <span className="bg-white rounded-full p-1 flex items-center justify-center">
// //               <ArrowRight  className="text-black w-4 h-4" />
// //             </span>
// //           </a>
// //         </div>

// //         <button
// //           onClick={() => setIsOpen((p) => !p)}
// //           className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-indigo-600"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
// //         </button>
// //       </div>

// //       <div
// //         className={
// //           isOpen
// //             ? "md:hidden max-h-96 py-4 opacity-100 overflow-hidden transition-all duration-300"
// //             : "md:hidden max-h-0 py-0 opacity-0 overflow-hidden transition-all duration-300"
// //         }
// //       >
// //         <div className="space-y-3 px-4">
// //           {navItems.map((item) => (
// //             <a
// //               key={item.name}
// //               href={item.href}
// //               className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600"
// //               onClick={() => setIsOpen(false)}
// //             >
// //               {item.name}
// //             </a>
// //           ))}
// //           <a
// //             href="#contact"
// //             className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
// //             onClick={() => setIsOpen(false)}
// //           >
// //             Contact Us
// //           </a>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar

// import React, { useState, useEffect } from "react";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import RanLogo from "../assets/images/RanLogo.png";
// import { Link, useLocation } from "react-router-dom";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Services", path: "/services" },
//   { name: "Industries", path: "/industries" },
//   { name: "Startup Launchpad", path: "/startup-lunchpad" },
//   { name: "Products", path: "/products" },
// ];
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
//         scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
//       }`}
//       style={{ perspective: 1000 }}
//     >
//       <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
//         {/* 🔷 Logo (3D hover) */}
//         <motion.a
//           href="#"
//           className="flex items-center gap-2"
//           whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 200 }}
//         >
//           <div className="h-10 w-10 flex items-center justify-center">
//             <img src={RanLogo} alt="RAN AI Logo" />
//           </div>
//           <span className="text-md font-semibold text-indigo-600">RAN AI</span>
//         </motion.a>

//         {/* 🔷 Nav Items (3D + underline + glow) */}
//         <nav className="hidden items-center gap-8 text-sm font-medium text-[#202020] md:flex">
//           {navItems.map((item, i) => {
//             const isActive = location.pathname === item.path;
//             return (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -15 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
//                 whileHover={{
//                   scale: 1.1,
//                   backgroundColor: "rgba(79, 70, 229, 0.15)",
//                   borderRadius: "8px",
//                   boxShadow: "0 4px 12px rgba(79, 70, 229, 0.3)",
//                 }}
//                 className={`relative px-2 py-1 rounded-lg transition-all duration-300 ${
//                   isActive ? "bg-indigo-100 text-indigo-700 shadow-md" : ""
//                 }`}
//                 style={{ transformStyle: "preserve-3d" }}
//               >
//                 <Link to={item.path} className="block">
//                   {item.name}
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </nav>

//         {/* 🔷 Button (3D + arrow move + pulse) */}
//         <div className="hidden md:flex items-center gap-3">
//           <motion.div
//             whileHover={{
//               rotateX: 10,
//               rotateY: -10,
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(65, 73, 238, 0.3)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             animate={{ scale: [1, 1.02, 1] }}
//             transition={{
//               scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
//               hover: { duration: 0.2 },
//             }}
//             className="rounded-full transition"
//           >
//             <Link
//               to="/contact"
//               className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white"
//             >
//               Contact Us
//               <motion.span
//                 whileHover={{ x: 5 }}
//                 className="bg-white rounded-full p-1 flex items-center justify-center"
//               >
//                 <ArrowRight className="text-black w-4 h-4" />
//               </motion.span>
//             </Link>
//           </motion.div>
//         </div>

//         {/* 🔷 Toggle */}
//         <motion.button
//           onClick={() => setIsOpen((p) => !p)}
//           whileTap={{ scale: 0.9 }}
//           className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-indigo-600"
//         >
//           <motion.span
//             animate={{ rotate: isOpen ? 90 : 0 }}
//             className="text-xl"
//           >
//             {isOpen ? "✕" : "☰"}
//           </motion.span>
//         </motion.button>
//       </div>

//       {/* 🔥 Mobile Menu (smooth + 3D open) */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden overflow-hidden"
//           >
//             <div className="space-y-3 px-4 py-4">
//               {navItems.map((item, i) => {
//                 const isActive = location.pathname === item.path;
//                 return (
//                   <motion.div
//                     key={item.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       delay: i * 0.06,
//                       type: "spring",
//                       stiffness: 120,
//                     }}
//                     whileHover={{
//                       scale: 1.05,
//                       backgroundColor: "rgba(79, 70, 229, 0.15)",
//                       x: 6,
//                     }}
//                   >
//                     <Link
//                       to={item.path}
//                       className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
//                         isActive
//                           ? "bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500"
//                           : "text-slate-700 hover:text-indigo-600"
//                       }`}
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {item.name}
//                     </Link>
//                   </motion.div>
//                 );
//               })}
//               <Link
//                 to="/contact"
//                 className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.header>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RanLogo from "../assets/images/RanLogo.png";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Startup Launchpad", path: "/startup-lunchpad" },
  { name: "Products", path: "/products" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      style={{ perspective: 1200 }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* Logo with 3D hover */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ rotateY: 12, rotateX: 6, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="h-10 w-10 flex items-center justify-center">
            <img src={RanLogo} alt="RAN AI Logo" />
          </div>
          <span className="text-md font-semibold text-indigo-600">RAN AI</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#202020]">
          {navItems.map((item, i) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{
                  scale: 1.12,
                  rotateZ: 1,
                  background:
                    "linear-gradient(120deg, rgba(79,70,229,0.15), rgba(147,197,253,0.15))",
                  boxShadow: "0 6px 18px rgba(79,70,229,0.25)",
                  borderRadius: "10px",
                }}
                className={`relative px-3 py-1 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-100 text-indigo-700 shadow-md border-b-2 border-indigo-500"
                    : ""
                }`}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:flex items-center gap-3">
          <motion.div
            whileHover={{
              rotateX: 10,
              rotateY: -8,
              scale: 1.05,
              boxShadow: "0px 12px 22px rgba(65, 73, 238, 0.35)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
            className="rounded-full"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
              <motion.span
                whileHover={{ x: 5 }}
                className="bg-white rounded-full p-1 flex items-center justify-center"
              >
                <ArrowRight className="text-black w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-white backdrop-blur-md shadow-md"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item, i) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.07,
                      type: "spring",
                      stiffness: 120,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(79,70,229,0.15)",
                      x: 5,
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-100 text-indigo-700 border-l-4 border-indigo-500"
                          : "text-slate-700 hover:text-indigo-600"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
              <Link
                to="/contact"
                className="block rounded-xl border border-indigo-500 bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;