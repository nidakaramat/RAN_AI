// src/components/GetInTouch.jsx
import contactImg from "../../assets/images/industries/contact1.png";

export default function GetInTouch() {
  return (
    <section className="bg-white py-16 px-6">
      {/* Heading */}
      <h1 className="text-center text-5xl font-medium text-gray-900 mb-12"
        style={{ fontFamily: "Geist, sans-serif" }}>
        Get in touch
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left: Form */}
        <div className="flex-1 w-full mt-5">
          {/* Row 1: Name + Company */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Company name (optional)
              </label>
              <input
                type="text"
                placeholder="Type your company name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Row 2: Email + Mobile */}
          <div className="flex gap-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1">
                Mobile (optional)
              </label>
              <input
                type="tel"
                placeholder="Enter mobile"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Row 3: Subject */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-1">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter subject"
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Row 4: Textarea */}
          <div className="mb-8">
            <label className="block text-sm text-gray-700 mb-1">
              How can we help you <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Give us some details about your project"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button className="bg-gray-900 text-white text-sm px-7 py-3 rounded-full hover:bg-gray-700 transition-colors duration-200">
            Let's start a conversation
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1 flex items-center justify-center mt-12">
          <img
            src={contactImg}
            alt="Contact illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
}
