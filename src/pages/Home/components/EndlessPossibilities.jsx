import React from "react";
import { motion } from "framer-motion";
import {
  SiAirtable,
  SiSalesforce,
  SiGooglesheets,
  SiCalendly,
} from "react-icons/si";
import { IoLogoSlack } from "react-icons/io5";
import { LuArrowsUpFromLine } from "react-icons/lu";
import { SiQbittorrent } from "react-icons/si";
import { FaHubspot } from "react-icons/fa";

import RanLogo from "../../../assets/images/logo.png";

const EndlessPossibilities = () => {
  const startRadius = 110;
  const dotRadius = 180;
  const integrationRadius = 250;
  const lineToCardRadius = 230;

  const integrations = [
    {
      name: (
        <span className="inline-flex items-center text-gray-600">
          HubSp <FaHubspot className="text-orange-500 h-5 w-5" /> t
        </span>
      ),
      color: "bg-white",
    },
    {
      name: "Calendly",
      icon: <SiCalendly className="h-5 w-5 text-blue-700" />,
      color: "bg-white",
    },
    {
      name: "Google Sheets",
      icon: <SiGooglesheets className="h-6 w-6 text-green-500" />,
      color: "bg-white",
    },
    {
      name: "Slack",
      icon: <IoLogoSlack className="h-6 w-6 text-red-500" />,
      color: "bg-white",
    },
    { name: "ChatGPT", color: "bg-white" },
    {
      name: "QuickBooks",
      icon: <SiQbittorrent className="h-6 w-6 text-green-700" />,
      color: "bg-white",
    },
    { name: "Stripe", color: "bg-white text-blue-700" },
    {
      name: "HighLevel",
      icon: <LuArrowsUpFromLine className="h-6 w-6 text-green-700" />,
      color: "bg-white",
    },
    { name: "Zapier", color: "bg-white text-orange-600" },
    {
      name: "Airtable",
      icon: <SiAirtable className="h-6 w-6 text-purple-500" />,
      color: "bg-white",
    },
    {
      name: "Salesforce",
      icon: <SiSalesforce className="h-8 w-8 text-sky-500" />,
      color: "bg-white",
    },
    { name: "N8N", color: "bg-white" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="min-h-0 min-h-screen overflow-x-hidden px-4 py-10 sm:px-6 sm:py-12 md:py-14 lg:px-8 lg:py-16"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-50px" }}
        className="mb-12 text-center sm:mb-16 md:mb-20"
        
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false }}
          className="inline-block text-blue-600 text-md font-semibold px-4 py-2 rounded-full mb-6 shadow-xl border border-gray-200"
        >
          Integrations
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className="mb-6 text-2xl font-medium text-gray-900 sm:text-4xl md:text-5xl"
          style={{ fontFamily: "Geist, sans-serif", animation: "headingSlide 0.8s ease 0.3s both" }}
        >
          Endless Possibilities
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
          className="mx-auto max-w-3xl px-2 text-base text-gray-600 sm:text-lg md:text-xl"
        >
          Ran AI unifies your entire tech stack with secure, seamless
          integrations for
          <br />
          frictionless, reliable connectivity across your ecosystem.
        </motion.p>
      </motion.div>

      {/* Circle Section */}
      <div className="-mt-16 mb-12 flex items-center justify-center py-8 sm:-mt-24 sm:mb-16 sm:py-10 md:-mt-32 md:mb-20 lg:-mt-40 lg:py-12">
        <div className="relative aspect-square w-full max-w-3xl origin-center scale-[0.42] sm:scale-[0.55] md:scale-[0.72] lg:scale-90 xl:scale-100">
          {/* 🔄 ROTATING WRAPPER */}
          <div className="absolute -inset-8 animate-[spin_40s_linear_infinite]">
            {/* SVG Lines */}
            <svg className="w-full h-full" viewBox="-420 -420 840 840">
              {integrations.map((_, i) => {
                const angle = (360 / integrations.length) * i;
                const rad = (angle * Math.PI) / 180;

                const startX = Math.cos(rad) * startRadius;
                const startY = Math.sin(rad) * startRadius;
                const dotX = Math.cos(rad) * dotRadius;
                const dotY = Math.sin(rad) * dotRadius;
                const midX = Math.cos(rad) * lineToCardRadius;
                const midY = Math.sin(rad) * lineToCardRadius;
                const badgeX = Math.cos(rad) * integrationRadius;
                const badgeY = Math.sin(rad) * integrationRadius;

                return (
                  <g key={i}>
                    {/* Line segments */}
                    <line
                      x1={startX}
                      y1={startY}
                      x2={dotX}
                      y2={dotY}
                      stroke="#8fbfff"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    <line
                      x1={dotX}
                      y1={dotY}
                      x2={midX}
                      y2={midY}
                      stroke="#8fbfff"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                    />
                    <line
                      x1={midX}
                      y1={midY}
                      x2={badgeX}
                      y2={badgeY}
                      stroke="#8fbfff"
                      strokeWidth="1"
                      strokeDasharray="2 4"
                    />

                    <circle cx={startX} cy={startY} r="4" fill="#8fbfff" />
                  </g>
                );
              })}
            </svg>

            {/* 🔄 BADGES */}
            {integrations.map((integration, index) => {
              const angle = (360 / integrations.length) * index;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * integrationRadius;
              const y = Math.sin(rad) * integrationRadius;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {/* 🔁 Reverse rotate for text */}
                  <div className="animate-[spin_40s_linear_infinite_reverse]">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-sm font-semibold whitespace-nowrap">
                      {integration.icon}
                      <span>{integration.name}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 🟢 CENTER LOGO (FIXED) */}
          <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 flex items-center justify-center">
              <img src={RanLogo} alt="Ran AI Logo" className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EndlessPossibilities;

