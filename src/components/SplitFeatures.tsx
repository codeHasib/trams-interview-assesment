import React from "react";
import { motion } from "framer-motion";

const SplitFeatures = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Dynamic Red Wavy/Z-Line SVG running through the section background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 hidden lg:block">
        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-90"
        >
          <path
            d="M1350 250 C 1100 450, 900 150, 500 500 C 300 700, 200 400, 100 650"
            stroke="#FF6B6B"
            strokeWidth="2.5"
            strokeDasharray="1 1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-24 md:space-y-36 relative z-10">
        {/* ================= FIRST BLOCK (Text Left, Image Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-6 space-y-6 max-w-xl lg:max-w-none"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal text-neutral-900 tracking-tight leading-[1.2]">
              The{" "}
              <span className="relative inline-block">
                thinkers
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#FCD34D]"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7C40 2 120 2 198 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              and <br className="hidden sm:inline" />
              doers{" "}
              <span className="relative inline-block px-4 py-0.5 bg-[#FFD2E6] rounded-full mx-0.5 whitespace-nowrap">
                were changing
              </span>{" "}
              <br className="hidden sm:inline" />
              the{" "}
              <span className="relative inline-block px-4 py-0.5 bg-[#E2F0D9] rounded-full mx-0.5 whitespace-nowrap">
                status
              </span>{" "}
              Quo with
            </h2>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md">
              We are a team of strategists, designers, communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>

            {/* Read More Link with Tail Arrow */}
            <div className="pt-2">
              <a
                href="#"
                className="group inline-flex items-center space-x-4 text-xs font-medium uppercase tracking-wider text-neutral-900"
              >
                <span>Read more</span>
                <span className="w-12 h-[1px] bg-neutral-900 block relative transition-all duration-300 group-hover:w-16">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 border-t border-r border-neutral-900 block" />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Image Container Column */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              {/* Soft pink background blur accent */}
              <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#FFD2E6] rounded-full filter blur-3xl opacity-40 mix-blend-multiply" />

              {/* Pink Accent Rectangle from image */}
              <div className="absolute top-4 -right-4 w-16 h-20 bg-[#FF6B6B] opacity-80 rounded-sm rotate-[12deg] z-0" />

              {/* Main Rounded Circular Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-full overflow-hidden border border-neutral-100 shadow-sm relative z-10 bg-neutral-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Team collaboration session"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= SECOND BLOCK (Image Left, Text Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center lg:pt-12">
          {/* Left Image Container Column (Reordered to top on mobile using Tailwind order classes) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]">
              {/* Salmon colored background triangles */}
              <div className="absolute -left-8 top-12 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[60px] border-b-[#FF6B6B] rotate-[-15deg] z-0" />
              <div className="absolute -right-4 -bottom-4 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[80px] border-b-[#FF6B6B] rotate-[25deg] z-0" />

              {/* Main Rounded Circular Image Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full h-full rounded-full overflow-hidden border border-neutral-100 shadow-sm relative z-10 bg-neutral-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=800&q=80"
                  alt="Creative workspace planning"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Text Column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="order-1 lg:order-2 lg:col-span-6 space-y-6 max-w-xl lg:max-w-none lg:pl-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-normal text-neutral-900 tracking-tight leading-[1.2]">
              See{" "}
              <span className="relative inline-block px-4 py-0.5 bg-[#E2F0D9] rounded-full mx-0.5 whitespace-nowrap">
                how we can
              </span>{" "}
              <br />
              help you{" "}
              <span className="relative inline-block">
                progress
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#FCD34D]"
                  viewBox="0 0 200 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 7C40 2 120 2 198 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed max-w-md">
              We add a layer of fearless insights and action that allows
              changemakers to accelerate their progress in areas such as brand,
              design digital, comms and social research.
            </p>

            {/* Read More Link with Tail Arrow */}
            <div className="pt-2">
              <a
                href="#"
                className="group inline-flex items-center space-x-4 text-xs font-medium uppercase tracking-wider text-neutral-900"
              >
                <span>Read more</span>
                <span className="w-12 h-[1px] bg-neutral-900 block relative transition-all duration-300 group-hover:w-16">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 border-t border-r border-neutral-900 block" />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SplitFeatures;
