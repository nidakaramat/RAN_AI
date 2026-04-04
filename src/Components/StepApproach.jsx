import React from 'react';
import img1 from '../assets/images/4step/img1.png';
import img2 from '../assets/images/4step/img2.png';
import img3 from '../assets/images/4step/img3.png';
import img4 from '../assets/images/4step/img4.png';
import { BsStars } from "react-icons/bs";
const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Prioritization',
    timeline: 'Timeline: 1-2 weeks',
    description:
      'We identify the highest-impact AI opportunities and align them directly with your business goals and success metrics.',
    bullets: [
      'Stakeholder interviews ',
      'Data readiness and feasibility assessment',
      'ROI and impact modeling',
      'Prioritized AI roadmap',
    ],
    image: img1,
  },
  {
    id: 2,
    number: '02',
    title: 'AI Architecture & Design',
    timeline: 'Timeline: 2-3 weeks',
    description:
      'We design secure, scalable AI systems that integrate seamlessly with your existing infrastructure and workflows.',

    bullets: [

      'End-to-end solution architecture',
      'Integration and workflow mapping',
      'Security and compliance review',
      'Prototype and solution design',
    ],
    image: img2,
  },
  {
    id: 3,
    number: '03',
    title: 'Deployment & Scaling',
    timeline: 'Timeline: 3-4 weeks',
    description:
      'We move AI from concept to production through rapid deployment, enabling adoption, performance, and reliability.',
    bullets: [

      'Phased production rollout',
      'User onboarding and enablement',
      'Performance monitoring and optimization',
      'Continuous feedback loops',
    ],
    image: img3,
  },
  {
    id: 4,
    number: '04',
    title: 'Optimization & Growth',
    timeline: 'Timeline: Ongoing',
    description:
      'We continuously refine models, expand capabilities, and track real business impact over time.',
    bullets: [

      'AI testing and experimentation',
      'Model and workflow refinement',
      'Feature expansion and scaling',
      'ROI and impact tracking',
    ],
    image: img4,}
];

export default function FourStepApproach() {
  return (
    <section className="py-20 bg-white text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div>
            <p className="inline-flex items-center gap-1 rounded-full bg-white border border-gray-200 px-4 py-1 text-xs font-semibold shadow-md text-gray-600">
              <BsStars className="text-blue-500 text-sm" />
              Our Methodology
            </p>
          </div>
          <h2 className="mt-8 text-4xl font-semibold md:text-3xl">
            A Proven 4-Step Approach
            <br />
            to <span className="text-[#123ABD]">Impactful AI</span>
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-base md:text-lg text-[#767676]">
            A structured methodology designed to deliver measurable
            <br />
            results in weeks — not years.
          </p>
        </div>

        <div className="space-y-10">
          {steps.map((step, idx) => {
            const even = idx % 2 === 1;
            return (
              <div
                key={step.id}
                className={`flex flex-col gap-8 rounded-3xl p-8  md:flex-row ${
                  even ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-1 flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-[#123ABD]">
                      {step.number}
                    </span>
                    {/* Line with reduced width */}
                    <span className="h-[2px] bg-[#123ABD] w-5"></span>{" "}
                    {/* w-20 = 5rem */}
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-600 ml-17">
                    {step.timeline}
                  </p>
                  <p className="mt-2 text-base text-[#767676]">
                    {step.description}
                  </p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-[#767676]" />
                        <span className="text-[#767676]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex h-58 w-full flex-1 items-center justify-center rounded-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-contain rounded-2xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
