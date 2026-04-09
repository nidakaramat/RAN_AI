

import React from "react";

// import your images
import img6 from "../../../assets/images/about/img6.png";
import img7 from "../../../assets/images/about/img7.png";
import img8 from "../../../assets/images/about/img8.png";
import img9 from "../../../assets/images/about/img9.png";
import img10 from "../../../assets/images/about/img10.png";
import img11 from "../../../assets/images/about/img11.png";


const cards = [
  {
    id: 1,
    title: "AI in Customer Operations",
    image: img8,
  },
  {
    id: 2,
    title: "AI for Decision Intelligence",
    image: img9,
  },
  {
    id: 3,
    title: "AI-Powered Workflow Automation",
    image: img10,
  },
];

const PotentailAI = () => {

    
  return (
    <div className="w-full bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[400px] md:h-[450px] overflow-hidden">
        <img src={img7} alt="hero" className="w-full h-full object-cover" />

        {/* overlay */}
        <div className="absolute inset-0 "></div>

        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <div className="max-w-xl text-white">
            <h1
              className="text-2xl md:text-[40px] font-medium leading-snug"
              style={{ fontFamily: "Geist, sans-serif" }}
            >
              Unlock the Full Potential of AI with Intelligent Systems Built for
              Real Impact
            </h1>

            <p
              className="mt-4 text-lg text-gray-200"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              Discover the Power of Intelligent AI Systems with Advanced
              Automation, Data-Driven Insights, Scalable Solutions, and a Focus
              on Delivering Real Business Results.
            </p>
          </div>
          <button
            className="  px-5 py-2 rounded-full border border-purple-400 text-white bg-black hover:bg-purple-500 transition ml-80 mt-40"
            style={{ fontFamily: "DM sans, sans-serif" }}
          >
            Why Choose Us
          </button>
        </div>
      </section>

      {/* ===== CARDS SECTION ===== */}
      <section className="py-12 px-6 md:px-16 text-center">
        <h2
          className="text-xl md:text-3xl font-semibold mb-8"
          style={{ fontFamily: "DM sans, sans-serif" }}
        >
          Explore How AI Transforms
          <br />
          Modern Businesses
        </h2>

        <div className="py-12 px-10">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10  max-w-5xl justify-center mx-auto rounded-2xl p-2">
            {cards.map((card) => (
              <div
                key={card.id}
                className="relative rounded-2xl overflow-hidden  flex items-center justify-center h-[293px] w-[330px] "
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="max-h-full max-w-full object-contain"
                />

                <div
                  className="absolute inset-0 flex items-end p-4 "
                  style={{ fontFamily: "DM sans, sans-serif" }}
                >
                  <p className="text-white text-[22px] md:text-[26px] font-medium text-start mb-8 leading-8">
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Banner */}
        <div className="relative -mt-20 rounded-2xl overflow-hidden py-10 px-20 ">
          <img src={img11} className="w-auto h-59 object-cover ml-25" />
          <div
            className="absolute inset-0 flex items-center justify-between"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            <p className="text-white text-sm md:text-[30px] ml-56">
              Contact us if you have
              <br />
              <span className="mr-8"> additional question.</span>
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm mr-50">
              Let's get in touch
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default PotentailAI;