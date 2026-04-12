
import React from "react";
import { motion } from "framer-motion";
import lizaImg from "../../../assets/images/AIVoice/liza.png";
import diegoImg from "../../../assets/images/AIVoice/diego.png";
import ethanImg from "../../../assets/images/AIVoice/ethan.png";
import aminaImg from "../../../assets/images/AIVoice/amina.png";
import { BsStars } from "react-icons/bs";

const AIVoice = () => {
  const agents = [
    { name: "Liza", role: "AI Employee", image: lizaImg },
    { name: "Diego", role: "AI Employee", image: diegoImg },
    { name: "Ethan", role: "AI Employee", image: ethanImg },
    { name: "Amina", role: "AI Employee", image: aminaImg },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, margin: "-100px" }}
      className="relative bg-white py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
        >
          <p className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-3 sm:px-4 py-1.5 sm:py-2 text-[14px] font-semibold shadow-xl text-[#4B5162]" style={{ fontFamily: "inter, sans-serif" }}>
            <BsStars className="text-[#121ABD] text-sm" />
            Voice AI Redirect
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 sm:mt-7 md:mt-10 font-medium tracking-tight text-slate-900"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Looking for{" "}
          <motion.span
            className="text-[#123ABD] inline-block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            AI Voice Agents?
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
          className="mx-auto mt-3 sm:mt-4 md:mt-7 max-w-2xl text-xs sm:text-sm md:text-base lg:text-[20px] text-[#767676] font-medium"
          style={{ fontFamily: "inter, sans-serif" }}
        >
          Explore our dedicated AI voice platform built for
          <br /> production-grade deployments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-7 sm:mt-8 md:mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:gap-5 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, scale: 0.7, rotateY: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false }}
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                boxShadow: "0 20px 40px rgba(18, 58, 189, 0.25)",
              }}
              className="relative overflow-hidden rounded-2xl cursor-pointer min-w-0"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.img
                src={agent.image}
                alt={agent.name}
                className="h-56 sm:h-64 md:h-72 lg:h-80 w-full object-cover object-center block"
                whileHover={{
                  scale: 1.1,
                }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 to-transparent"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                viewport={{ once: false }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: false }}
          className="mt-7 sm:mt-8 md:mt-10 lg:mt-10"
        >
          <motion.a
            href="http://ranvoice.com/"
             target="_blank"
             rel="noopener noreferrer"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 15px 35px rgba(16, 2, 2, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
            }}
            className="inline-flex items-center rounded-full bg-[#100202] px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg transition"
          >
            Visit RanVoice Website
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AIVoice; 