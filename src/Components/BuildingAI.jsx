import React from 'react';
import { ArrowRight } from 'lucide-react';
import Group from '../assets/Images/Group.png';
const BuildingAI = () => {
  return (
    <section className="relative overflow-hidden  text-slate-900">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-64 w-64 rounded-full  blur-3xl" />
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse gap-10 px-4 py-20 sm:px-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-8">
        <div className="z-10 flex flex-col gap-8 text-left">
          <span className="inline-flex items-center w-20 rounded-full border border-blue-200 px-2 py-2 text-xs font-semibold tracking-wide text-blue-700 shadow-md">
            About Us
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-5xl">
            Your <span className="text-blue-600">Partner</span> for Building
            <br /> AI That Actually Works
          </h1>
          <p className="max-w-xl text-base text-[#343844]  sm:text-lg leading-relaxed text-justify ">
            Ran AI is a software development company that builds and deploys
            intelligent AI systems for modern enterprises. We design
            production-ready solutions that automate operations, power customer
            interactions, and streamline complex workflows while integrating
            seamlessly with existing tools and infrastructure.
          </p>
          <p className="max-w-xl text-base text-[#343844] sm:text-lg leading-relaxed text-justify">
            Our focus is on turning artificial intelligence into reliable
            business systems that improve efficiency, reduce operational
            friction, and deliver measurable impact across the organization. One
            of our core solutions, RanVoice, enables businesses to automate
            inbound and outbound calls, qualify leads, and manage customer
            conversations at scale using AI-powered voice agents.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#services"
              className="flex items-center gap-2 rounded-full bg-[#100202] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(44,93,238,0.35)] transition hover:shadow-[0_12px_26px_rgba(66,102,255,0.45)] hover:-translate-y-0.5"
            >
              Explore Our Solutions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="">
            <div>
              <img src={Group} alt="AI Illustration" className="h-140 w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingAI;
