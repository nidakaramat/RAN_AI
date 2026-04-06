import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, BetweenVerticalStart } from "lucide-react";
const Industry = () => {
  const industries = [
    { label: "Healthcare", icon: <Globe className="text-blue-800" /> },
    { label: "Finance & Banking", icon: <Shield className="text-blue-800" /> },
    { label: "Retail & eCommerce", icon: <Globe className="text-blue-800" /> },
    {
      label: "Manufacturing",
      icon: <BetweenVerticalStart className="text-blue-800" />,
    },
    { label: "Telecom & Services", icon: <Shield className="text-blue-800" /> },
    { label: "Startups & SaaS", icon: <BetweenVerticalStart className="text-blue-800" /> },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-white -mt-50"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
        >
          Industry <motion.span 
            className="text-[#123ABD]" 
            animate={{ backgroundPosition: "200% center" }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ backgroundSize: "200% 100%" }}
          >
            Expertise
          </motion.span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          {/* First row - 4 items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((industry, idx) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: -5,
                  boxShadow: "0 15px 40px rgba(18, 58, 189, 0.3)"
                }}
                className="mx-auto flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {industry.icon}
                </motion.span>
                <span>{industry.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {industries.slice(4).map((industry, idx) => (
              <motion.div
                key={industry.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: (idx + 4) * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: -5,
                  boxShadow: "0 15px 40px rgba(18, 58, 189, 0.3)"
                }}
                className="mx-auto flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.span 
                  className="text-lg"
                  whileHover={{ rotate: 12, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {industry.icon}
                </motion.span>
                <span>{industry.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Industry;
