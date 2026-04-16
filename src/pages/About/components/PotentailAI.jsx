

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
    <div className="w-full bg-[#F0F4FF]">
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
        <motion.img
          src={img7}
          alt="hero"
          className="w-full h-full object-cover scale-[1.1]"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
        />

        <div className="absolute inset-0"></div>

        <div className="absolute inset-0 flex flex-col items-start gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-start md:gap-8 lg:gap-12 md:px-12 lg:px-26">
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
              className="text-2xl md:text-[40px] font-medium leading-10 lg:leading-12"
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
              className="mt-6 text-lg text-gray-200"
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
            className="shrink-0 self-start rounded-full border border-purple-400 bg-black px-6 py-4 text-white mt-10 md:mt-60 ml-0 md:ml-6 lg:ml-60"
            style={{ fontFamily: "DM sans, sans-serif" }}
          >
            Why Choose Us
          </motion.button>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-12 px-6 md:px-16 text-center mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-4xl lg:text-5xl font-semibold mb-8"
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
                className="relative mx-auto flex h-[293px] w-full max-w-[330px] items-center justify-center overflow-hidden rounded-2xl sm:w-[330px]"
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
          className="relative -mt-12 overflow-hidden rounded-2xl px-4 py-8 sm:-mt-16 sm:px-8 md:-mt-20 md:px-12 lg:px-26"
        >
          <motion.img
            src={img11}
            className="ml-0 h-auto w-full max-w-full object-cover sm:ml-4 md:max-h-[14rem] lg:max-h-none"
            // animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 md:px-10 lg:px-16">
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="ml-0 max-w-xl text-start text-sm font-medium leading-snug text-white sm:text-base md:text-2xl lg:text-[40px] lg:leading-12 xl:ml-20 2xl:ml-16"
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
              className="mr-0 shrink-0 rounded-full bg-white px-6 py-3 text-sm text-black md:mr-6 lg:mr-12 xl:mr-20"
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