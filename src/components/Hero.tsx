import { motion } from "framer-motion";

const FixedHero = () => {
  // Balanced image array with clear semantic identifiers
  const avatars = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:left-[4%] md:bottom-28",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:left-[14%] md:bottom-10",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      mdPos: "md:left-[26%] md:bottom-36",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:left-[38%] md:bottom-4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:right-[38%] md:bottom-20",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:right-[26%] md:bottom-6",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:right-[14%] md:bottom-40",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=256&q=80",
      mdPos: "md:right-[4%] md:bottom-16",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    } as const,
  };

  return (
    <section className="relative w-full bg-white overflow-x-hidden flex flex-col items-center justify-start pt-12 md:pt-24 pb-16 md:pb-80">
      <div className="hidden md:block absolute left-0 top-1/4 -translate-y-1/2 w-20 pointer-events-none select-none">
        <svg
          viewBox="0 0 100 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M-20,10 C20,30 40,0 20,50 C0,90 50,110 10,150 C-20,180 30,220 -10,250"
            stroke="#FF6B6B"
            strokeWidth="4"
            fill="none"
          />
          <path
            d="M-40,30 C0,50 20,20 20,70 C20,110 30,130 -10,170"
            stroke="#000000"
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="absolute right-4 md:right-[8%] top-[10%] md:top-[25%] w-10 h-20 md:w-16 md:h-32 bg-[#8A4FFF] rounded-l-full pointer-events-none select-none z-0 rotate-210"
      />
      <div className="max-w-7xl mx-auto px-4 text-center z-10">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[32px] leading-[1.25] sm:text-5xl md:text-[56px] lg:text-[64px] lg:leading-[1.15] font-normal text-neutral-900 tracking-tight max-w-5xl mx-auto"
        >
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
          and <br className="sm:hidden" /> doers{" "}
          <span className="relative inline-block px-4 py-0.5 md:px-6 md:py-1 bg-[#FFD2E6] rounded-full mx-0.5 whitespace-nowrap">
            were changing
          </span>{" "}
          <br className="hidden sm:inline md:hidden" />
          the{" "}
          <span className="relative inline-block px-4 py-0.5 md:px-6 md:py-1 bg-[#E2F0D9] rounded-full mx-0.5 whitespace-nowrap">
            status
          </span>{" "}
          Quo with
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 md:mt-8 text-neutral-600 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed px-4"
        >
          We are a team of strategists, designers, communicators, researchers.
          Together, we believe that progress only happens when you refuse to
          play things safe.
        </motion.p>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-12 md:mt-0 px-4 md:px-0 md:absolute md:bottom-0 md:left-0 md:max-w-none md:h-80 pointer-events-none select-none">
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:block md:w-full md:h-full">
          {avatars.map((avatar, index) => (
            <motion.div
              key={avatar.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.1 + index * 0.03,
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
              className={`
                relative md:absolute ${avatar.mdPos}
                w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 
                rounded-full overflow-hidden border-2 md:border-[3px] border-white shadow-md bg-neutral-100 pointer-events-auto
              `}
            >
              <img
                src={avatar.src}
                alt="Team Frame"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FixedHero;
