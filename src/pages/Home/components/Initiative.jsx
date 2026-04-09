
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BsStars } from "react-icons/bs";

const cards = [
  {
    id: 1,
    title: "Poor Return on Investment",
    subtitle: "73% of AI projects fail to deliver ROI",
    description:
      "AI initiatives often launch without clear success metrics or alignment to business outcomes, resulting in high spend and low impact.",
    number: "01",
  },
  {
    id: 2,
    title: "Misaligned AI Tools",
    subtitle: "73% of AI projects fail to deliver ROI",
    description:
      "Many AI solutions are implemented in isolation and fail to integrate with core workflows, decision systems, or performance indicators.",
    number: "02",
  },
  {
    id: 3,
    title: "Slow Time to Production",
    subtitle: "73% of AI projects fail to deliver ROI",
    description:
      "Extended development cycles, experimentation overhead, and technical debt delay AI from reaching real-world usage.",
    number: "03",
  },
  {
    id: 4,
    title: "Low User Adoption",
    subtitle: "73% of AI projects fail to deliver ROI",
    description:
      "Overly complex interfaces and unclear value propositions lead to resistance from operational teams and end users.",
    number: "04",
  },
];

const Initiative = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.85, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.7 },
    },
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.3, rotateZ: -90 },
    visible: { opacity: 0.3, scale: 1, rotateZ: 0, transition: { duration: 0.8, type: "spring" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2 } },
  };

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20 text-slate-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        variants={container}
        className="mx-auto w-full max-w-5xl px-3 sm:px-4 md:px-6 lg:px-8"
      >
        <motion.div
          variants={titleVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold leading-tight"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Why Most{" "}
            <motion.span
              className="text-[#121ABD] inline-block"
              style={{
                fontFamily: "Geist, sans-serif",
                animation: "headingSlide 0.8s ease 0.3s both",
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              AI Initiatives
            </motion.span>{" "}
            Fail
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              to Deliver Value
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="mt-3 sm:mt-4 mx-auto max-w-3xl text-sm sm:text-base md:text-base lg:text-lg text-slate-600"
          >
            Despite widespread adoption, most AI initiatives fail to generate
            measurable business impact. Organizations commonly face the
            following challenges:
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={container}
          className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6"
        >
          {cards.map((card, index) => {
            const isLeftTop = index === 0 || index === 1;
            const isRightTop = index === 1 || index === 2;

            return (
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: false, margin: "-30px" }}
                whileHover={{
                  rotateY: 8,
                  rotateX: -5,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)",
                }}
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                className="relative overflow-hidden rounded-[40px] border border-blue-200 bg-blue-50 shadow-sm transition h-50 p-4 sm:p-5 md:p-6 flex flex-col justify-between"
              >
                {/* TOP CONTENT */}
                <motion.div
                  className={`${isLeftTop ? "text-left" : "text-right"}`}
                  initial={{ opacity: 0, x: isLeftTop ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 + 0.1, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <motion.h3
                    className="text-sm sm:text-base md:text-lg font-semibold text-slate-900"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                    whileHover={{ x: isLeftTop ? 5 : -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className=" text-xs sm:text-xs md:text-sm font-medium text-[#4B5162] "
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.12 + 0.15, duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    {card.subtitle}
                  </motion.p>
                </motion.div>

                {/* DESCRIPTION */}
                <motion.div
                  className={`absolute bottom-6 ${isLeftTop ? "right-6 text-left" : "left-6 text-left"} max-w-[220px]`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.12 + 0.2, duration: 0.5 }}
                  viewport={{ once: false }}
                >
                  <p className="text-xs sm:text-sm md:text-sm leading-5 text-slate-600 ">
                    {card.description}
                  </p>
                </motion.div>

                {/* NUMBER */}
                <motion.div
                  className={`pointer-events-none absolute -bottom-11 ${isLeftTop ? "left-0" : "right-0"}`}
                  initial={{ opacity: 0, scale: 0.3, rotateZ: -90 }}
                  whileInView={{ opacity: 0.3, scale: 1, rotateZ: 0 }}
                  transition={{
                    delay: index * 0.12 + 0.25,
                    duration: 0.8,
                    type: "spring",
                  }}
                  viewport={{ once: false }}
                >
                  <span
                    className="text-[190px] leading-none font-light bg-gradient-to-t from-[#e8e8f1] to-blue-900 bg-clip-text text-transparent "
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {card.number}
                  </span>
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          viewport={{ once: false }}
          className="mt-8 sm:mt-10 md:mt-10 flex justify-center"
        >
          <motion.div
            className="rounded-full border border-slate-200 bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-center text-xs sm:text-sm font-semibold text-[#4B5162] shadow-lg transition"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
            }}
            animate={{ y: [0, -3, 0] }}
            transition={{
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
          >
            Ran AI turns potential into performance.
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Initiative;