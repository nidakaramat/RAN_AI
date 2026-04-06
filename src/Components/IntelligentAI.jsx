
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import img1 from "../assets/images/intelligentAI/SocialMedia1.png";
import img2 from "../assets/images/intelligentAI/SocialMedia2.png";
import img3 from "../assets/images/intelligentAI/SocialMedia3.png";
import img4 from "../assets/images/intelligentAI/SocialMedia4.png";
import { BsStars } from "react-icons/bs";
import { ArrowRight } from "lucide-react";
export default function IntelligentAI() {
  const services = [
    {
      id: 1,
      title: "Custom AI Development",
      description:
        "Develop AI systems tailored to your business logic, data, and operations. Every solution is designed for performance, security, and scale.",
      image: img1,
    },
    {
      id: 2,
      title: "AI Automation",
      description:
        "Automate repetitive workflows and business processes using AI-driven systems that reduce costs, increase speed, and remove operational bottlenecks.",
      image: img2,
    },
    {
      id: 3,
      title: "Conversational AI Solutions",
      description:
        "We design conversational AI systems for chat and voice interactions that integrate directly into your customer and internal workflows.",
      image: img3,
    },
    {
      id: 4,
      title: "Data & AI Analytics",
      description:
        "Transform raw data into actionable insights using AI-powered analytics, predictive intelligence, and real-time reporting.",
      image: img4,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-20 text-slate-900"
    >
      {/* Background blurs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={container}
        className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          variants={item}
          className="mb-10 sm:mb-12 md:mb-16 flex flex-col items-center gap-3 sm:gap-4 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="inline-flex items-center rounded-full bg-white border border-gray-200 px-5 py-2 text-xs font-semibold tracking-wide text-blue-600 shadow-lg gap-1"
          >
            <BsStars className="w-3 h-3" /> {/* icon on the left */}
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-slate-900"
          >
            Intelligent <span className="text-blue-600">AI Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="max-w-2xl text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-slate-900"
          >
            Built for Scale
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          className="grid gap-5 sm:gap-6 md:grid-cols-2 md:gap-8 lg:gap-10"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.7,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: false, margin: "-50px" }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-xl"
              whileHover={{
                rotateY: 8,
                rotateX: -5,
                scale: 1.05,
                boxShadow: "0 30px 60px rgba(37, 99, 235, 0.3)",
              }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-top transition-transform duration-300"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Blue divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
                viewport={{ once: false }}
                className="h-3 w-full bg-gradient-to-r from-[#4D87DE] to-[#2A4978] origin-left"
              />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 + 0.3, duration: 0.5 }}
                viewport={{ once: false }}
                className="px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6"
              >
                <motion.h3
                  className="mb-2 sm:mb-3 text-lg sm:text-xl font-semibold text-[#080D42]"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="flex justify-center">
        <button className="mt-8 sm:mt-10 md:mt-12 inline-flex items-center rounded-full bg-[#100202] px-6 sm:px-8 py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_10px_25px_rgba(44,93,238,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(66,102,255,0.45)] gap-2">
          See More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}