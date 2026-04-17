import React from "react";
import { motion } from "framer-motion";
import RanLogo from "../assets/images/logo.png";
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import heroImage from "../assets/images/AIVoice/img.png";
import { FiBox } from "react-icons/fi";


const socials = [
  {
    icon: <FiInstagram size={20} />,
    link: "https://www.instagram.com/ran_ai_official?igsh=MTB2NjA1dzdwN3N3cw==",
  },
  {
    icon: <FiLinkedin size={20} />,
    link: "https://www.linkedin.com/company/ran-ai-official/",
  },
];
const Footer = ({ variant }) => {
  return (
    <div className="bg-[#F0F4FF] w-full py-4 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-50px" }}
        className={`${
          variant === "contact"
            ? "bg-gray-100 w-full min-h-fit rounded-none mx-0 flex flex-col mb-0 mt-20"
            : "bg-white rounded-[30px] sm:rounded-[50px] border border-slate-200 text-slate-700 overflow-hidden mx-3 sm:mx-6 md:mx-8 lg:mx-20 mb-12 sm:mb-16 md:mb-20"
        }`}
      >
        {/* Hero Section */}
        {variant !== "contact" && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: false }}
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl min-h-[320px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[500px] text-white mx-3 sm:mx-4 md:mx-6 lg:mx-8 -mt-5 sm:mt-5 md:mt-6"
          >
            {/* Background Image */}
            <motion.img
              src={heroImage}
              alt="AI cube"
              className="absolute inset-0 w-full h-full -mt-18 object-contain object-right sm:object-right-bottom lg:object-right xl:object-right"
              initial={{ scale: 1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
              className="relative flex flex-col justify-center h-full gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <h3 className="text-[7px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-[40px] font-semibold leading-tight  text-gray-100 mt-8 sm:mt-7 md:mt-1">
                AI That Fits Your
                <br />
                Industry
              </h3>
              <p className="text-[5px] sm:text-base md:text-lg lg:text-xl text-gray-100 max-w-2xl">
                Ran AI designs AI systems that align
                <br /> with real operational needs, not generic
                <br /> use cases.
              </p>

              <div className="pt-2 sm:pt-0 -mt-5 lg:mt-0">
                <motion.button className="rounded-full bg-black hover:bg-gray-900 px-2 sm:px-7 md:px-8 py-1 mb-10 sm:py-3 text-[8px] sm:text-sm md:text-base font-semibold text-white transition ">
                  Talk to Our Team
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: false }}
          className="mx-auto ml-0 w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-0 lg:ml-10 lg:px-12 -mt-42 lg:mt-0"
        >
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-8 xl:grid-cols-4  ">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
              className=" max-w-sm space-y-5 xl:col-span-1  w-400"
            >
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={RanLogo} alt="Ran AI" className="h-14 w-14" />
              </motion.div>
              <p
                className="text-black mr-22 lg:mr-0 text-[12px] sm:text-[15px] md:text-[16px] lg:text-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                We help forward-thinking companies design, integrate, and scale
                AI systems that reduce costs, unlock efficiency, and accelerate
                growth.
              </p>
              <motion.div
                className="flex gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false }}
              >
                {socials.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.08, duration: 0.4 }}
                    viewport={{ once: false }}
                    whileHover={{ scale: 1.15, rotateZ: 8 }}
                  >
                    {item.icon}
                  </motion.a>
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
                    className="flex-1 rounded-full border border-slate-300 px-4 sm:px-5 py-3 text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500 mr-20 lg:mr-0"
                    whileFocus={{
                      borderColor: "#3b82f6",
                      boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)",
                    }}
                  />
                  <motion.button
                    className="rounded-full bg-[#123ABD] px-5 sm:px-6 py-2 text-xs sm:text-sm font-light text-white hover:bg-blue-700 transition whitespace-nowrap mr-20 lg:mr-0"
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
              className="grid grid-cols-2 gap-6 sm:gap-8 md:ml-0 md:gap-10 xl:col-span-2 lg:ml-12 xl:ml-40 2xl:ml-32"
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
              className="  lg:col-span-1 xl:col-span-1 2xl:col-span-1 lg:ml-10  2xl:ml-32"
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
            className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-6 sm:pt-8 md:pt-10 mb-10 flex flex-col items-end text-right"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: false }}
          >
            {/* TEXT */}
            <p
              className="text-[#454545] text-[13px] sm:text-[14px] md:text-[15px]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              © 2026 Ran AI. All rights reserved.
            </p>

            {/* LINKS */}
            <motion.div
              className="flex flex-wrap justify-end gap-2 mt-1 text-[13px] sm:text-[14px]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
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
                    className="flex items-center"
                  >
                    {item}
                    {idx < 2 && <span className="mx-2 text-gray-400">|</span>}
                  </motion.span>
                ),
              )}
            </motion.div>
          </motion.div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default Footer;
