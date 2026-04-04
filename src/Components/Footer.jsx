import React from "react";
import RanLogo from "../assets/Images/RanLogo.png";
import { FiFacebook, FiLinkedin, FiInstagram, FiYoutube } from "react-icons/fi";
import heroImage from "../assets/images/AIVoice/img.png";

const Footer = () => {
  return (
    <div className="bg-white rounded-[60px] border border-slate-200 text-slate-700 overflow-hidden ml-20 mr-20 mb-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl p-10 text-white sm:p-10 lg:p-10 ml-5 mr-5 mt-6">
        {/* Background Image */}
        <img
          src={heroImage}
          alt="AI cube"
          className="absolute inset-0 h-full w-full "
        />
        <div className="absolute inset-0 "></div> {/* overlay */}
        {/* Content */}
        <div className="relative flex flex-col items-center justify-center text-center h-full gap-6 max-w-7xl mx-auto">
          <h3 className="text-3xl font-semibold sm:text-4xl lg:text-4xl">
            Ready to build AI that
            <br />
            works for your business?
          </h3>

          <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 mt-18">
            Book a Strategy Call
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img src={RanLogo} alt="Ran AI" className="h-14 w-14" />
            </div>
            <p className="text-sm text-slate-600">
              We help forward-thinking companies design, integrate, and scale AI
              systems that reduce costs, unlock efficiency, and accelerate
              growth.
            </p>
            <div className="flex gap-3">
              <button className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800">
                <FiFacebook size={20} />
              </button>
              <button className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800">
                <FiYoutube size={20} />
              </button>
              <button className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800">
                <FiLinkedin size={20} />
              </button>
              <button className="h-9 w-9 rounded-lg bg-black flex items-center justify-center text-white hover:bg-slate-800">
                <FiInstagram size={20} />
              </button>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="mb-3 text-sm font-semibold text-black">
                Subscribe to Our Newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
                <button className="rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Links & Legal */}
          <div className="grid grid-cols-2 gap-8 xl:col-span-2 ml-30">
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-black">
                Links
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Services</li>
                <li>Industries</li>
                <li>Startup Launchpad</li>
                <li>About Us</li>
                <li>Products</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-black">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>Privacy Policy</li>
                <li>Terms of services</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-black">
              Contacts
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>ran-ai@gmail.com</li>
              <li>+92 300 xxxxxxxx</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© 2025 Ran AI. All rights reserved.</p>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
