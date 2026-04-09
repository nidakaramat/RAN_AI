import React from "react";
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
      <img src={img7} alt="bg" className="w-full h-full object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[5%]">
        {/* Heading */}
        <h2
          className="text-white text-[2.2vw] font-semibold mb-[3%]"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          Core Capabilities
        </h2>

        {/* Cards Row */}
        <div className="w-full flex justify-between gap-[2%]">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[23%] backdrop-blur-lg bg-white/10 border border-white/20 rounded-4xl p-[2%] text-white hover:bg-white/20 transition duration-300"
            >
              {/* Icon */}
              <div className="w-[2.5vw] h-[2.5vw] flex items-center justify-center bg-blue-600 rounded-lg mb-[2%] text-[1.2vw]">
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="text-[1.1vw] font-semibold mt-5"
                style={{ fontFamily: "DM sans, sans-serif" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
