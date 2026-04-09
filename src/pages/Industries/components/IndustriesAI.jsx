

import React from "react";
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

const IndustriesAI = () => {
  return (
    <section className="w-full py-[2%] mb-10">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-[24px] lg:text-[32px] font-semibold mb-[3%]">
          Our <span className="text-blue-600">Industries</span>
        </h2>

        {/* Sections */}
        <div className="flex flex-col gap-[2%] space-y-20">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-start gap-[5%] ${
                index % 2 !== 0 ? "lg:flex-row-reverse " : "ml-10 "
              }`}
            >
              {/* Text */}
              <div className="w-full lg:w-[52%]">
                <span className="inline-block text-blue-600 bg-blue-100 px-3 py-1.5 rounded-full text-xs mb-2 w-fit">
                  {item.tag}
                </span>

                <h3
                  className="text-xl lg:text-4xl font-semibold mb-2"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-600 text-lg mb-2 mt-8"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.desc}
                </p>

                <p
                  className="text-gray-600 text-lg mb-3 mt-5"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.des}
                </p>

                <ul className="space-y-1.5">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[17px] text-black "
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      <span >
                        <CircleCheckBig className="h-4 w-4 mt-1 text-[#121ABD]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="w-full lg:w-[45%] flex items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-[95%] h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesAI;