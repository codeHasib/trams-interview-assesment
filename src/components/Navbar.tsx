import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#' },
    { title: 'Studio', href: '#' },
    { title: 'Services', href: '#' },
    { title: 'Contact', href: '#' },
    { title: 'FAQs', href: '#' },
  ];

  // Framer Motion variants for the mobile menu drop-down
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.15, ease: 'easeIn' }
    }
  };

  return (
    <nav className="w-full bg-white border-b border-neutral-100 text-neutral-900 z-999 sticky top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Name */}
        <div className="text-xl font-medium tracking-tight select-none">
          Elementum
        </div>

        {/* Desktop Navigation Links (Hidden on mobile/tablet) */}
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-neutral-600">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="hover:text-black transition-colors duration-200"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Hamburger Menu Button (Visible on mobile/tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-black block transition-transform duration-200"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
            className="w-6 h-[1.5px] bg-black block transition-transform duration-200"
          />
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-white border-b border-neutral-200 shadow-sm md:hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 font-medium text-sm text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-black transition-colors duration-150 py-1"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;