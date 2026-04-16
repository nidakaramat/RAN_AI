

import React from "react";
import { motion } from "framer-motion";

const LetConnect = () => {
  return (
    <div>
      <section className="overflow-x-hidden px-4 py-16 sm:px-6 md:px-12 lg:px-16 bg-[#F0F4FF] ">
        <motion.div
          className="flex flex-col items-start gap-8 text-center md:flex-row md:items-center    md:gap-12 md:text-left lg:gap-20 xl:gap-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {/* Left Side */}
          <motion.div
            className="mt-0 w-full min-w-0 text-medium md:mt-0 md:w-1/4 xl:-mt-50 2xl:-mt-48 ml-20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500">(Let's Connect)</p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="w-full min-w-0 md:w-3/4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.h2
              className="text-2xl md:text-4xl font-semibold max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              Let's work together to craft exceptional and unforgettable
              experiences.
            </motion.h2>

            <motion.p
              className="text-[#767676] mt-4 max-w-xl text-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              It's not just about creating something good; it's about designing,
              innovating, and collaborating to forge remarkable and unparalleled
              experiences.
            </motion.p>

            <motion.button
              className="mt-6 px-7 py-2 rounded-full bg-black text-white"
              style={{ fontFamily: "DM sans, sans-serif" }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(0,0,0,0.4)",
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default LetConnect;