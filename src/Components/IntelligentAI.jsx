import React from 'react';
import img1 from '../assets/images/intelligentAI/SocialMedia1.png';
import img2 from '../assets/images/intelligentAI/SocialMedia2.png';
import img3 from '../assets/images/intelligentAI/SocialMedia3.png';
import img4 from '../assets/images/intelligentAI/SocialMedia4.png';

export default function IntelligentAI() {
  const services = [
    {
      id: 1,
      title: 'Custom AI Development',
      description: 'Develop AI systems tailored to your business logic, data, and operations. Every solution is designed for performance, security, and scale.',
      image: img1,
    },
    {
      id: 2,
      title: 'AI Automation',
      description: 'Automate repetitive workflows and business processes using AI-driven systems that reduce costs, increase speed, and remove operational bottlenecks.',
      image: img2,
    },
    {
      id: 3,
      title: 'Conversational AI Solutions',
      description: 'We design conversational AI systems for chat and voice interactions that integrate directly into your customer and internal workflows.',
      image: img3,
    },
    {
      id: 4,
      title: 'Data & AI Analytics',
      description: 'Transform raw data into actionable insights using AI-powered analytics, predictive intelligence, and real-time reporting.',
      image: img4,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-900">
      {/* Background blurs */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-xs font-semibold tracking-wide text-blue-600 shadow-sm">
            Our Services
          </span>
          <h2 className="text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl">
            Intelligent <span className="text-blue-600">AI Services</span>
          </h2>
          <p className="max-w-2xl text-5xl font-semibold text-slate-900">
            Built for Scale
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Blue divider line between image and text */}
              <div className="h-3 w-full bg-gradient-to-r from-[#4D87DE] to-[#2A4978]" />

              {/* Content Container */}
              <div className="px-6 py-6">
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
