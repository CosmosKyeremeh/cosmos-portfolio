"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navbar - Top */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-rich-black/95 backdrop-blur-md shadow-lg border-b border-yale-blue/20"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              Cosmos<span className="text-saffron">.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-satin-gold transition-colors duration-300 font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Bottom */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-rich-black/95 backdrop-blur-md border-t border-yale-blue/20 shadow-lg"
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-around">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center gap-1 text-gray-400 hover:text-satin-gold transition-colors duration-300 min-w-[60px]"
                >
                  <Icon size={20} />
                  <span className="text-xs font-medium">{link.name}</span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Top Header - Logo Only */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-rich-black/95 backdrop-blur-md shadow-lg border-b border-yale-blue/20"
            : "bg-transparent"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold gradient-text cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            Cosmos<span className="text-saffron">.</span>
          </motion.a>

          {/* Optional: I might add a menu button or settings button incase the need arise in the future use */}
        </div>
      </motion.div>

      {/* Spacer for mobile top header */}
      <div className="md:hidden h-16"></div>

      {/* Spacer for mobile bottom navbar */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

export default Navbar;