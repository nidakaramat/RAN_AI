import React from 'react'
import img1 from '../assets/images/Mainsection/img1.png'
import img2 from '../assets/images/Mainsection/img2.png'
import img3 from '../assets/images/Mainsection/img3.png'
import img4 from '../assets/images/Mainsection/img4.png'
import img5 from '../assets/images/Mainsection/img5.png'
import img6 from '../assets/images/Mainsection/img6.png'
import img7 from '../assets/images/Mainsection/img7.png'
import img8 from '../assets/images/Mainsection/img8.png'
import img9 from '../assets/images/Mainsection/img9.png'
import img10 from '../assets/images/Mainsection/img10.png'

const clientImages = [img1, img2, img3, img4, img5]
const overlayCards = [
  { label: "Saas", image: img6 },
  { label: "Logistic", image: img7 },
  { label: "Healthcare", image: img8 },
  { label: "Finance", image: img9 },
  { label: "Retail", image: img10 },
];

const EnterpriseAI = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-18 text-slate-800"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-4 pb-24 md:px-8">
        <div className="relative overflow-hidden  px-8 py-20  backdrop-blur-sm sm:px-12 lg:px-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4 shadow-lg border border-blue-100">
              <div className="flex items-center -space-x-3">
                {clientImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`client-${idx + 1}`}
                    className="h-10 w-10 rounded-full  object-cover "
                  />
                ))}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-700">
                  115+ happy clients
                </span>
              </div>
            </div>
            <h1 className="max-w-4xl text-3xl font-semibold font-Geist leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              Enterprise <span className="text-blue-600">AI Solutions</span>{" "}
              That Deliver Real Results
            </h1>
            <p className="max-w-2xl text-base text-slate-600 sm:text-lg">
              Ran AI designs, builds, and deploys custom AI systems that help
              businesses automate operations, improve decision-making, and scale
              efficiently.
            </p>
            <a
              href="#services"
              className="rounded-full bg-[#100202] px-10 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(112,99,255,0.45)] transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(99,102,241,0.55)]"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Overlay Cards Section */}
          <div className="w-full flex justify-center mt-5 overflow-hidden">
            {/* MAIN CONTAINER */}
            <div className="hidden md:flex relative w-full max-w-[1300px] h-[420px] items-end justify-center">
              {overlayCards.map((card, idx) => {
                const layout = [
                  {
                    width:250,
                    height: 300,
                    x: -390,
                    y: 50,
                    rotate: -1,
                    scale: 0.9,
                    z: 10,
                  },
                  {
                    width: 300,
                    height: 350,
                    x: -240,
                    y: 35,
                    rotate: -4,
                    scale: 0.95,
                    z: 20,
                  },
                  {
                    width: 340,
                    height: 380,
                    x: 0,
                    y: 25,
                    rotate: 0,
                    scale: 1,
                    z: 40,
                  },
                  {
                    width: 330,
                    height: 350,
                    x: 240,
                    y: 25,
                    rotate: 2,
                    scale: 0.95,
                    z: 20,
                  },
                  {
                    width: 210,
                    height: 300,
                    x: 420,
                    y: 50,
                    rotate: 4,
                    scale: 0.9,
                    z: 10,
                  },
                ][idx];

                return (
                  <div
                    key={idx}
                    className="absolute bottom-0 transition-all duration-500 ease-out hover:-translate-y-6 hover:scale-105"
                    style={{
                      width: `${layout.width}px`,
                      transform: `
          translateX(${layout.x}px)
          translateY(${layout.y}px)
          rotate(${layout.rotate}deg)
          scale(${layout.scale})
        `,
                      zIndex: layout.z,
                    }}
                  >
                    <div className="relative   ">
                      {/* IMAGE with dynamic height */}
                      <img
                        src={card.image}
                        alt={card.label}
                        className="w-full h-auto block"
                        style={{ maxHeight: `${layout.height}px` }}
                      />

                      {/* LABEL */}
                      <span className={`absolute top-4 ${idx < 2 ? 'left-4' : 'right-4'} bg-white text-black mt-2 px-3 py-1 text-[12px] font-semibold rounded-full shadow`}>
                        {card.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* MOBILE */}
            <div className="flex md:hidden gap-4 overflow-x-auto px-4 w-full">
              {overlayCards.map((card, idx) => (
                <div
                  key={idx}
                  className="min-w-[240px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.label}
                      className="h-[300px] w-full object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 px-3 py-1 text-xs font-semibold rounded-full shadow">
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute left-1/2 top-[20%] hidden h-[90px] w-[220px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-400/35 via-white/0 to-indigo-400/35 blur-xl sm:block" />
          <div className="absolute left-0 top-[75%] h-32 w-32 rounded-full bg-blue-100/50 blur-2xl" />
          <div className="absolute right-0 top-[82%] h-28 w-28 rounded-full bg-indigo-100/60 blur-2xl" />
        </div>
      </div>
    </section>
  );
}

export default EnterpriseAI
