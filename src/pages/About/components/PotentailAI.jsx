

import React from "react";
import { motion } from "framer-motion";

import img6 from "../../../assets/images/about/img6.png";
import img7 from "../../../assets/images/about/img7.png";
import img8 from "../../../assets/images/about/img8.png";
import img9 from "../../../assets/images/about/img9.png";
import img10 from "../../../assets/images/about/img10.png";
import img11 from "../../../assets/images/about/img11.png";

const cards = [
  { id: 1, title: "AI in Customer Operations", image: img8 },
  { id: 2, title: "AI for Decision Intelligence", image: img9 },
  { id: 3, title: "AI-Powered Workflow Automation", image: img10 },
];

const PotentailAI = () => {
  return (
    <div className="w-full bg-white">
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
        <motion.img
          src={img7}
          alt="hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.3 } },
            }}
            className="max-w-xl text-white"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-[40px] font-medium leading-snug"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Unlock the Full Potential of AI with Intelligent Systems Built for
              Real Impact
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              className="mt-4 text-lg text-gray-200"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              Discover the Power of Intelligent AI Systems with Advanced
              Automation, Data-Driven Insights, Scalable Solutions, and a Focus
              on Delivering Real Business Results.
            </motion.p>
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 25px rgba(168,85,247,0.7)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-5 py-2 rounded-full border border-purple-400 text-white bg-black ml-80 mt-40"
            style={{ fontFamily: "DM sans, sans-serif" }}
          >
            Why Choose Us
          </motion.button>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12 px-6 md:px-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-3xl font-semibold mb-8"
          style={{ fontFamily: "DM sans, sans-serif" }}
        >
          Explore How AI Transforms
          <br />
          Modern Businesses
        </motion.h2>

        <div className="py-12 px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl justify-center mx-auto rounded-2xl p-2">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 60, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                className="relative rounded-2xl overflow-hidden flex items-center justify-center h-[293px] w-[330px]"
              >
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="absolute inset-0 flex items-end p-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-white text-[22px] md:text-[26px] font-medium text-start mb-8 leading-8"
                    style={{ fontFamily: "DM sans, sans-serif" }}
                  >
                    {card.title}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BANNER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative -mt-20 rounded-2xl overflow-hidden py-10 px-20"
        >
          <motion.img
            src={img11}
            className="w-auto h-59 object-cover ml-4"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="absolute inset-0 flex items-center justify-between">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="text-white text-sm md:text-[30px] ml-40 font-medium text-start leading-10"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Contact us if you have
              <br />
              <span className="mr-8"> additional question.</span>
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="bg-white text-black px-6 py-3 rounded-full text-sm mr-50"
            >
              Let's get in touch
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default PotentailAI;