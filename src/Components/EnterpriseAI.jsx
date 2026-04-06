

import { motion } from "framer-motion";

import React, { useRef } from "react";
import bgImage from "../assets/images/bg.png";
import img1 from "../assets/images/Mainsection/img1.png";
import img2 from "../assets/images/Mainsection/img2.png";
import img3 from "../assets/images/Mainsection/img3.png";
import img4 from "../assets/images/Mainsection/img4.png";
import img5 from "../assets/images/Mainsection/img5.png";
import img6 from "../assets/images/Mainsection/img6.png";
import img7 from "../assets/images/Mainsection/img7.png";
import img8 from "../assets/images/Mainsection/img8.png";
import img9 from "../assets/images/Mainsection/img9.png";
import img10 from "../assets/images/Mainsection/img10.png";

const clientImages = [img1, img2, img3, img4, img5];
const overlayCards = [
  { label: "Saas", image: img6 },
  { label: "Logistic", image: img7 },
  { label: "Healthcare", image: img8 },
  { label: "Finance", image: img9 },
  { label: "Retail", image: img10 },
];

const layout = [
  { width: 250, height: 300, x: -390, y: 50, rotate: -1, scale: 0.9, z: 10 },
  { width: 300, height: 350, x: -240, y: 35, rotate: -4, scale: 0.95, z: 20 },
  { width: 340, height: 380, x: 0, y: 25, rotate: 0, scale: 1, z: 40 },
  { width: 330, height: 350, x: 240, y: 25, rotate: 2, scale: 0.95, z: 20 },
  { width: 210, height: 300, x: 420, y: 50, rotate: 4, scale: 0.9, z: 10 },
];

/* ── 3D Tilt Card ── */
const TiltCard = ({ card, l, idx, mounted }) => {
  const ref = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${-dy * 14}deg`);
      el.style.setProperty("--ry", `${dx * 14}deg`);
      el.style.setProperty("--shine-x", `${(dx + 1) * 50}%`);
      el.style.setProperty("--shine-y", `${(dy + 1) * 50}%`);
      el.style.setProperty("--shine-op", "1");
    });
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--shine-op", "0");
  };

  return (
    <div
      className="absolute bottom-0"
      style={{
        width: `${l.width}px`,
        transform: mounted
          ? `translateX(${l.x}px) translateY(${l.y}px) rotate(${l.rotate}deg) scale(${l.scale})`
          : `translateX(${l.x}px) translateY(${l.y + 80}px) rotate(${l.rotate}deg) scale(${l.scale * 0.85})`,
        zIndex: l.z,
        opacity: mounted ? 1 : 0,
        transition: `opacity 0.7s ease ${idx * 0.12}s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1) ${idx * 0.12}s`,
        perspective: "1000px",
      }}
    >
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          "--rx": "0deg",
          "--ry": "0deg",
          "--shine-x": "50%",
          "--shine-y": "50%",
          "--shine-op": "0",
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease",
          borderRadius: "16px",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)",
          willChange: "transform",
        }}
        className="group"
      >
        {/* Shine overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at var(--shine-x) var(--shine-y), rgba(255,255,255,0.28) 0%, transparent 65%)",
            opacity: "var(--shine-op)",
            transition: "opacity 0.3s ease",
            zIndex: 3,
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        {/* Floating depth layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
            zIndex: 2,
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        <img
          src={card.image}
          alt={card.label}
          className="w-full h-auto block"
          style={{
            maxHeight: `${l.height}px`,
            display: "block",
            transform: "translateZ(0)",
          }}
        />

        {/* Label with 3D pop */}
        <span
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
          className={`absolute top-4 ${idx < 2 ? "left-4" : "right-4"} bg-white text-black mt-2 px-3 py-1 text-[12px] font-semibold rounded-full shadow z-10`}
        >
          {card.label}
        </span>

        {/* Bottom glow on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(99,102,241,0.25), transparent)",
            transition: "opacity 0.4s ease",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

const EnterpriseAI = () => {
  return (
    <>
      {/* Keyframes injected once */}
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes badgePop {
          0% { opacity:0; transform: scale(0.8) translateY(10px); }
          100% { opacity:1; transform: scale(1) translateY(0); }
        }
        @keyframes headingSlide {
          0% { opacity:0; transform: translateY(28px); }
          100% { opacity:1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          0% { opacity:0; transform: translateY(18px); }
          100% { opacity:1; transform: translateY(0); }
        }
        .card-float-0 { animation: floatY 5.5s ease-in-out 0s infinite; }
        .card-float-1 { animation: floatY 6s ease-in-out 0.4s infinite; }
        .card-float-2 { animation: floatY 5s ease-in-out 0.8s infinite; }
        .card-float-3 { animation: floatY 6.5s ease-in-out 0.2s infinite; }
        .card-float-4 { animation: floatY 5.8s ease-in-out 0.6s infinite; }
      `}</style>

      <section
        id="home"
        className="relative overflow-hidden text-slate-800"
        style={{
          marginTop: "-80px",
          paddingTop: "110px",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="mx-auto w-full max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
          <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 backdrop-blur-sm">
            {/* ── Hero Text ── */}
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 sm:gap-6 text-center">
              {/* Heading */}
              <h1
                className="max-w-4xl text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold font-Geist leading-tight text-slate-900"
                style={{ animation: "headingSlide 0.8s ease 0.3s both" }}
              >
                Enterprise <span className="text-blue-600">AI Solutions</span>{" "}
                That Deliver Real Results
              </h1>

              {/* Paragraph */}
              <p
                className="max-w-2xl text-sm sm:text-base md:text-base lg:text-lg text-slate-600"
                style={{ animation: "fadeUp 0.8s ease 0.5s both" }}
              >
                Ran AI designs, builds, and deploys custom AI systems that help
                businesses automate operations, improve decision-making, and
                scale efficiently.
              </p>

              {/* CTA */}
              <a
                href="#services"
                className="flex items-center gap-2 rounded-full px-5 sm:px-7 py-3 sm:py-4 mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-white hover:-translate-y-0.5 relative overflow-hidden"
                style={{
                  background: "#100202",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 12px 26px rgba(66,102,255,0.45)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(44,93,238,0.35)")
                }
              >
                Book Free Consultation
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                    width: "100%",
                    height: "2px", // thickness of bottom line
                    background:
                      "linear-gradient(to right, #00ff00, #0000ff, #ff0000)",
                    borderRadius: "9999px", // matches rounded-full button
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)", // subtle glow
                    pointerEvents: "none", // allows button click
                  }}
                ></span>
              </a>
            </div>

            <div className="w-full flex justify-center mt-4 sm:mt-5 overflow-hidden">
            {/* MAIN CONTAINER */}
            <div className="hidden md:flex relative w-full max-w-[1300px] h-[320px] md:h-[380px] lg:h-[420px] items-end justify-center">
                {overlayCards.map((card, idx) => {
                  const layout = [
                    {
                      width: 250,
                      height: 300,
                      x: -390,
                      y: 50,
                      rotate: -1,
                      scale: 0.9,
                      z: 10,
                    },
                    {
                      width: 300,
                      height: 350,
                      x: -240,
                      y: 35,
                      rotate: -4,
                      scale: 0.95,
                      z: 20,
                    },
                    {
                      width: 340,
                      height: 380,
                      x: 0,
                      y: 25,
                      rotate: 0,
                      scale: 1,
                      z: 40,
                    },
                    {
                      width: 330,
                      height: 350,
                      x: 240,
                      y: 25,
                      rotate: 2,
                      scale: 0.95,
                      z: 20,
                    },
                    {
                      width: 210,
                      height: 300,
                      x: 420,
                      y: 50,
                      rotate: 4,
                      scale: 0.9,
                      z: 10,
                    },
                  ][idx];

                  return (
                    <div
                      key={idx}
                      className="absolute bottom-0"
                      style={{
                        width: `${layout.width}px`,
                        transform: `
          translateX(${layout.x}px)
          translateY(${layout.y}px)
          rotate(${layout.rotate}deg)
          scale(${layout.scale})
        `,
                        zIndex: layout.z,
                        perspective: "1000px",
                      }}
                    >
                      <motion.div
                        className="relative overflow-hidden rounded-[28px] bg-white/5"
                        style={{ transformStyle: "preserve-3d" }}
                        initial={{
                          opacity: 0,
                          y: idx % 2 === 0 ? 90 : -90,
                          rotateX: idx % 2 === 0 ? 24 : -24,
                          rotateZ: idx % 2 === 0 ? -8 : 8,
                          skewY: idx % 2 === 0 ? 6 : -6,
                          scale: 0.9,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          rotateZ: 0,
                          skewY: 0,
                          scale: 1,
                        }}
                        whileHover={{
                          y: -10,
                          rotateX: 2,
                          rotateY: idx % 2 === 0 ? 8 : -8,
                          scale: 1.03,
                        }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{
                          duration: 1,
                          delay: idx * 0.08,
                          type: "spring",
                          stiffness: 100,
                          damping: 18,
                        }}
                      >
                        {/* IMAGE with dynamic height */}
                        <img
                          src={card.image}
                          alt={card.label}
                          className="w-full h-auto block"
                          style={{
                            maxHeight: `${layout.height}px`,
                            transform: "translateZ(0)",
                          }}
                        />

                        {/* LABEL */}
                        <span
                          className={`absolute top-4 ${idx < 2 ? "left-4" : "right-4"} bg-white text-black mt-2 px-3 py-1 text-[12px] font-semibold rounded-full shadow`}
                        >
                          {card.label}
                        </span>
                      </motion.div>
                    </div>
                  );
                })}
              </div>

              {/* MOBILE */}
              <div className="flex md:hidden gap-3 sm:gap-4 overflow-x-auto px-3 sm:px-4 w-full">
                {overlayCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    className="min-w-[240px] rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{
                      duration: 0.7,
                      delay: idx * 0.08,
                      type: "spring",
                      stiffness: 120,
                    }}
                  >
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.label}
                        className="h-[300px] w-full object-cover"
                      />
                      <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs font-semibold rounded-full shadow">
                        {card.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseAI;
