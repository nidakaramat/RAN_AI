
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const stats = [
  { value: "50+", label: "AI Systems Deployed" },
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "10+", label: "Industries Served" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

const IntelligentSystem = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <motion.div
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2
            className="mx-auto max-w-3xl text-3xl font-medium leading-tight text-slate-900 sm:text-3xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            We build intelligent systems that transform how businesses operate,
            scale, and grow.
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 max-w-[1050px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {stats.map((item, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);

            const rotateX = useTransform(y, [-50, 50], [8, -8]);
            const rotateY = useTransform(x, [-50, 50], [-8, 8]);

            return (
              <motion.div
                key={item.label}
                variants={itemVariants}
                style={{
                  x,
                  y,
                  rotateX,
                  rotateY,
                  transformPerspective: 800,
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;

                  x.set((e.clientX - centerX) * 0.2);
                  y.set((e.clientY - centerY) * 0.2);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                whileHover={{ scale: 1.06 }}
                className="relative px-6 py-8 pl-8 text-left ml-12"
              >
                {/* Animated Vertical Line */}
                <motion.span
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: "4rem", opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="absolute left-0 top-1/2 w-px -translate-y-1/2 bg-slate-400"
                ></motion.span>

                {/* Value with glow pulse */}
                <motion.p
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    delay: index * 0.2,
                  }}
                  whileHover={{
                    textShadow: "0px 0px 12px rgba(0,0,0,0.15)",
                  }}
                  className="text-5xl font-medium text-slate-900"
                >
                  {item.value}
                </motion.p>

                {/* Label fade */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                  className="mt-2 text-sm font-medium text-slate-500"
                >
                  {item.label}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IntelligentSystem;