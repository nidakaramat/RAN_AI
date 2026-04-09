import React from "react";

const stats = [
  { value: "50+", label: "AI Systems Deployed" },
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Enterprise Clients" },
  { value: "10+", label: "Industries Served" },
];

const IntelligentSystem = () => {
  return (
    <section className="bg-gray-100 py-16 sm:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className="mx-auto max-w-3xl text-3xl font-medium leading-tight text-slate-900 sm:text-3xl"
            style={{ fontFamily: "Geist, sans-serif" }}
          >
            We build intelligent systems that transform how businesses operate,
            scale, and grow.
          </h2>
        </div>

        <div
          className="mt-12 max-w-[1050px] mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          style={{ fontFamily: "Geist, sans-serif" }}
        >
          {stats.map((item, index) => (
            <div key={item.label} className="relative px-6 py-8 pl-8 text-left ml-12">
              {/* Vertical Line for all items */}
              <span className="absolute left-0 top-1/2 h-16 w-px -translate-y-1/2 bg-slate-400"></span>

              <p className="text-5xl font-medium text-slate-900">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntelligentSystem;
