import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    name: "RAN Voice",
    desc: "AI Voice Automation System",
    path: "https://ranvoice.com/",
  },
  {
    name: "Smart Email",
    desc: "AI Email Automation System",
    path: "https://smartmailai.ran-ai.com/",
  },
];

const ProductsDropdown = ({ close }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-[50px] left-[60%] w-30 ml-36 p-1 z-[99999]"
    >
      {/* OUTER WRAPPER */}
      <div className="relative rounded-xl p-[1px] bg-white/10 backdrop-blur-md shadow-md border-b border-l border-r border-gray-800">
        <div className="rounded-xl bg-transparent">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              // ✅ FIXED (important)
              onClick={() => {
                close();
              }}
              className="block p-3 rounded-lg transition relative overflow-hidden group"
            >
              <p className="text-sm font-semibold text-gray-900 relative z-10">
                {item.name}
              </p>

              {/* LIGHTING EFFECT */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/60 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsDropdown;
