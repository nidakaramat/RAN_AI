import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/industries/img1.png";

const AISolution = () => {
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
            Our Services
          </span>
          <h1
            className="mt-7 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            AI Solutions Builts For
            <span className="block mt-2">
              Industry-Specific <span className="text-[#1D4ED8]">Needs</span>
            </span>
          </h1>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="w-full overflow-hidden  sm:w-[94%] md:w-[88%] lg:w-[92%]"
          >
            <img
              src={img1}
              alt="Building the Future"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl text-center text-medium leading-8 text-[#767676] sm:text-[20px] lg:text-[21px]"
        >
          Ran AI designs and deploys AI systems tailored to the workflows,
          compliance requirements, and operational challenges of different
          industries.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AISolution;
