

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaBolt, FaCogs, FaChartBar, FaComments } from "react-icons/fa";
import { Check, Lightbulb, MessageSquare, Zap } from "lucide-react";
import { BsStars } from "react-icons/bs";

const services = [
  {
    icon: <Lightbulb className="h-6" />,
    title: "AI Strategy & Consulting",
    subtitle: "TRANSFORM VISION INTO ACTION",
    description:
      "Define your AI roadmap, align with goals, and drive measurable business outcomes.",
    points: [
      "AI readiness assessment",
      "Business use case identification",
      "AI roadmap planning",
      "Data strategy alignment",
      "ROI-driven implementation",
    ],
    color: "text-blue-500",
    checkColor: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <FaCode className="h-4 w-5" />,
    title: "Custom AI Development",
    subtitle: "BUILT FOR YOUR DATA",
    description:
      "We design and develop AI solutions tailored to your organization's needs, data, and infrastructure.",
    points: [
      "AI model development",
      "Natural language processing",
      "Computer vision systems",
      "Recommendation systems",
      "Internal AI tools",
    ],
    color: "text-indigo-500",
    checkColor: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: <Zap />,
    title: "Intelligent Automation",
    subtitle: "EFFICIENCY AMPLIFIED",
    description:
      "Automate workflows and operations using AI systems that run continuously and scale effortlessly.",
    points: [
      "Workflow automation",
      "Process optimization",
      "Task automation systems",
      "RPA implementations",
      "Efficiency improvements",
    ],
    color: "text-orange-500",
    checkColor: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: <FaCogs className="h-6 w-6" />,
    title: "Enterprise Integration",
    subtitle: "SEAMLESS CONNECTIVITY",
    description:
      "Seamlessly integrate AI into your existing systems with secure, scalable infrastructure.",
    points: [
      "System integration",
      "API connectivity",
      "Secure data pipelines",
      "Infrastructure alignment",
      "Scalable deployment",
    ],
    color: "text-blue-500",
    checkColor: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: <FaChartBar className="h-5 w-5" />,
    title: "Predictive Analytics",
    subtitle: "FUTURE INSIGHTS TODAY",
    description:
      "Turn raw data into foresight with models that anticipate trends and power smarter decisions.",
    points: [
      "Data forecasting",
      "Trend analysis",
      "Business intelligence",
      "Predictive modeling",
      "Decision support systems",
    ],
    color: "text-indigo-500",
    checkColor: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: <MessageSquare />,
    title: "Conversational AI",
    subtitle: "HUMAN-LIKE INTERACTIONS",
    description:
      "We build conversational AI systems for chat and voice interactions across multiple business use cases.",
    points: [
      "AI chatbots",
      "Voice assistants",
      "Multi-channel support",
      "Customer automation",
      "24/7 interactions",
    ],
    color: "text-orange-500",
    checkColor: "text-orange-500",
    bg: "bg-orange-50",
  },
];

const Services = () => {
  return (
    <section className="w-full overflow-x-hidden bg-[#f8fafc] py-8 sm:py-[4%] md:py-[5%]">
      <div className="mx-auto w-full max-w-7xl px-3 text-center sm:w-[92%] sm:px-4 md:w-[90%] lg:px-6">
        <motion.span
          className="inline-flex items-center text-blue-600 bg-white shadow-lg border border-blue-100 px-3 py-1.5 rounded-full text-sm"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <BsStars className="h-4 w-4 mr-1" />
          Our Services
        </motion.span>

        <motion.h2
          className="mt-4 text-2xl font-semibold sm:mt-[2%] sm:text-3xl md:text-4xl lg:text-[2.5vw] lg:leading-tight"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Intelligent <span className="text-blue-600">AI Services</span>
          <br />
          Built for Scale
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-5 px-2 sm:mt-[4%] sm:grid-cols-2 sm:gap-6 sm:px-4 md:gap-[2%] md:px-[6%] lg:grid-cols-3 lg:px-[8%]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="ml-0 rounded-4xl border border-gray-300 bg-white p-5 text-left shadow-sm transition duration-300 hover:shadow-md sm:ml-2 sm:p-[5%] md:ml-4 md:p-[6%]"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <motion.div
                className={`mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg sm:mb-[4%] sm:h-12 sm:w-12 md:text-xl lg:mb-[4%] lg:h-[3vw] lg:w-[3vw] lg:min-h-[2.75rem] lg:min-w-[2.75rem] lg:text-[1.2vw] ${service.bg} ${service.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                className="mb-3 mt-4 text-xl font-medium leading-snug sm:mb-[3%] sm:mt-5 sm:text-2xl md:text-[26px] lg:mt-5 lg:text-[29px]"
                style={{ fontFamily: "Geist, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className={`text-[15px] font-semibold mb-[3%] mt-5 ${service.color}`}
                style={{ fontFamily: "Geist, sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                {service.subtitle}
              </motion.p>

              <motion.p
                className="text-[15px] text-gray-600 mb-[3%] mt-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
              >
                {service.description}
              </motion.p>

              <ul className="space-y-[1%] mt-8">
                {service.points.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-600 sm:gap-[2%] sm:text-base lg:text-[0.85vw] lg:leading-snug xl:min-h-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.7 + i * 0.15, duration: 0.6 }}
                  >
                    <span className="bg-gray-100 rounded-full p-1">
                      <Check
                        className={`${service.checkColor} h-3 w-3 shrink-0`}
                      />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;