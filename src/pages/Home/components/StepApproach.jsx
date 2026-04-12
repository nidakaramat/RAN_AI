

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../../../assets/images/4Step/img1.png";
import img2 from "../../../assets/images/4Step/img2.png";
import img3 from "../../../assets/images/4Step/img3.png";
import img4 from "../../../assets/images/4Step/img4.png";
import { BsStars } from "react-icons/bs";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Discovery & Prioritization",
    timeline: "Timeline: 1-2 weeks",
    description:
      "We identify the highest-impact AI opportunities and align them directly with your business goals and success metrics.",
    bullets: [
      "Stakeholder interviews ",
      "Data readiness and feasibility assessment",
      "ROI and impact modeling",
      "Prioritized AI roadmap",
    ],
    image: img1,
  },
  {
    id: 2,
    number: "02",
    title: "AI Architecture & Design",
    timeline: "Timeline: 2-3 weeks",
    description:
      "We design secure, scalable AI systems that integrate seamlessly with your existing infrastructure and workflows.",
    bullets: [
      "End-to-end solution architecture",
      "Integration and workflow mapping",
      "Security and compliance review",
      "Prototype and solution design",
    ],
    image: img2,
  },
  {
    id: 3,
    number: "03",
    title: "Deployment & Scaling",
    timeline: "Timeline: 3-4 weeks",
    description:
      "We move AI from concept to production through rapid deployment, enabling adoption, performance, and reliability.",
    bullets: [
      "Phased production rollout",
      "User onboarding and enablement",
      "Performance monitoring and optimization",
      "Continuous feedback loops",
    ],
    image: img3,
  },
  {
    id: 4,
    number: "04",
    title: "Optimization & Growth",
    timeline: "Timeline: Ongoing",
    description:
      "We continuously refine models, expand capabilities, and track real business impact over time.",
    bullets: [
      "AI testing and experimentation",
      "Model and workflow refinement",
      "Feature expansion and scaling",
      "ROI and impact tracking",
    ],
    image: img4,
  },
];

export default function FourStepApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const stepVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 80, damping: 25, duration: 0.8 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-20 bg-white text-slate-900"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        <div className="mx-auto w-full max-w-6xl px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            variants={headerVariants}
            className="mb-8 sm:mb-10 md:mb-12 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              <p className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-3 sm:px-4 py-2 text-[14px] font-semibold shadow-md text-[#4B5162]" style={{ fontFamily: "inter, sans-serif" }}>
                <BsStars className="text-[#121ABD] text-sm" />
                Our Methodology
              </p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: false }}
              className="mt-6 sm:mt-8 text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-medium"
              style={{
                fontFamily: "Geist, sans-serif",
                animation: "headingSlide 0.8s ease 0.3s both",
              }}
            >
              A Proven 4-Step Approach
              <br />
              to{" "}
              <motion.span
                className="text-[#123ABD] inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Impactful AI
              </motion.span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
              className="mt-3 mx-auto max-w-2xl text-sm sm:text-base md:text-base lg:text-[22px] text-[#767676]"
              style={{
                fontFamily: "inter, sans-serif",
                animation: "headingSlide 0.8s ease 0.3s both",
              }}
            >
              A structured methodology designed to deliver measurable
              <br />
              results in weeks — not years.
            </motion.p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {steps.map((step, idx) => {
              const even = idx % 2 === 1;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: even ? 100 : -100, rotateX: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.2,
                    type: "spring",
                    stiffness: 70,
                  }}
                  viewport={{ once: false, margin: "-50px" }}
                  className={`flex flex-col gap-6 sm:gap-7 md:gap-8 rounded-3xl p-5 sm:p-6 md:p-8 md:flex-row ${even ? "md:flex-row-reverse" : ""}`}
                  style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="flex flex-1 flex-col justify-center"
                    whileHover={{ rotateY: even ? -8 : 8, rotateX: -3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="flex items-center gap-2 sm:gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 + 0.1, duration: 0.5 }}
                      viewport={{ once: false }}
                    >
                      <span
                        className="text-sm sm:text-base md:text-lg font-semibold text-[#121ABD]"
                        style={{ fontFamily: "Geist, sans-serif" }}
                      >
                        {step.number}
                      </span>
                      <motion.span
                        className="h-[2px] bg-[#123ABD] w-5"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: idx * 0.2 + 0.2, duration: 0.5 }}
                        viewport={{ once: false }}
                        style={{ originX: 0 }}
                      />
                      <h3
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900"
                        style={{ fontFamily: "Geist, sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.2 + 0.25, duration: 0.5 }}
                      viewport={{ once: false }}
                      className="mt-1 ml-6 text-xs font-medium text-slate-600 sm:ml-10 sm:text-sm md:ml-12 lg:ml-16"
                      style={{ fontFamily: "inter, sans-serif" }}
                    >
                      {step.timeline}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.2 + 0.3, duration: 0.5 }}
                      viewport={{ once: false }}
                      className="mt-8 text-sm sm:text-[17px] text-[#767676]"
                      style={{ fontFamily: "inter, sans-serif" }}
                    >
                      {step.description}
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.2 + 0.35, duration: 0.5 }}
                      viewport={{ once: false }}
                      className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600"
                    >
                      {step.bullets.map((bullet, btnIdx) => (
                        <motion.li
                          key={bullet}
                          className="flex gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: idx * 0.2 + 0.4 + btnIdx * 0.08,
                            duration: 0.4,
                          }}
                          viewport={{ once: false }}
                        >
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#767676]" />
                          <span
                            className="text-[#767676]"
                            style={{ fontFamily: "inter, sans-serif" }}
                          >
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    className="flex h-40 w-full flex-1 items-center justify-center rounded-2xl sm:h-48 md:h-56 lg:h-64"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      rotateY: even ? -20 : 20,
                    }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.2 + 0.1,
                      type: "spring",
                      stiffness: 70,
                    }}
                    viewport={{ once: false }}
                    whileHover={{
                      rotateY: even ? 8 : -8,
                      rotateX: 2,
                      scale: 1.05,
                      // boxShadow: "0 30px 60px rgba(18, 58, 189, 0.25)"
                    }}
                    style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                  >
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full object-contain rounded-2xl"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}