import React from 'react';
import { BsStars } from "react-icons/bs";
const cards = [
  {
    id: 1,
    title: 'Poor Return on Investment',
    subtitle: '73% of AI projects fail to deliver ROI',
    description:
      'AI initiatives often launch without clear success metrics or alignment to business outcomes, resulting in high spend and low impact.',
    number: '01',
  },
  {
    id: 2,
    title: 'Misaligned AI Tools',
    subtitle: '73% of AI projects fail to deliver ROI',
    description:
      'Many AI solutions are implemented in isolation and fail to integrate with core workflows, decision systems, or performance indicators.',
    number: '02',
  },
  {
    id: 3,
    title: 'Slow Time to Production',
    subtitle: '73% of AI projects fail to deliver ROI',
    description:
      'Extended development cycles, experimentation overhead, and technical debt delay AI from reaching real-world usage.',
    number: '03',
  },
  {
    id: 4,
    title: 'Low User Adoption',
    subtitle: '73% of AI projects fail to deliver ROI',
    description:
      'Overly complex interfaces and unclear value propositions lead to resistance from operational teams and end users.',
    number: '04',
  },
];

const Initiative = () => {
  return (
    <section className="py-20  text-slate-900">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-semibold leading-tight md:text-4xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            Why Most <span className="text-blue-600">AI Initiatives</span> Fail
            <br></br>
            <span>to Deliver Value</span>
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-base md:text-lg text-slate-600">
            Despite widespread adoption, most AI initiatives fail to generate
            measurable business impact. Organizations commonly face the
            following challenges:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card, index) => {
            const isLeftTop = index === 0 || index === 1; // card 1 & 4
            const isRightTop = index === 1 || index === 2; // card 2 & 3

            return (
              <article
                key={card.id}
                className="relative overflow-hidden rounded-[40px] border border-blue-200 bg-blue-50 shadow-sm transition hover:shadow-md h-50 p-6 flex flex-col justify-between"
              >
                {/* TOP CONTENT */}
                <div className={`${isLeftTop ? "text-left" : "text-right"}`}>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#4B5162]">
                    {card.subtitle}
                  </p>
                </div>

                {/* DESCRIPTION (BOTTOM OPPOSITE SIDE) */}
                <div
                  className={`absolute bottom-6 ${
                    isLeftTop ? "right-6 text-left" : "left-6 text-left"
                  } max-w-[220px]`}
                >
                  <p className="text-sm leading-relaxed text-slate-600">
                    {card.description}
                  </p>
                </div>

                {/* NUMBER */}
                <div
                  className={`pointer-events-none absolute -bottom-11 ${
                    isLeftTop ? "left-0" : "right-0"
                  } opacity-30`}
                >
                  <span
                    className="text-[190px]  leading-none text-blue-400"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {card.number}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="rounded-full border border-slate-200 bg-white px-8 py-3 text-center text-sm font-semibold text-[#4B5162] shadow-lg transition hover:shadow-xl">
            Ran AI turns potential into performance.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Initiative;