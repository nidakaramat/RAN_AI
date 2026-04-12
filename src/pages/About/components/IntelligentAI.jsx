import React from "react";
import img1 from "../../../assets/images/about/img1.png";
import img2 from "../../../assets/images/about/img2.png";
import img3 from "../../../assets/images/about/img3.png";
import img4 from "../../../assets/images/about/img4.png";
import img5 from "../../../assets/images/about/img5.png";
import img6 from "../../../assets/images/about/img6.png";
import { FaHandsHoldingChild, FaRocket, FaChartLine, FaUsers } from "react-icons/fa6";
import { GoCpu } from "react-icons/go";


const features = [
  {
    title: "Innovation First",
    description:
      "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies.",
    icon: <GoCpu className="h-8 w-8" />,
  },
  {
    title: "Trust & Security",
    description:
      "Enterprise-grade security and ethical AI practices are at the core of everything we build.",
    icon: <GoCpu className="h-8 w-8" />,
  },
  {
    title: "Customer Success",
    description:
      "Your success is our success. We're committed to delivering measurable business outcomes.",
    icon: <GoCpu className="h-8 w-8" />,
  },
  {
    title: "Speed to Value",
    description:
      "We believe in rapid iteration and deployment to get you results faster, without compromising quality.",
    icon: <GoCpu className="h-8 w-8" />,
  },
];

const IntelligentAI = () => {
  return (
    <section className="overflow-x-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24 2xl:gap-32"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          <div className="space-y-6 h-full">
            <span className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-[#121ABD] shadow-lg gap-2">
              <FaHandsHoldingChild className="h-4 w-4" />
              Our Mission
            </span>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Intelligent AI Systems
              <br />
              for Real Impact
            </h2>
            <p
              className="max-w-screen-sm text-sm sm:text-[19px] leading-relaxed  text-slate-600"
              style={{
                fontFamily: "DM Sans, sans-serif",
                wordSpacing: "normal",
                letterSpacing: "0",
                textAlignLast: "left",
              }}
            >
              To empower organizations with intelligent AI systems that augment
              human capabilities, automate complex workflows, and unlock new
              opportunities for growth and innovation. We believe AI should be
              accessible, ethical, and deliver tangible business value.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 h-full">
            {/* Left side (2 small images) */}
            <div className="grid grid-rows-2 gap-5">
              <div className="overflow-hidden rounded-[28px] h-40 sm:h-48">
                <img
                  src={img6}
                  alt="AI system"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] h-40 sm:h-48">
                <img
                  src={img4}
                  alt="AI target"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right side (1 big image) */}
            <div className="overflow-hidden rounded-[28px] h-full">
              <img
                src={img2}
                alt="AI collaboration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-24 2xl:gap-32">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 h-full">
            {/* Left side (2 small images) */}
            <div className="grid grid-rows-2 gap-5">
              <div className="overflow-hidden rounded-[28px]  h-40 sm:h-48">
                <img
                  src={img5}
                  alt="AI vision"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px]  h-40 sm:h-48">
                <img
                  src={img3}
                  alt="AI experience"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Right side (1 big image) */}
            <div className="overflow-hidden rounded-[28px] h-full">
              <img
                src={img1}
                alt="AI industry"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 h-full">
            <span className="inline-flex items-center rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-[#121ABD] shadow-lg gap-2">
              <FaHandsHoldingChild className="h-4 w-4" />
              Our Vision
            </span>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[45px]">
              AI Transforming Every
              <br />
              Industry Worldwide
            </h2>
            <p
              className="max-w-screen-sm text-sm sm:text-[20px] leading-relaxed  text-slate-600"
              style={{
                fontFamily: "DM Sans, sans-serif",
                wordSpacing: "normal",
                letterSpacing: "0",
                textAlignLast: "left",
              }}
            >
              A world where every organization—from startups to enterprises—can
              harness the full power of AI to solve their most challenging
              problems, make better decisions, and create exceptional
              experiences for their customers.
            </p>
          </div>
        </div>

        <div className="mt-12 p-6 sm:mt-16 sm:p-8 md:mt-20 md:p-10 lg:mt-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-2xl font-medium text-black sm:text-4xl lg:text-5xl">
              Our Core <span className="text-[#121ABD]">Values</span>
            </p>
            <h3 className="mt-4 text-3xl font-[10px] tracking-tight text-[#767676] sm:text-2xl">
              The principles that guide how we build, partner,
              <br />
              and deliver exceptional AI solutions.
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 mt-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm "
              >
                <div className="inline-flex h-12 w-12 items-center justify-center text-[#121ABD] mb-5 ml-2">
                  {item.icon}
                </div>

                <h4
                  className="text-lg font-semibold text-slate-900 ml-4 -mt-4"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  {item.title}
                </h4>

                <p className="mt-1 text-sm text-slate-600 ml-4 mr-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentAI;
