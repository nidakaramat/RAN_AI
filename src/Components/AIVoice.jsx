import React from "react";
import lizaImg from "../assets/images/AIVoice/liza.png";
import diegoImg from "../assets/images/AIVoice/diego.png";
import ethanImg from "../assets/images/AIVoice/ethan.png";
import aminaImg from "../assets/images/AIVoice/amina.png";
import { BsStars } from "react-icons/bs";
const AIVoice = () => {
  const agents = [
    { name: "Liza", role: "AI Employee", image: lizaImg },
    { name: "Diego", role: "AI Employee", image: diegoImg },
    { name: "Ethan", role: "AI Employee", image: ethanImg },
    { name: "Amina", role: "AI Employee", image: aminaImg },
  ];

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8  text-center">
         <div>
                    <p className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-4 py-2 text-xs font-semibold shadow-xl text-gray-600">
                      <BsStars className="text-blue-500 text-sm" />
                      Voice AI Redirect
                    </p>
                  </div>

        <h2 className="text-3xl mt-8 font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Looking for <span className="text-[#123ABD]">AI Voice Agents?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-[#767676] sm:text-lg">
          Explore our dedicated AI voice platform built for 
          <br /> production-grade deployments.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <div key={agent.name} className="relative overflow-hidden rounded-2xl ">
              <img src={agent.image} alt={agent.name} className="h-80 w-full object-cover" />
              <div className="absolute  px-4 py-3">
                <p className="text-sm font-semibold text-white">{agent.name}: {agent.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#100202]  px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Visit RanVoice Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default AIVoice;
