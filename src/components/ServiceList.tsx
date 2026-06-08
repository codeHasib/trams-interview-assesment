import React from "react";
import { motion } from "framer-motion";

const ServicesList = () => {
  const services = [
    {
      id: 1,
      category: "Office of multiple interest content",
      title: "Collaborative & partnership",
      link: "#",
      hasBadge: false,
    },
    {
      id: 2,
      category: "The hanger US Air force digital experimental",
      title: "We talk about our weight",
      link: "#",
      hasBadge: false,
    },
    {
      id: 3,
      category: "Delta faucet content, social, digital",
      title: "Piloting digital confidence",
      link: "#",
      hasBadge: true, // Displays the overlapping sticker circle overlay
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-x-hidden py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative Red Smooth Wavy Curve Background */}
      <div className="absolute right-0 top-0 w-1/2 max-w-xl pointer-events-none select-none z-0 hidden md:block">
        <svg
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto opacity-90"
        >
          <path
            d="M50 250 C 70 100, 180 80, 260 140 C 320 180, 360 80, 420 110"
            stroke="#FF6B6B"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER SECTION ================= */}
        <div className="mb-12 md:mb-20 max-w-3xl">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-[64px] font-normal text-neutral-900 tracking-tight leading-[1.15]"
          >
            What we{" "}
            <span className="relative inline-block px-5 py-0.5 bg-[#E2F0D9] rounded-full mx-0.5 whitespace-nowrap">
              can
            </span>{" "}
            <br />
            <span className="relative inline-block">
              offer you!
              {/* Double yellow underline highlight */}
              <svg
                className="absolute left-0 -bottom-2 w-full h-3 text-[#FCD34D]"
                viewBox="0 0 200 10"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 5C40 1 120 1 198 3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M10 9C55 6 125 5 170 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h2>
        </div>

        {/* ================= SERVICES CONTAINER ================= */}
        <div className="border-t border-neutral-200">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-neutral-200 group"
            >
              <a
                href={service.link}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-12 transition-colors duration-300 hover:bg-neutral-50/50 px-2 sm:px-4 relative"
              >
                {/* 1. Left Description Metadata block */}
                <div className="md:col-span-3 text-neutral-500 text-xs sm:text-sm max-w-xs leading-relaxed font-normal">
                  {service.category}
                </div>

                {/* 2. Middle Large Bold Title Header */}
                <div className="md:col-span-8 relative flex items-center pr-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-normal text-neutral-900 tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>

                  {/* Overlapping circular graphic badge (Only on item 3) */}
                  {service.hasBadge && (
                    <div className="absolute right-12 lg:right-24 w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-neutral-200 bg-amber-400 flex items-center justify-center rotate-[-10deg] shadow-sm select-none pointer-events-none transform group-hover:scale-105 group-hover:rotate-[5deg] transition-all duration-300">
                      {/* Placeholder graphic simulating the torn collage aesthetic */}
                      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-300 via-amber-500 to-orange-600 flex flex-col justify-center items-center text-[8px] font-bold text-black uppercase tracking-tighter leading-none">
                        <span>Conf</span>
                        <span>-Idence</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Right Arrow Indicator */}
                <div className="md:col-span-1 flex justify-end">
                  <div className="w-10 h-[1px] bg-neutral-900 relative transition-all duration-300 group-hover:w-14">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 rotate-45 w-1.5 h-1.5 border-t border-r border-neutral-900 block" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
