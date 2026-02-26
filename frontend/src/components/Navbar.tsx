"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Briefcase, Mail } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20 py-4">
            {/* Logo - Image Only */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
            >
              <div className="relative w-12 h-12">
                <Image
                  src="/favicon.ico"
                  alt="Cosmos Kyeremeh"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-5">
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
                  className={`relative text-base font-medium transition-colors duration-300 py-1 ${
                    activeSection === link.href
                      ? "text-satin-gold"
                      : "text-gray-300 hover:text-satin-gold"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeDesktop"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-satin-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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
        <div className="px-4 py-2.5">
          <div className="flex items-center justify-around">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href;
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
                  className={`flex flex-col items-center gap-1 transition-colors duration-300 min-w-[60px] ${
                    isActive
                      ? "text-satin-gold"
                      : "text-gray-400 hover:text-satin-gold"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-satin-gold" : ""} />
                  <span className="text-xs font-medium">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeMobile"
                      className="w-1 h-1 rounded-full bg-satin-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
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
        <div className="px-4 py-3 flex items-center justify-between">
          {/* Logo - Image Only */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05, rotate: 6 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="relative w-10 h-10">
              <Image
                src="/favicon.ico"
                alt="Cosmos Kyeremeh"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </motion.a>
        </div>
      </motion.div>

      {/* Spacers */}
      <div className="md:hidden h-14"></div>
      <div className="hidden md:block h-14"></div>
      <div className="md:hidden h-16"></div>
    </>
  );
};

export default Navbar;