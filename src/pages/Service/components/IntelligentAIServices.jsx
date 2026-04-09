

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
    <section className="w-full py-[5%] bg-[#f8fafc]">
      <div className="w-[90%] mx-auto text-center">
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
          className="text-[2.5vw] font-semibold mt-[2%]"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Intelligent <span className="text-blue-600">AI Services</span>
          <br />
          Built for Scale
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2%] mt-[4%] px-[8%]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-300 rounded-4xl p-[6%] text-left shadow-sm hover:shadow-md transition duration-300 ml-4"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
            >
              <motion.div
                className={`w-[3vw] h-[3vw] flex items-center justify-center rounded-xl ${service.bg} ${service.color} mb-[4%] text-[1.2vw]`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <motion.h3
                className="text-[29px] font-medium leading-8 mb-[3%] mt-5"
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
                    className="text-[0.85vw] text-gray-600 flex items-start gap-[2%]"
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