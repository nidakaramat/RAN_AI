import React from "react";
import { motion } from "framer-motion";
import start from "../../../assets/images/industries/start.png";
import { BsStars } from "react-icons/bs";
import bgImage from "../../../assets/images/bg1.png";
const stats = [
  { value: "50+", label: "AI Systems Deployed" },
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "10+", label: "Industries Served" },
];


const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, type: "spring", stiffness: 80, damping: 15 },
  },
};


const StartupLunch = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
      relative
      w-screen
      min-h-screen
      -mt-[90px]
      pt-[110px]
      bg-cover
      bg-center
      bg-no-repeat
      flex flex-col justify-center
      bg-[#F0F4FF]
    "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span
            className="inline-flex items-center text-blue-600 bg-white shadow-lg border border-blue-100 px-3 py-2 rounded-full text-[16px] font-medium mt-10 sm:mt-0"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <BsStars className="h-4 w-4 mr-1" />
            Startup Launchpad
          </motion.span>
          <h1
            className="mt-7 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Building the Future
            <span className="block mt-2">
              of Intelligent <span className="text-[#1D4ED8]">Enterprise</span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-8 max-w-3xl text-center text-medium leading-8 text-[#767676]   sm:text-[20px] lg:text-[21px]"
        >
          Ran AI Launchpad helps startups design, build, and scale AI-powered
          <br />
          products with speed and clarity.
        </motion.p>

        <div className="flex justify-center px-2 sm:justify-center sm:px-0 mr-24  mt-3">
          {/* <button className="mt-8 rounded-full bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 lg:ml-16 xl:ml-24 2xl:ml-32 ">
            Book Free Consultation
          </button> */}
          {/* CTA — pill button + blurred neon glow (bottom only, follows pill curve) */}
          <div className="relative z-0 mt-4 inline-flex sm:mt-3 pb-2 sm:pb-2 ml-10 sm:ml-16 lg:ml-24">
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 z-0 rounded-[28px] -mt-2"
              style={{
                top: "23%",
                bottom: "5px",
                width: "calc(90% + 22px)",
                transform: "translateX(-50%)",
                background:
                  "linear-gradient(90deg,rgb(22, 248, 79) 10%,rgb(4, 54, 192) 50%,rgb(145, 7, 236) 30%)",
                filter: "blur(14px)",

                maskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 28%, black 52%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 28%, black 52%, black 100%)",
              }}
            />
            <a
              href="#services"
              className="relative z-10 flex items-center gap-2 rounded-full  border-0 px-5 py-3 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-sm"
              style={{
                background: "#0a0a0b",
                color: "#fff",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                boxShadow: "none",
              }}
            >
              Book Free Consultation
            </a>
          </div>
        </div>

        <motion.p
          className="mt-18 px-2 text-center text-2xl font-medium sm:text-3xl md:text-4xl"
          style={{ fontFamily: "Geist, sans-serif" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          We build intelligent systems that transform how
          <br /> businesses operate, scale, and grow.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        className="mt-15 max-w-[1050px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        style={{ fontFamily: "Geist, sans-serif" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            className="relative ml-4 px-4 py-8 pl-6 text-left sm:ml-8 sm:px-6 sm:pl-8 lg:ml-15"
            variants={itemVariants}
          >
            <span className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-slate-400"></span>
            <p className="text-5xl font-medium text-[#121ABD]">{item.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
      {/* Image */}
      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, type: "spring", bounce: 0.3 }}
      >
        <img
          src={start}
          alt="start"
          className="h-auto w-full max-w-5xl px-4 sm:max-w-6xl sm:px-6 lg:w-[76%] lg:max-w-none"
        />
      </motion.div>
    </motion.section>
  );
};

export default StartupLunch;
