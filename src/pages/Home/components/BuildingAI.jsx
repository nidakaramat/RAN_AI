

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Group from '../../../assets/images/Group.png';
import {motion} from 'framer-motion';
import { BsStars } from "react-icons/bs";


const BuildingAI = () => {
  const [visible, setVisible] = useState(false);
  const [imgHovered, setImgHovered] = useState(false);
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);
  const rafRef     = useRef(null);

  /* ── Scroll-trigger ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* ── 3-D tilt on image ── */
  const onMove = (e) => {
    const el = imgRef.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width  / 2)) / (r.width  / 2);
    const dy = (e.clientY - (r.top  + r.height / 2)) / (r.height / 2);
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx',  `${-dy * 12}deg`);
      el.style.setProperty('--ry',  `${ dx * 12}deg`);
      el.style.setProperty('--sx',  `${(dx + 1) * 50}%`);
      el.style.setProperty('--sy',  `${(dy + 1) * 50}%`);
      el.style.setProperty('--sop','1');
    });
  };
  const onLeave = () => {
    const el = imgRef.current; if (!el) return;
    el.style.setProperty('--rx',  '0deg');
    el.style.setProperty('--ry',  '0deg');
    el.style.setProperty('--sop','0');
    setImgHovered(false);
  };


  return (
    <>
      <style>
        {`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(36px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeRight {
          from { opacity:0; transform:translateX(48px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes floatUpDown {
          0%,100% { transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(0px); }
          50%      { transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(-14px); }
        }
        @keyframes spinCW  { to { transform:rotate(360deg);  } }
        @keyframes spinCCW { to { transform:rotate(-360deg); } }
        @keyframes shimmer {
          from { background-position:-300% center; }
          to   { background-position: 300% center; }
        }

        .anim-0 { opacity:0; animation:fadeUp .75s cubic-bezier(.22,1,.36,1) .08s forwards; }
        .anim-1 { opacity:0; animation:fadeUp .75s cubic-bezier(.22,1,.36,1) .22s forwards; }
        .anim-2 { opacity:0; animation:fadeUp .75s cubic-bezier(.22,1,.36,1) .36s forwards; }
        .anim-3 { opacity:0; animation:fadeUp .75s cubic-bezier(.22,1,.36,1) .50s forwards; }
        .anim-4 { opacity:0; animation:fadeUp .75s cubic-bezier(.22,1,.36,1) .64s forwards; }
        .anim-img{ opacity:0; animation:fadeRight .85s cubic-bezier(.22,1,.36,1) .28s forwards; }
      `}
      </style>

      <section
        ref={sectionRef}
        className="relative overflow-hidden text-slate-900 -mt-20 bg-[#F0F4FF]"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full blur-3xl" />

        <div className="relative flex w-full min-w-0 flex-col-reverse gap-6 px-4 py-12 sm:gap-8 sm:px-6 sm:py-16 md:gap-10 md:px-8 md:py-20 lg:ml-19 lg:grid lg:grid-cols-2 mt-30">
          {/* ── LEFT TEXT ── */}
          <div className="z-10 flex flex-col gap-8 text-left ">
            <div className="flex gap-2">
              <span
                className={visible ? "anim-0" : "opacity-0"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "9999px",
                  border: "1px solid #bfdbfe",
                  padding: "0.5rem 0.75rem", // horizontal + vertical padding
                  fontSize: "0.75rem",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                  color: "#1d4ed8",
                  boxShadow: "0 1px 3px rgba(0,0,0,.1)",
                }}
              >
                <BsStars className="w-3 h-3 mr-1" /> {/* icon on left */}
                About Us
              </span>
            </div>

            <h1
              className={`${visible ? "anim-1" : "opacity-0"} text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-medium leading-tight text-slate-900`}
              style={{
                fontFamily: "Geist, sans-serif",
                animation: "headingSlide 0.8s ease 0.3s both",
              }}
            >
              Your <span className="text-[#121ABD]">Partner</span> for Building
              <br /> AI That Actually Works
            </h1>

            {/* accent line */}
            <div
              style={{
                height: "2px",
                borderRadius: "2px",
                background: "linear-gradient(90deg,#2563eb,#818cf8)",
                width: visible ? "3rem" : "0",
                transition: "width 1s cubic-bezier(.22,1,.36,1) .5s",
              }}
            />

            <p
              className={`${visible ? "anim-2" : "opacity-0"} max-w-xl text-sm sm:text-base md:text-base lg:text-[17px] text-[#343844] leading-relaxed text-justify`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ran AI is a software development company that builds and deploys
              intelligent AI systems for modern enterprises. We design
              production-ready solutions that automate operations, power
              customer interactions, and streamline complex workflows while
              integrating seamlessly with existing tools and infrastructure.
            </p>

            <p
              className={`${visible ? "anim-3" : "opacity-0"} max-w-xl text-sm sm:text-base md:text-base lg:text-[17px] text-[#343844] leading-relaxed text-justify`}
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our focus is on turning artificial intelligence into reliable
              business systems that improve efficiency, reduce operational
              friction, and deliver measurable impact across the organization.
              One of our core solutions, RanVoice, enables businesses to
              automate inbound and outbound calls, qualify leads, and manage
              customer conversations at scale using AI-powered voice agents.
            </p>

            <div
              className={`${visible ? "anim-4" : "opacity-0"} flex flex-wrap gap-4 items-center`}
            >
              <div className="relative z-0 mt-2 inline-flex sm:mt-3 pb-2">
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 z-0 rounded-[28px] -mt-2"
                  style={{
                    top: "23%",
                    bottom: "5px",
                    width: "calc(90% + 22px)",
                    transform: "translateX(-50%)",
                    background:
                      "linear-gradient(90deg,rgb(22, 248, 79) 10%,rgb(4, 54, 192) 50%,rgb(145, 7, 236) 30%)",
                    filter: "blur(14px)",

                    maskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 28%, black 52%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 28%, black 52%, black 100%)",
                  }}
                />
                <a
                  href="#services"
                  className="flex items-center gap-2 rounded-full px-7 py-4.5 text-sm font-semibold text-white hover:-translate-y-0.5 relative overflow-hidden"
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
                  Explore Our Solutions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <motion.div
            className="relative mt-8 flex min-w-0 items-center justify-center lg:mt-40 lg:justify-end lg:pr-30"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={Group}
              alt="AI Illustration"
              className="h-auto max-h-[280px] w-full max-w-full object-contain translate-x-0 sm:max-h-[360px] sm:translate-x-4 md:max-h-[440px] md:translate-x-8 lg:h-[560px] lg:max-h-none lg:w-auto lg:translate-x-20"
              // 👇 floating animation
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              // 👇 hover effect
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BuildingAI;
