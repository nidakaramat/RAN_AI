// src/components/AIProducts.jsx
import img1 from "../../../assets/images/product/img1.png";
import img2 from "../../../assets/images/product/img2.png";
import img3 from "../../../assets/images/product/img3.png";
import img4 from "../../../assets/images/product/img4.png";
import img5 from "../../../assets/images/product/img5.png";
import img6 from "../../../assets/images/product/img6.png";
import { BsStars } from "react-icons/bs";
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    image: img1,
    title: "Crickit App",
    description:
      "Crickit is a unified cricket platform connecting players, clubs, & admins, streamlining management, match tracking, and performance insights.",
  },
  {
    id: 2,
    image: img2,
    title: "RAN Voice",
    description:
      "RAN Voice automates customer conversations with AI, handling calls, qualifying leads, & delivering 24/7 support through natural, human-like interactions.",
  },
  {
    id: 3,
    image: img3,
    title: "See Vitals",
    description:
      "SeeVitals is a remote patient monitoring solution integrating hardware and software to track, analyze, & generate timely alerts, improving patient outcomes & care efficiency.",
  },
  {
    id: 4,
    image: img4,
    title: "Synaptix Healthcare",
    description:
      "Synaptix is a real-time care management app connecting patients & providers, enabling monitoring, alerts, & coordination to improve outcomes & timely interventions.",
  },
  {
    id: 5,
    image: img5,
    title: "Holiday Country Club",
    description:
      "An automated marketplace matching warehouse buyers and sellers in real-time, enabling smart search, dynamic pricing, and secure end-to-end deal execution.",
  },
  {
    id: 6,
    image: img6,
    title: "Shuttle Management",
    description:
      "ShuttleOps Parent App provides real-time tracking, pickup updates, notifications, & attendance insights, keeping parents informed & confident about their child's transport.",
  },
];

export default function AIProducts() {
  return (
    <section className="bg-white py-16 px-4 ">
      {/* Top label */}
      <div className="flex justify-center mb-4 mt-15">
        <span className="inline-flex items-center gap-2 text-md text-[#155DFC] border border-gray-200 rounded-full px-4 py-1 shadow-lg ">
          <BsStars className="w-3 h-3 text-[#155DFC]" />
          Our Products
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-center text-[64px] md:text-4xl font-medium text-gray-900 leading-snug mb-2"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        AI Products Built to <br />
        Solve Real Business <span className="text-blue-600">Problems</span>
      </h1>

      {/* Subheading */}
      <p
        className="text-center text-[20px] font-medium  mb-10 tracking-wide mt-10 "
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        Our Product <span className="text-[#101ABD]"> Suite</span>
      </p>

      {/* Product Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="h-full mt-5">
            <div className="group mx-auto flex h-full max-w-[34rem] flex-col gap-3">
              <div className="overflow-hidden ">
                <div className="h-80 overflow-hidden ">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="rounded-[28px]  p-6  h-[220px]">
                <h3
                  className="text-[28px] font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "Geist, sans-serif" }}
                >
                  {product.title}
                </h3>
                <p
                  className="text-[18px] text-gray-500 leading-relaxed"
                  style={{ fontFamily: "DM sans, sans-serif" }}
                >
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-10">
        <button className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-6 py-2.5 rounded-full hover:bg-gray-700 transition-colors duration-200">
          See More <ArrowRight className="h-4 w-4 mt-0.5"/>
        </button>
      </div>
    </section>
  );
}