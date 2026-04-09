import React from 'react'

const LetConnect = () => {
  return (
    <div>
      <section className=" py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center text-center md:text-left gap-60">
          {/* Left Side */}
          <div className="md:w-1/4 -mt-48 ml-30 text-medium">
            <p className="text-sm text-gray-500  ">(Let's Connect)</p>
          </div>

          {/* Right Side */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-4xl font-semibold max-w-xl">
              Let's work together to craft exceptional and unforgettable
              experiences.
            </h2>

            <p className="text-[#767676] mt-4 max-w-xl text-md">
              It's not just about creating something good; it's about designing,
              innovating, and collaborating to forge remarkable and unparalleled
              experiences.
            </p>

            <button
              className="mt-6 px-7 py-2 rounded-full bg-black text-white"
              style={{ fontFamily: "DM sans, sans-serif" }}
            >
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LetConnect