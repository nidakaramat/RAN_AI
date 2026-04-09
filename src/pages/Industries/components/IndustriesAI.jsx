

import React from "react";
import { motion } from "framer-motion";
import img1 from "../../../assets/images/industries/img2.png";
import img2 from "../../../assets/images/industries/img3.png";
import img3 from "../../../assets/images/industries/img7.png";
import img4 from "../../../assets/images/industries/img4.png";
import img5 from "../../../assets/images/industries/img5.png";
import img6 from "../../../assets/images/industries/img6.png";
import { CircleCheckBig } from "lucide-react";

const industries = [
  {
    tag: "Healthcare",
    title: "AI for Healthcare Operations & Intelligence",
    desc: "Ran AI builds AI solutions that support healthcare providers, clinics, and health-tech companies in automating operations and improving decision-making.",
    des: "Our systems are designed to work with healthcare data workflows while maintaining accuracy, reliability, and compliance awareness.",
    points: [
      "Patient support automation",
      "Medical data processing",
      "Operational workflow automation",
      "Predictive analytics for healthcare operations",
    ],
    img: img1,
  },
  {
    tag: "Finance & Banking",
    title: "AI for Financial Systems & Risk Intelligence",
    desc: "We develop AI systems for financial institutions that enhance efficiency, risk assessment, and data-driven decision-making.",
    des: "Our solutions integrate with financial platforms and help automate complex workflows while maintaining data integrity.",
    points: [
      "Transaction analysis",
      "Risk assessment",
      "Fraud detection Support",
      "Financial analytics",
    ],
    img: img2,
  },
  {
    tag: "E-commerce",
    title: "AI for Retail & E-commerce Growth",
    desc: "Ran AI helps retail and e-commerce businesses leverage AI to automate operations, analyze customer behavior, and improve efficiency across digital channels.",
    des: "Our systems support high-volume environments and integrate directly into existing commerce platforms.",
    points: [
      "Customer interaction automation",
      "Demand forecasting",
      "Inventory intelligence",
      "Sales and performance analytics",
    ],
    img: img3,
  },
  {
    tag: "Education",
    title: "AI for Manufacturing Operations & Optimization",
    desc: "We build AI-driven systems that support manufacturing operations by improving visibility, efficiency, and predictive capabilities across production workflows.",
    des: "Our AI solutions integrate with operational systems to deliver actionable insights and automation.",
    points: [
      "Predictive maintenance systems",
      "Production workflow optimization",
      "Quality monitoring",
      "Operational analytics",
    ],
    img: img4,
  },
  {
    tag: "Logistics",
    title: "AI for Telecom & Service Operations",
    desc: "Ran AI develops AI systems that help telecom and service-based organizations manage large-scale operations and customer interactions more efficiently.",
    des: "Our solutions are built to handle complex workflows and high data volumes.",
    points: [
      "Customer support automation",
      "Network and service analytics",
      "Operational intelligence",
      "Workflow automation",
    ],
    img: img5,
  },
  {
    tag: "Marketing",
    title: "AI for Startups & SaaS Platforms",
    desc: "We support startups and SaaS companies in embedding AI into their products and internal operations from early-stage development to scale.",
    des: "Ran AI works closely with founders and teams to build flexible AI systems that evolve with the business.",
    points: [
      "AI-powered product features",
      "Internal process automation",
      "Data-driven product insights",
      "Scalable AI architecture",
    ],
    img: img6,
  },
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const IndustriesAI = () => {
  return (
    <section className="w-full py-[2%] mb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-center text-[24px] lg:text-[32px] font-semibold mb-[3%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={textVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our <span className="text-blue-600">Industries</span>
        </motion.h2>

        {/* Sections */}
        <div className="flex flex-col gap-[2%] space-y-20">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-start gap-[5%] ${
                index % 2 !== 0 ? "lg:flex-row-reverse " : "ml-10 "
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.9, type: "spring", bounce: 0.25 }}
              variants={{
                hidden: { opacity: 0, x: index % 2 !== 0 ? 50 : -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* Text */}
              <motion.div
                className="w-full lg:w-[52%]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
              >
                <motion.span
                  className="inline-block text-[#121ABD] bg-white shadow-xl border border-blue-100 px-3 py-1.5 rounded-full text-md text-medium mb-2 w-fit"
                  variants={textVariants}
                  transition={{ duration: 0.5 }}
                >
                  {item.tag}
                </motion.span>

                <motion.h3
                  className="text-xl lg:text-4xl font-semibold mb-2 mt-3"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  variants={textVariants}
                  transition={{ duration: 0.6 }}
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 text-lg mb-2 mt-6"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  variants={textVariants}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {item.desc}
                </motion.p>

                <motion.p
                  className="text-gray-600 text-lg mb-3 mt-4"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                  variants={textVariants}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {item.des}
                </motion.p>

                <motion.ul
                  className="space-y-1 mt-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                  }}
                >
                  {item.points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-[17px] text-black"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                      variants={textVariants}
                      transition={{ duration: 0.5 }}
                    >
                      <span>
                        <CircleCheckBig className="h-4 w-4 mt-1 text-[#121ABD]" />
                      </span>
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* Image */}
              <motion.div
                className="w-full lg:w-[45%] flex items-center justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={imageVariants}
                transition={{ duration: 0.8, type: "spring", bounce: 0.25 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[95%] h-auto object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesAI;