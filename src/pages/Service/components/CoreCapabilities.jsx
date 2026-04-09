
import { motion } from "framer-motion";
import { FaRobot, FaDatabase, FaShieldAlt, FaCogs } from "react-icons/fa";
import img7 from "../../../assets/images/about/img7.png";

const data = [
  {
    icon: <FaRobot />,
    title: "Machine Learning",
    desc: "Advanced ML algorithms for predictive insights",
  },
  {
    icon: <FaDatabase />,
    title: "Big Data Processing",
    desc: "Handle massive datasets with ease",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    desc: "Bank-grade encryption and compliance",
  },
  {
    icon: <FaCogs />,
    title: "Process Automation",
    desc: "Streamline operations end-to-end",
  },
];

const CoreCapabilities = () => {
  return (
    <section className="w-full h-[60vh] relative overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[5%]">
        {/* Heading */}
        <motion.h2
          className="text-white text-[2.2vw] font-semibold mb-[3%]"
          style={{ fontFamily: "Geist, sans-serif" }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Core Capabilities
        </motion.h2>

        {/* Cards Row */}
        <div className="w-full flex justify-between gap-[1%]">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="w-[23%] backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl p-[2%] text-white hover:bg-white/20 transition duration-300"
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
            >
              {/* Icon */}
              <motion.div
                className="w-[2.5vw] h-[2.5vw] flex items-center justify-center bg-blue-600 rounded-lg mb-[2%] text-[1.2vw]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-[1.1vw] font-semibold mt-5"
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
                className="text-[16px] text-gray-300"
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