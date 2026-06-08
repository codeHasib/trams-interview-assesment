import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative w-full bg-[#E2F0D9]/40 overflow-x-hidden pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      {/* ================= BACKGROUND DECORATIVE SHAPES ================= */}
      {/* Top Left Red Arrow Paths */}
      <div className="absolute left-[15%] top-8 w-24 pointer-events-none select-none hidden md:block">
        <svg
          viewBox="0 0 100 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-80"
        >
          <path
            d="M10,5 Q30,-5 50,25"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M45,20 L50,25 L52,18"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M40,5 Q60,-5 80,25"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M75,20 L80,25 L82,18"
            stroke="#FF6B6B"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Right Purple Semi-Circle */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        whileInView={{ scale: 1, opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute right-[-20px] sm:right-0 top-16 w-16 h-32 sm:w-24 sm:h-48 bg-[#8A4FFF] rounded-l-full pointer-events-none select-none"
      />

      {/* ================= NEWSLETTER CALL TO ACTION ================= */}
      <div className="max-w-4xl mx-auto text-center border-b border-neutral-300/70 pb-16 sm:pb-24 relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-[64px] font-normal text-neutral-900 tracking-tight leading-[1.15]"
        >
          Subscribe to <br />
          our newsletter
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 sm:mt-6 text-neutral-600 text-xs sm:text-sm font-normal tracking-wide"
        >
          To make your stay special and even more memorable
        </motion.p>

        {/* Pill Button wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10"
        >
          <button className="px-8 py-3.5 bg-black text-white text-xs sm:text-sm font-medium rounded-full tracking-wide shadow-sm hover:bg-neutral-900 active:scale-[0.98] transition-all duration-200">
            Subscribe Now
          </button>
        </motion.div>
      </div>

      {/* ================= FOOTER LINKS LINKS LAYOUT ================= */}
      <div className="max-w-7xl mx-auto pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-y-10 md:gap-x-8 text-left">
          {/* Column 1: Company */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-base font-normal tracking-tight text-neutral-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 font-normal">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Terms & Policies */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-base font-normal tracking-tight text-neutral-900">
              Terms & Policies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 font-normal">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Explore
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-base font-normal tracking-tight text-neutral-900">
              Follow Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 font-normal">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Youtube
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact / Address Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-base font-normal tracking-tight text-neutral-900">
              Terms & Policies
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
              <p>
                1498w Fluton ste, STE <br />
                2D Chicago, IL 63867.
              </p>
              <p className="block">(123) 456789000</p>
              <p>
                <a
                  href="mailto:info@elementum.com"
                  className="hover:text-black transition-colors underline underline-offset-2"
                >
                  info@elementum.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright notice Bar */}
        <div className="mt-16 pt-8 border-t border-neutral-300/30 text-center text-[11px] text-neutral-500 tracking-wide font-normal">
          ©2026 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
