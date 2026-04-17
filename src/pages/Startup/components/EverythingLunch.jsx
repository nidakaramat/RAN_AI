
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { Receipt, Lightbulb, Check, Users, Target, Zap } from "lucide-react";
import { useRef, useEffect } from "react";

const EverythingLunch = () => {
  const benefits = [
    {
      icon: <Zap className="text-[#121ABD]" />,
      value: "8 weeks",
      title: "Fast Time-to-Market",
      desc: "Launch 3x faster with our proven AI development framework and experienced team",
    },
    {
      icon: <Receipt className="text-[#121ABD]" />,
      value: "60% savings",
      title: "Cost Effective",
      desc: "Launch 3x faster with our proven AI development framework and experienced team",
    },
    {
      icon: <Target className="text-[#121ABD]" />,
      value: "95% accuracy",
      title: "Product-Market Fit",
      desc: "Launch 3x faster with our proven AI development framework and experienced team",
    },
    {
      icon: <Users className="text-[#121ABD]" />,
      value: "50+ experts",
      title: "Expert Team",
      desc: "Launch 3x faster with our proven AI development framework and experienced team",
    },
  ];

  const services = [
    {
      icon: <Lightbulb className="text-[#0066FF] " />,
      week: "WEEK 1-4",
      title: "Ideation & Validation",
      desc: "Refine your AI idea, validate market fit, and build your founding team.",
      items: [
        "Mentorship from AI experts",
        "Market research support",
        "Pitch training",
        "Networking events",
      ],
    },
    {
      icon: <Lightbulb className="text-[#0066FF]" />,
      week: "WEEK 5-12",
      title: "Development & MVP",
      desc: "Build your minimum viable product with technical and design support.",
      items: [
        "Technical infrastructure",
        "Engineering support",
        "Design resources",
        "Product strategy",
      ],
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInStagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  // Reusable scroll animation hook
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [inView, controls]);

    return [ref, controls];
  };

  // Refs for sections
  const [benefitRef, benefitControls] = useScrollAnimation();
  const [serviceRef, serviceControls] = useScrollAnimation();
  const [headerRef, headerControls] = useScrollAnimation();

  return (
    <div className="bg-[#F0F4FF] -mt-10">
      {/* Section 1: Intelligent AI Services */}
      <section className="py-16 sm:py-20 md:py-24 -mt-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            ref={serviceRef}
            initial="hidden"
            animate={serviceControls}
            variants={fadeInStagger}
            className="mb-12 text-center"
          >
            <motion.p
              className="mb-4 text-sm font-semibold text-[#1D4ED8] p-4 rounded-4xl shadow-lg border border-slate-200 inline-flex items-center"
              variants={fadeUp}
            >
              <BsStars className="w-4 h-4 mr-2" />
              Our services
            </motion.p>
            <motion.h2
              className="text-4xl font-medium text-slate-900 sm:text-5xl"
              style={{ fontFamily: "Geist, sans-serif" }}
              variants={fadeUp}
            >
              Intelligent <span className="text-[#1D4ED8]">AI Services</span>
              <br />
              Built for Scale
            </motion.h2>
          </motion.div>

          {/* Services Grid */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-8 xl:gap-5 justify-center">
            {services.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.7,
                      ease: "easeOut",
                      delay: index * 0.2,
                    },
                  },
                }}
                className="w-full rounded-[50px] border border-slate-200 bg-white p-6 shadow-sm transition-shadow  hover:shadow-md sm:p-8"
              >
                <div className="relative mb-5">
                  <div className="inline-block rounded-2xl bg-blue-50 p-3 text-2xl">
                    {item.icon}
                  </div>
                  <p className="absolute top-0 right-0 text-xs font-bold text-[#1D4ED8] tracking-wide px-2 py-1">
                    {item.week}
                  </p>
                </div>
                <motion.h3
                  className="mb-2 text-2xl font-medium text-slate-900"
                  style={{ fontFamily: "Geist, sans-serif" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="mb-5 text-slate-600 text-[16px]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  {item.desc}
                </motion.p>
                <ul className="space-y-3">
                  {item.items.map((listItem, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-2 text-slate-700"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2 + i * 0.1,
                      }}
                    >
                      <span className="text-[#1D4ED8] text-sm bg-blue-50 p-1 rounded-full">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {listItem}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 2: Everything You Need to Launch */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            ref={headerRef}
            initial="hidden"
            animate={headerControls}
            variants={fadeInStagger}
            className="mb-10 text-center"
          >
            <motion.p
              className="text-sm font-semibold text-[#1D4ED8] bg-white p-4 rounded-4xl shadow-lg border border-slate-200 inline-flex items-center"
              variants={fadeUp}
            >
              <BsStars className="w-4 h-4 mr-2" />
              Why Choose Us
            </motion.p>
            <motion.h2
              className="text-4xl font-medium text-slate-900 sm:text-5xl mt-10"
              style={{ fontFamily: "Geist, sans-serif" }}
              variants={fadeUp}
            >
              Everything You Need <br />
              to <span className="text-[#1D4ED8]">Launch</span>
            </motion.h2>
          </motion.div>

          {/* Benefits Grid */}
          <div
            ref={benefitRef}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={benefitControls}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="rounded-4xl border border-slate-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                  {item.icon}
                </div>
                <motion.p
                  className="mb-1 text-2xl font-semibold text-[#1D4ED8] mt-4"
                  style={{ fontFamily: "DM sans, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                >
                  {item.value}
                </motion.p>

                <motion.p
                  className="mb-3 font-medium text-slate-900 text-[18px]"
                  style={{ fontFamily: "DM sans, sans-serif" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.15 + index * 0.1,
                  }}
                >
                  {item.title}
                </motion.p>
                <p className="text-[14px] text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EverythingLunch;