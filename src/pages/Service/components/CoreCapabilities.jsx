
import { motion } from "framer-motion";

import img7 from "../../../assets/images/about/img7.png";
import { Network } from 'lucide-react';


const data = [
  {
    icon: <Network />,
    title: "Machine Learning",
    desc: "Advanced ML algorithms for predictive insights",
  },
  {
    icon: <Network />,
    title: "Big Data Processing",
    desc: "Handle massive datasets with ease",
  },
  {
    icon: <Network />,
    title: "Enterprise Security",
    desc: "Bank-grade encryption and compliance",
  },
  {
    icon: <Network />,
    title: "Process Automation",
    desc: "Streamline operations end-to-end",
  },
];

const CoreCapabilities = () => {
  return (
    <section className="relative min-h-[min(100vh,720px)] w-full overflow-hidden py-12 sm:min-h-[60vh] sm:py-0 lg:h-[60vh] lg:min-h-0 lg:py-0 bg-[#F0F4FF]">
      {/* Background Image */}
      <motion.img
        src={img7}
        alt="bg"
        className="w-full h-full object-cover"
        initial={{ scale: 1.2 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2 }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 py-8 sm:px-[5%] sm:py-10 lg:gap-4 lg:py-0">
        {/* Heading */}
        <motion.h2
          className="mb-4 text-center text-2xl font-semibold text-white sm:mb-[3%] sm:text-3xl md:text-4xl lg:text-[2.2vw]"
          style={{ fontFamily: "Geist, sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Core Capabilities
        </motion.h2>

        {/* Cards Row */}
        <div className="flex w-full max-w-6xl flex-col flex-wrap justify-center gap-4 sm:flex-row sm:justify-between sm:gap-3 lg:max-w-none lg:gap-[1%] lg:flex-wrap lg:justify-center lg:items-center">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-full min-w-0 max-w-sm flex-1 rounded-[40px] border border-white/20 bg-white/10 p-4 text-white backdrop-blur-lg transition duration-300 hover:bg-white/20 sm:max-w-none sm:p-[2%] sm:flex-[1_1_45%] lg:w-[23%] lg:flex-none lg:max-w-none lg:p-[2%] "
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
            >
              {/* Icon */}
              <motion.div
                className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0066FF] text-base sm:mb-[2%] sm:h-12 sm:w-12 lg:mb-[2%] lg:h-[2.5vw] lg:w-[2.5vw] lg:min-h-[2.5rem] lg:min-w-[2.5rem] lg:text-[1.2vw]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="mt-3 text-lg font-semibold sm:mt-5 lg:text-[1.6vw] lg:leading-tight"
                style={{ fontFamily: "DM sans, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-[18px] text-gray-300 font-medium mt-3"
                style={{ fontFamily: "inter, sans-serif" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              >
                {item.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;