
import { motion } from "framer-motion";
import img1 from "../../../assets/images/product/img1.png";
import img2 from "../../../assets/images/product/img2.png";
import img3 from "../../../assets/images/product/img3.png";
import img4 from "../../../assets/images/product/img4.png";
import img5 from "../../../assets/images/product/img5.png";
import img6 from "../../../assets/images/product/img6.png";
import { BsStars } from "react-icons/bs";
import { ArrowRight } from "lucide-react";

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
    <section className="overflow-x-hidden bg-white px-3 py-12 sm:px-4 sm:py-16 md:px-6 lg:px-8">
      {/* Top label */}
      <motion.div
        className="mb-4 mt-8 flex justify-center sm:mt-10 md:mt-12 lg:mt-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
         <motion.span
            className="inline-flex items-center text-blue-600 bg-white shadow-lg border border-blue-100 px-3 py-2 rounded-full text-[16px] font-medium"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <BsStars className="h-4 w-4 mr-1" />
            AI Products
          </motion.span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="mb-2 px-2 text-center text-3xl font-medium leading-snug text-gray-900 sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[64px]"
        style={{ fontFamily: "Geist, sans-serif" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        AI Products Built to <br />
        Solve Real Business <span className="text-blue-600">Problems</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="text-center text-[20px] font-medium  mb-10 tracking-wide mt-10"
        style={{ fontFamily: "Geist, sans-serif" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Our Product <span className="text-[#101ABD]"> Suite</span>
      </motion.p>

      {/* Product Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="h-full mt-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <motion.div
              className="group mx-auto flex h-full max-w-[34rem] flex-col gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className="overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                  
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
              <div className="min-h-[220px] rounded-[28px] p-6 sm:h-auto md:min-h-[220px] lg:h-[220px]">
                <motion.h3
                  className="text-[28px] font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: "Geist, sans-serif" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {product.title}
                </motion.h3>
                <motion.p
                  className="text-[18px] text-gray-500 leading-relaxed"
                  style={{ fontFamily: "DM sans, sans-serif" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {product.description}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* See More Button */}
      <motion.div
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <button className="inline-flex items-center gap-2 bg-gray-900 text-white text-sm px-6 py-2.5 rounded-full hover:bg-gray-700 transition-colors duration-200">
          See More <ArrowRight className="h-4 w-4 mt-0.5" />
        </button>
      </motion.div>
    </section>
  );
}