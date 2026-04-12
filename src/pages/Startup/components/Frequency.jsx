
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who can apply to the Startup Launchpad?",
    answer:
      "Any early-stage startup founder or team with a validated idea can apply. We welcome applicants from all industries and backgrounds.",
  },
  {
    question: "What is the duration of the program?",
    answer:
      "The Startup Launchpad runs for 12 weeks with access to mentors, workshops, and networking events.",
  },
  {
    question: "Is there any cost to join the program?",
    answer:
      "The program is completely free to join. We believe in removing financial barriers.",
  },
  {
    question: "How do I submit my application?",
    answer:
      "Fill out the online application form on our website with your startup idea and current stage.",
  },
  {
    question: "When does the next cohort start?",
    answer:
      "Our next cohort begins in Q2 2026. Apply early to secure your spot.",
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-[18px] text-left text-[15px] text-gray-900 font-normal cursor-pointer"
      >
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {question}
        </motion.span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-[18px] h-[18px] text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </motion.svg>
      </button>
      <motion.div
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <motion.p
          className="px-5 pb-[18px] text-sm text-gray-500 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
          transition={{ duration: 0.5 }}
        >
          {answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#f2f1ef] px-4 py-12 sm:px-6 sm:py-16">
      <motion.h1
        className="mb-8 px-2 text-center text-3xl font-medium tracking-tight text-gray-900 sm:mb-10 sm:text-4xl md:text-5xl"
        style={{ fontFamily: "Geist, sans-serif" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>
      <div className="w-full max-w-[680px] flex flex-col gap-[10px] text-[#101828]">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}