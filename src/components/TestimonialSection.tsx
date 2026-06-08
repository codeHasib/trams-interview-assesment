import React from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  // Left side avatars with responsive and absolute positions
  const leftAvatars = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
      size: "w-16 h-16 md:w-20 md:h-20",
      mdPos: "md:left-[8%] md:top-[15%]",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
      size: "w-10 h-10 md:w-14 md:h-14",
      mdPos: "md:left-[4%] md:top-[42%]",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
      size: "w-24 h-24 md:w-32 md:h-32",
      mdPos: "md:left-[11%] md:bottom-[15%]",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      size: "w-14 h-14 md:w-18 md:h-18",
      mdPos: "md:left-[2%] md:bottom-[5%]",
    },
  ];

  // Right side avatars with responsive and absolute positions
  const rightAvatars = [
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
      size: "w-12 h-12 md:w-16 md:h-16",
      mdPos: "md:right-[20%] md:top-[28%]",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80",
      size: "w-18 h-18 md:w-24 md:h-24",
      mdPos: "md:right-[6%] md:top-[12%]",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=256&q=80",
      size: "w-14 h-14 md:w-20 md:h-20",
      mdPos: "md:right-[18%] md:top-[48%]",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      size: "w-28 h-28 md:w-[150px] md:h-[150px]",
      mdPos: "md:right-[3%] md:bottom-[5%]",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-x-hidden py-16 md:py-28 px-4 sm:px-6 lg:px-8">
      {/* Container holding the central text framework */}
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* ================= HEADER TIMELINE TITLE ================= */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-[56px] lg:text-[64px] font-normal text-neutral-900 tracking-tight leading-[1.2] mb-8 md:mb-12"
        >
          <span className="relative inline-block px-5 py-0.5 bg-[#E2F0D9] rounded-full mx-0.5 whitespace-nowrap">
            What
          </span>{" "}
          our customer <br />
          says{" "}
          <span className="relative inline-block">
            About Us
            {/* Smooth triple yellow underlines matching your branding language */}
            <svg
              className="absolute left-0 -bottom-2 w-full h-3 text-[#FCD34D]"
              viewBox="0 0 200 10"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 6C40 2 120 2 198 4"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M12 9C55 6 125 5 174 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h2>

        {/* ================= CENTRAL TESTIMONIAL CARD ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-full max-w-2xl bg-[#F4F9F5] rounded-3xl p-6 sm:p-10 md:p-12 text-center border border-neutral-100/60 shadow-sm"
        >
          {/* Top Left Decorative Quote Graphic */}
          <span className="absolute top-4 left-6 text-5xl sm:text-6xl text-neutral-300/70 font-serif select-none pointer-events-none">
            “
          </span>

          <p className="text-neutral-800 text-sm sm:text-base md:text-[17px] leading-relaxed font-normal tracking-wide px-2 sm:px-6">
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>

          {/* Bottom Right Decorative Quote Graphic */}
          <span className="absolute bottom-[-10px] right-6 text-5xl sm:text-6xl text-neutral-300/70 font-serif select-none pointer-events-none">
            ”
          </span>
        </motion.div>
      </div>

      {/* ================= SCATTERED BACKGROUND AVATARS ================= */}
      {/* Mobile/Tablet: Rendered as clean, non-breaking wrapping row blocks below the content cards.
        Desktop (md and up): Transitions smoothly into full isolated viewport scatter placements.
      */}
      <div className="w-full max-w-5xl mx-auto mt-12 md:mt-0 px-4 md:px-0 md:absolute md:inset-0 md:max-w-none md:h-full pointer-events-none select-none">
        {/* Left Side Cluster Container */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:block md:w-full md:h-full">
          {leftAvatars.map((avatar, idx) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.05,
                type: "spring",
                stiffness: 90,
                damping: 16,
              }}
              className={`
                relative md:absolute ${avatar.mdPos} ${avatar.size}
                rounded-full overflow-hidden border-2 md:border-[3px] border-white shadow-sm bg-neutral-100 pointer-events-auto
              `}
            >
              <img
                src={avatar.src}
                alt="Client profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {/* Right Side Cluster Container */}
          {rightAvatars.map((avatar, idx) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: (idx + 4) * 0.05,
                type: "spring",
                stiffness: 90,
                damping: 16,
              }}
              className={`
                relative md:absolute ${avatar.mdPos} ${avatar.size}
                rounded-full overflow-hidden border-2 md:border-[3px] border-white shadow-sm bg-neutral-100 pointer-events-auto
              `}
            >
              <img
                src={avatar.src}
                alt="Client profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
