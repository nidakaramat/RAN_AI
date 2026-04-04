import React from "react";
import {Globe,Shield } from "lucide-react";
const Industry = () => {
  const industries = [
    { label: "Healthcare", icon: <Globe className="text-blue-800"/> },
    { label: "Finance & Banking", icon: <Shield className="text-blue-800"/> },
    { label: "Retail & eCommerce", icon: "🛒" },
    { label: "Manufacturing", icon: "🏭" },
    { label: "Telecom & Services", icon: <Shield className="text-blue-800"/> },
    { label: "Startups & SaaS", icon: "🚀" },
  ];

  return (
    <section className="py-16 bg-white -mt-50">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Industry <span className="text-[#123ABD]">Expertise</span>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4">
          {/* First row - 4 items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.slice(0, 4).map((industry) => (
              <div
                key={industry.label}
                className="mx-auto flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-lg"
              >
                <span className="text-lg">{industry.icon}</span>
                <span>{industry.label}</span>
              </div>
            ))}
          </div>

          {/* Second row - 2 items */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {industries.slice(4).map((industry) => (
              <div
                key={industry.label}
                className="mx-auto flex h-12 min-w-[220px] items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow-lg"
              >
                <span className="text-lg">{industry.icon}</span>
                <span>{industry.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
