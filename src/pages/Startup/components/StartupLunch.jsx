import React from "react";
import { motion } from "framer-motion";
import start from "../../../assets/images/industries/start.png";

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
      className=" py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-[#1D4ED8] shadow-sm">
            Startup Launchpad
          </span>
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
          className="mx-auto mt-8 max-w-3xl text-center text-medium leading-8 text-[#767676] sm:text-[20px] lg:text-[21px]"
        >
          Ran AI Launchpad helps startups design, build, and scale AI-powered
          <br />
          products with speed and clarity.
        </motion.p>

        <div>
          <button className="rounded-full bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:ring-offset-2 mt-8 ml-110">
            Book Free Consultation
          </button>
        </div>

        <motion.p
          className="text-center text-medium text-4xl mt-8 "
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
        className="mt-12 max-w-[1050px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
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
            className="relative px-6 py-8 pl-8 text-left ml-12"
            variants={itemVariants}
          >
            <span className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-slate-400"></span>
            <p className="text-5xl font-medium text-[#121ABD]">{item.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-500">{item.label}</p>
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
        <img src={start} alt="start" className="h-[40%] w-[76%]" />
      </motion.div>
    </motion.section>
  );
};

export default StartupLunch;
