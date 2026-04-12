// // src/components/GetInTouch.jsx
// import contactImg from "../../assets/images/industries/contact1.png";

// export default function GetInTouch() {
//   return (
//     <section className="bg-white py-16 px-6">
//       {/* Heading */}
//       <h1 className="text-center text-5xl font-medium text-gray-900 mb-12"
//         style={{ fontFamily: "Geist, sans-serif" }}>
//         Get in touch
//       </h1>

//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
//         {/* Left: Form */}
//         <div className="flex-1 w-full mt-5">
//           {/* Row 1: Name + Company */}
//           <div className="flex gap-4 mb-5">
//             <div className="flex-1">
//               <label className="block text-sm text-gray-700 mb-1">
//                 Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm text-gray-700 mb-1">
//                 Company name (optional)
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type your company name"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//           </div>

//           {/* Row 2: Email + Mobile */}
//           <div className="flex gap-4 mb-5">
//             <div className="flex-1">
//               <label className="block text-sm text-gray-700 mb-1">
//                 Email <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter email"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block text-sm text-gray-700 mb-1">
//                 Mobile (optional)
//               </label>
//               <input
//                 type="tel"
//                 placeholder="Enter mobile"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>
//           </div>

//           {/* Row 3: Subject */}
//           <div className="mb-5">
//             <label className="block text-sm text-gray-700 mb-1">
//               Subject <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter subject"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {/* Row 4: Textarea */}
//           <div className="mb-8">
//             <label className="block text-sm text-gray-700 mb-1">
//               How can we help you <span className="text-red-500">*</span>
//             </label>
//             <textarea
//               placeholder="Give us some details about your project"
//               rows={5}
//               className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <button className="bg-gray-900 text-white text-sm px-7 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
//             Let's start a conversation
//           </button>
//         </div>

//         {/* Right: Illustration */}
//         <div className="flex-1 flex items-center justify-center mt-12">
//           <img
//             src={contactImg}
//             alt="Contact illustration"
//             className="w-full max-w-sm object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
// src/components/GetInTouch.jsx
import { motion } from "framer-motion";
import contactImg from "../../assets/images/industries/contact1.png";

export default function GetInTouch() {
  return (
    <section className="overflow-x-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Heading */}
      <motion.h1
        className="mb-10 px-2 text-center text-3xl font-medium text-gray-900 sm:mb-12 sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Geist, sans-serif" }}
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get in touch
      </motion.h1>

      <div className="mx-auto flex max-w-5xl min-w-0 flex-col items-start gap-10 px-1 sm:gap-12 md:flex-row md:px-0">
        {/* Left: Form */}
        <motion.div
          className="mt-5 w-full min-w-0 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Row 1: Name + Company */}
          <motion.div
            className="mb-5 flex min-w-0 flex-col gap-4 sm:flex-row"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Company name (optional)
              </label>
              <motion.input
                type="text"
                placeholder="Type your company name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Row 2: Email + Mobile */}
          <motion.div
            className="mb-5 flex min-w-0 flex-col gap-4 sm:flex-row"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <motion.input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Mobile (optional)
              </label>
              <motion.input
                type="tel"
                placeholder="Enter mobile"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Row 3: Subject */}
          <motion.div
            className="mb-5"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <label className="block text-sm text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <motion.input
              type="text"
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Row 4: Textarea */}
          <motion.div
            className="mb-8"
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <label className="block text-sm text-gray-700 mb-1">
              How can we help you <span className="text-red-500">*</span>
            </label>
            <motion.textarea
              placeholder="Give us some details about your project"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              whileFocus={{ scale: 1.02, borderColor: "#1D4ED8" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            className="bg-gray-900 text-white text-sm px-7 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.05, backgroundColor: "#1D4ED8" }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            Let's start a conversation
          </motion.button>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="flex-1 flex items-center justify-center mt-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={contactImg}
            alt="Contact illustration"
            className="w-full max-w-sm object-contain"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}