// import React from "react";
// import { motion } from "framer-motion";
// import heroImg from "../../../assets/images/about/heroImg.png";
// import { BsStars } from "react-icons/bs";

// const BuildingFuture = () => {
//   return (
//     <motion.section
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="bg-[#F8FAFF] py-12 sm:py-16 md:py-20"
//     >
//       <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="text-center"
//         >
//           <motion.span
//             className="inline-flex items-center text-[#155DFC] bg-white shadow-lg border border-blue-100 px-4 py-2 rounded-full text-[14px] sm:text-[16px] font-medium tracking-wide"
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: false }}
//             transition={{ duration: 0.6 }}
//           >
//             <BsStars className="h-4 w-4 mr-1" />
//             About Us
//           </motion.span>
//           <h1
//             className="mt-7 text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl lg:text-[60px]"
//             style={{ fontFamily: "Geist, sans-serif" }}
//           >
//             Building the Future
//             <span
//               className="block mt-2"
//               style={{ fontFamily: "Geist, sans-serif" }}
//             >
//               of Intelligent <span className="text-[#1D4ED8]">Enterprise</span>
//             </span>
//           </h1>
//         </motion.div>

//         <div className="mt-12 flex justify-center">
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             transition={{ type: "spring", stiffness: 140 }}
//             className="w-full overflow-hidden rounded-[32px] border border-white bg-white shadow-xl sm:w-[94%] md:w-[88%] lg:w-[92%]"
//           >
//             <img
//               src={heroImg}
//               alt="Building the Future"
//               className="h-auto w-full object-cover"
//             />
//           </motion.div>
//         </div>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
//           className="mx-auto mt-10 max-w-3xl  text-medium leading-relaxed text-[#767676] sm:text-[20px] lg:text-[18.9px] text-center"

//         >
//           We&apos;re on a mission to democratize enterprise AI—making
//           sophisticated artificial intelligence
//             accessible, practical, and
//           transformative for businesses of all sizes.
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// };

// export default BuildingFuture;
import React from "react";
import { inView, motion } from "framer-motion";
import heroImg from "../../../assets/images/about/heroImg.png";
import { BsStars } from "react-icons/bs";
import bgImage from "../../../assets/images/bg1.png";

const BuildingFuture = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
  relative
  w-screen
  min-h-screen
  -mt-[90px]
  pt-[110px]
  bg-cover
  bg-center
  bg-no-repeat
  flex flex-col justify-center
  bg-[#F0F4FF]
"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* LIGHT OVERLAY (optional but recommended) */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-30">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <motion.span className="inline-flex items-center text-[#155DFC] bg-white shadow-lg border border-blue-100 px-4 py-2 rounded-full text-[14px] sm:text-[16px] font-medium">
            <BsStars className="h-4 w-4 mr-1" />
            About Us
          </motion.span>

          <h1 className="mt-7 text-3xl sm:text-4xl lg:text-[60px] font-medium text-slate-900">
            Building the Future
            <span className="block mt-2">
              of Intelligent <span className="text-[#1D4ED8]">Enterprise</span>
            </span>
          </h1>
        </motion.div>

        {/* Image */}
        <div className="mt-12 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full overflow-hidden rounded-[32px] border border-white bg-white shadow-xl sm:w-[94%] md:w-[88%] lg:w-[92%]"
          >
            <img
              src={heroImg}
              alt="Building the Future"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text */}
        <motion.p className="mx-auto mt-10 max-w-3xl text-center text-[#767676] sm:text-[20px] mb-15">
          We&apos;re on a mission to democratize enterprise AI—making
          sophisticated artificial intelligence accessible, practical, and
          transformative for businesses of all sizes.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default BuildingFuture;