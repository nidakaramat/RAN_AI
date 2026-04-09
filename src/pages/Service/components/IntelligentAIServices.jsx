// import React from "react";
// import {
//   FaLightbulb,
//   FaCode,
//   FaBolt,
//   FaCogs,
//   FaChartBar,
//   FaComments,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaLightbulb />,
//     title: "AI Strategy & Consulting",
//     subtitle: "TRANSFORM VISION INTO ACTION",
//     description:
//       "Define your AI roadmap, align with goals, and drive measurable business outcomes.",

//     points: [
//       "AI readiness assessment",
//       "Business use case identification",
//       "AI roadmap planning",
//       "Data strategy alignment",
//       "ROI-driven implementation",
//     ],
//     color: "text-blue-500",
//     bg: "bg-blue-50",
//   },
//   {
//     icon: <FaCode />,
//     title: "Custom AI Development",
//     subtitle: "BUILT FOR YOUR DATA",
//     description:
//       "We design and develop AI solutions tailored to your organization’s needs, data, and infrastructure.",
//     points: [
//       "AI model development",
//       "Natural language processing",
//       "Computer vision systems",
//       "Recommendation systems",
//       "Internal AI tools",
//     ],
//     color: "text-indigo-500",
//     bg: "bg-indigo-50",
//   },
//   {
//     icon: <FaBolt />,
//     title: "Intelligent Automation",
//     subtitle: "EFFICIENCY AMPLIFIED",
//     description:
//       "Automate workflows and operations using AI systems that run continuously and scale effortlessly.",
//     points: [
//       "Workflow automation",
//       "Process optimization",
//       "Task automation systems",
//       "RPA implementations",
//       "Efficiency improvements",
//     ],
//     color: "text-orange-500",
//     bg: "bg-orange-50",
//   },
//   {
//     icon: <FaCogs />,
//     title: "Enterprise Integration",
//     subtitle: "SEAMLESS CONNECTIVITY",
//     description:
//       "Seamlessly integrate AI into your existing systems with secure, scalable infrastructure.",
//     points: [
//       "System integration",
//       "API connectivity",
//       "Secure data pipelines",
//       "Infrastructure alignment",
//       "Scalable deployment",
//     ],
//     color: "text-blue-500",
//     bg: "bg-blue-50",
//   },
//   {
//     icon: <FaChartBar />,
//     title: "Predictive Analytics",
//     subtitle: "FUTURE INSIGHTS TODAY",
//     description:
//       "We build conversational AI systems for chat and voice interactions across multiple business use cases.",
//     points: [
//       "Data forecasting",
//       "Trend analysis",
//       "Business intelligence",
//       "Predictive modeling",
//       "Decision support systems",
//     ],
//     color: "text-indigo-500",
//     bg: "bg-indigo-50",
//   },
//   {
//     icon: <FaComments />,
//     title: "Conversational AI",
//     subtitle: "HUMAN-LIKE INTERACTIONS",
//     description:"We build conversational AI systems for chat and voice interactions across multiple business use cases.",
//     points: [
//       "AI chatbots",
//       "Voice assistants",
//       "Multi-channel support",
//       "Customer automation",
//       "24/7 interactions",
//     ],
//     color: "text-orange-500",
//     bg: "bg-orange-50",
//   },
// ];

// const Services = () => {
//   return (
//     <section className="w-full py-[5%] bg-[#f8fafc] ">
//       <div className="w-[90%] mx-auto text-center">
//         {/* Top Badge */}
//         <span className="text-blue-600 bg-blue-100 px-[2%] py-[0.5%] rounded-full text-sm">
//           Our Services
//         </span>

//         {/* Heading */}
//         <h2 className="text-[2.5vw] font-semibold mt-[2%]">
//           Intelligent <span className="text-blue-600">AI Services</span>
//           <br />
//           Built for Scale
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2%] mt-[4%] bg-amber-600 px-[18%]  rounded-2xl ">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 rounded-[2vw] p-[6%] text-left shadow-sm hover:shadow-md transition duration-300 h-[370px] "
//             >
//               {/* Icon */}
//               <div
//                 className={`w-[3vw] h-[3vw] flex items-center justify-center rounded-xl ${service.bg} ${service.color} mb-[4%] text-[1.2vw]`}
//               >
//                 {service.icon}
//               </div>

//               {/* Title */}
//               <h3
//                 className="text-[28px] font-medium "
//                 style={{ fontFamily: "Geist, sans-serif" }}
//               >
//                 {service.title}
//               </h3>

//               {/* Subtitle */}
//               <p
//                 className={`text-[12px] font-bold mb-[3%] ${service.color}`}
//               >
//                 {service.subtitle}
//               </p>

//               <p className="text-[0.9vw] text-gray-600 mb-[3%]">
//                 {service.description}
//               </p>

//               {/* Points */}
//               <ul className="space-y-[1%]">
//                 {service.points.map((point, i) => (
//                   <li
//                     key={i}
//                     className="text-[0.9vw] text-gray-600 flex items-start gap-[2%]"
//                   >
//                     <span className="text-blue-500 ">•</span>
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import React from "react";
import {
  FaLightbulb,
  FaCode,
  FaBolt,
  FaCogs,
  FaChartBar,
  FaComments,
} from "react-icons/fa";
import { Check,MessageSquare } from "lucide-react";

const services = [
  {
    icon: <FaLightbulb />,
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
    icon: <FaCode />,
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
    icon: <FaBolt />,
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
    icon: <FaCogs />,
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
    icon: <FaChartBar />,
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
        <span className="text-blue-600 bg-blue-100 px-[2%] py-[0.5%] rounded-full text-sm">
          Our Services
        </span>

        <h2 className="text-[2.5vw] font-semibold mt-[2%] ">
          Intelligent <span className="text-blue-600">AI Services</span>
          <br />
          Built for Scale
        </h2>

        {/* ✅ px-[18%] hataya, ab cards puri width mein hain */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2%] mt-[4%]  px-[8%]  ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-4xl p-[6%] text-left shadow-sm hover:shadow-md transition duration-300 ml-4"
            >
              <div
                className={`w-[3vw] h-[3vw] flex items-center justify-center rounded-xl ${service.bg} ${service.color} mb-[4%] text-[1.2vw]`}
              >
                {service.icon}
              </div>

              <h3
                className="text-[29px] font-medium leading-8 mb-[3%]"
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {service.title}
              </h3>

              <p
                className={`text-[15px] font-semibold mb-[3%] ${service.color}`}
                style={{ fontFamily: "Geist, sans-serif" }}
              >
                {service.subtitle}
              </p>

              <p className="text-md text-gray-600 mb-[3%]">
                {service.description}
              </p>

              <ul className="space-y-[1%] mt-8">
                {service.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-[0.85vw] text-gray-600 flex items-start gap-[2%]"
                  >
                    <span className="bg-gray-100 rounded-full p-1">
                      <Check
                        className={`${service.checkColor} h-3 w-3 shrink-0`}
                      />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;