


import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RanLogo from "../assets/images/RanLogo.png";
import { Link, useLocation } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";



const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Startup Launchpad", path: "/startup-lunchpad" },
  { name: "Portfolio", path: "/products" },
  {
    name: "Products",
    dropdown: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 sm:px-4 md:px-8 lg:px-10 overflow-x-hidden">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2"
            whileHover={{ rotateY: 12, rotateX: 6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="h-10 w-10 flex items-center justify-center ">
              <img
                src={RanLogo}
                alt="RAN AI Logo"
                className="w-full h-full object-contain "
              />
            </div>
            <span className="text-md font-semibold text-indigo-600">
              RAN AI
            </span>
          </motion.a>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex items-center gap-5 text-[16px] font-medium text-[#202020]  relative z-[9999]"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {navItems.map((item, i) => {
              const isActive = location.pathname === item.path;

              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative px-3 py-1 rounded-lg cursor-pointer"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <div className="flex items-center gap-1">
                      <span>Products</span>

                      {/* ICON */}
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* DESKTOP DROPDOWN */}
                    {openDropdown && (
                      <ProductsDropdown close={() => setOpenDropdown(false)} />
                    )}
                  </div>
                );
              }
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    type: "spring",
                    stiffness: 100,
                  }}
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

          {/* CONTACT BUTTON (DESKTOP) */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4149EE] to-[#121ABD] px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </motion.header>

      {/* OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* RIGHT SIDE DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 z-50 w-[min(100vw-1rem,20rem)] max-w-[85vw] rounded-l-3xl border border-blue-400 bg-white/90 shadow-2xl sm:w-72"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 ">
                <span className=""></span>
                <button onClick={() => setIsOpen(false)} className="text-xl">
                  ✕
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col space-y-3 px-5 py-6">
                {navItems.map((item, i) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <motion.div key={item.name} whileHover={{ x: 5 }}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                          isActive
                            ? "bg-indigo-100 text-indigo-700"
                            : "text-slate-700"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 text-center rounded-lg bg-indigo-50 border border-indigo-500 text-indigo-600 py-2 font-semibold"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;