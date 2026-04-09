import { useState } from "react";

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
    <div className="bg-white rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-5 py-[18px] text-left text-[15px] text-gray-900 font-normal cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`w-[18px] h-[18px] text-gray-400 flex-shrink-0 transition-transform duration-250 ${open ? "rotate-180" : "rotate-0"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40" : "max-h-0"}`}
      >
        <p className="px-5 pb-[18px] text-sm text-gray-500 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-[#f2f1ef] min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <h1
        className="text-5xl font-medium text-gray-900 mb-10 text-center tracking-tight"
        style={{ fontFamily: "Geist, sans-serif" }}
      >
        Frequently Asked Questions
      </h1>
      <div className="w-full max-w-[680px] flex flex-col gap-[10px] text-[#101828]">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
