import React from "react";
import { motion } from "framer-motion";
import RanLogo from "../assets/images/logo.png";
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import heroImage from "../assets/images/AIVoice/img.png";
import { FiBox } from "react-icons/fi";


const Footer = ({variant}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, margin: "-50px" }}
      className={`${
        variant === "contact"
          ? "bg-gray-100 w-full min-h-fit rounded-none mx-0 flex flex-col mb-0 mt-20"
          : "bg-white rounded-[50px] border border-slate-200 text-slate-700 overflow-hidden mx-3 sm:mx-6 md:mx-8 lg:mx-20 mb-12 sm:mb-16 md:mb-20"
      }`}
    >
      {/* Hero Section */}
      {variant !== "contact" && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
          className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 text-white mx-3 sm:mx-4 md:mx-5 mt-4 sm:mt-5 md:mt-6"
        >
          {/* Background Image */}
          <motion.img
            src={heroImage}
            alt="AI cube"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1 }}
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="relative flex flex-col items-center justify-center text-center h-full gap-4 sm:gap-6 max-w-7xl mx-auto"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <div className="mr-3">
              <FiBox className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Ready to build AI that
              <br />
              works for your business?
            </h3>

            <motion.button className="rounded-full bg-black px-5 sm:px-6 py-2.5 text-sm font-semibold text-white mt-10">
              Book a Strategy Call
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }}
        className="mx-auto w-full  max-w-6xl px-4 sm:px-6 md:px-8 lg:px-15 py-8 sm:py-10 md:py-12 ml-10"
      >
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-8 xl:grid-cols-4 ">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="space-y-5 xl:col-span-1   w-100"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img src={RanLogo} alt="Ran AI" className="h-14 w-14" />
            </motion.div>
            <p
              className="text-black "
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              We help forward-thinking companies design, integrate, and scale AI
              systems that reduce costs, unlock efficiency, and accelerate
              growth.
            </p>
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
            >
              {[0, 1, 2, 3].map((idx) => (
                <motion.button
                  key={idx}
                  className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                  viewport={{ once: false }}
                  whileHover={{ scale: 1.15, rotateZ: 8 }}
                >
                  {idx === 0 && <FiFacebook size={20} />}
                  {idx === 1 && <FiInstagram size={20} />}
                  {idx === 2 && <FiLinkedin size={20} />}
                  {idx === 3 && <FiYoutube size={20} />}
                </motion.button>
              ))}
            </motion.div>

            {/* Newsletter */}
            <motion.div
              className="mt-10 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h5
                className="mb-3 text-xs sm:text-[16px] font-semibold text-[#020817]"
                style={{ fontFamily: "DM sans, sans-serif" }}
              >
                Subscribe to Our Newsletter
              </h5>
              <div
                className="flex gap-2 flex-col sm:flex-row mr-10"
                style={{ fontFamily: "DM sans, sans-serif" }}
              >
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 rounded-full border border-slate-300 px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  whileFocus={{
                    borderColor: "#3b82f6",
                    boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
                  }}
                />
                <motion.button
                  className="rounded-full bg-[#123ABD] px-5 sm:px-6 py-2 text-xs sm:text-sm font-light text-white hover:bg-blue-700 transition whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Links & Legal */}
          <motion.div
            className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:col-span-2 md:ml-0 lg:ml-55"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h4 className="mb-3 sm:mb-4 text-xs sm:text-[16px] font-semibold tracking-wider text-black">
                Links
              </h4>
              <ul
                className="flex flex-col inline-2xl space-y-1.5 sm:space-y-4 text-xs sm:text-[15px] text-slate-600"
                style={{ fontFamily: "DM sans, sans-serif" }}
              >
                {[
                  "Services",
                  "Industries",
                  "Startup Launchpad",
                  "About Us",
                  "Products",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.06, duration: 0.4 }}
                    viewport={{ once: false }}
                    whileHover={{ x: 5, color: "#0f172a" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: false }}
            >
              <h4 className="mb-3 sm:mb-4 text-xs sm:text-[16px] font-semibold tracking-wider text-black">
                Legal
              </h4>
              <ul
                className="space-y-1.5 sm:space-y-3.5 text-xs sm:text-[14px]  text-slate-600"
                style={{ fontFamily: "DM sans, sans-serif" }}
              >
                {["Privacy Policy", "Terms of services"].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.06, duration: 0.4 }}
                    viewport={{ once: false }}
                    whileHover={{ x: -5, color: "#0f172a" }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="xl:col-span-1"
          >
            <h4
              className="mb-3 sm:mb-4 text-xs sm:text-[16px] font-semibold tracking-wider text-black"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              Contacts
            </h4>
            <ul
              className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[14px]  text-slate-600"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              {["ran-ai@gmail.com", "+92 300 xxxxxxxx"].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
                  viewport={{ once: false }}
                  whileHover={{ x: -5, color: "#0f172a" }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className=" text-xs sm:text-sm text-slate-500 pt-6 -mt-4 sm:pt-8 sm:-mt-6 md:pt-10 md:-mt-8 flex flex-col sm:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: false }}
        >
          <div className="md:ml-0 lg:ml-160 text-[#212121]">
            <p
              className="md:ml-0 lg:ml-30 text-[#454545] text-[14px] sm:text-[16px]"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              © 2025 Ran AI. All rights reserved.
            </p>
            <motion.div
              className="flex gap-4 text-[#212121] text-[14px] sm:text-[14px] ml-1 mt-2"
              style={{ fontFamily: "DM sans, sans-serif" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: false }}
            >
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ color: "#000" }}
                    transition={{ duration: 0.2 }}
                  >
                    {item} {idx < 2 && <span className="mx-2">|</span>}
                  </motion.span>
                ),
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.footer>
    </motion.div>
  );
};

export default Footer;
