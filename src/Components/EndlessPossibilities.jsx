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

import RanLogo from "../assets/Images/logo.png";

const EndlessPossibilities = () => {
  const startRadius = 80;
  const dotRadius = 170;
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
      className="min-h-screen py-15 px-6"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-50px" }}
        className="text-center mb-20"
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
          className="text-5xl font-semibold text-gray-900 mb-6"
        >
          Endless Possibilities
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Ran AI unifies your entire tech stack with secure, seamless
          integrations for
          <br />
          frictionless, reliable connectivity across your ecosystem.
        </motion.p>
      </motion.div>

      {/* Circle Section */}
      <div className="flex justify-center items-center py-12 -mt-40 mb-20">
        <div className="relative w-full max-w-2xl aspect-square">
          {/* 🔄 ROTATING WRAPPER */}
          <div className="absolute inset-0 animate-[spin_40s_linear_infinite]">
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
              <img src={RanLogo} alt="Ran AI Logo" className="h-20 w-20" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EndlessPossibilities;

