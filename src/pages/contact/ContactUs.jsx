


import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/images/industries/contact.png";
import { BsStars } from "react-icons/bs";
import GetInTouch from "./GetInTouch";

const ContactUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-12 sm:py-16 md:py-20 bg-[#F0F4FF] w-full max-w-full overflow-hidden"
    >
      {/* Container */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-15 overflow-hidden">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-md text-blue-600 font-medium border bg-white border-gray-100 rounded-full px-4 py-2 shadow-lg">
            <BsStars className="w-3.5 h-3.5 text-[#155DFC]" />
            Our Contact
          </span>

          <h1
            className="mt-7 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Start Your
            <span className="block mt-2">
              AI <span className="text-[#1D4ED8]">Transformation</span>
            </span>
          </h1>
        </motion.div>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 140 }}
            className="w-full max-w-full sm:max-w-[94%] md:max-w-[88%] lg:max-w-[92%]"
          >
            <img
              src={img1}
              alt="Building the Future"
              className="h-auto w-full max-w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-10 max-w-3xl text-center leading-8 text-[#767676] text-base sm:text-lg lg:text-xl"
        >
          Schedule a consultation with our AI experts to explore how we can help
          transform your business with intelligent solutions.
        </motion.p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-full overflow-hidden">
        <GetInTouch />
      </div>
    </motion.section>
  );
};

export default ContactUs;