"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/CosmosKyeremeh", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/cosmos-kyeremeh-2b33882b3", label: "LinkedIn" },
    { icon: Mail, href: "mailto:kyeremehcosmos938@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yale-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-satin-gold/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Picture - Left Side on Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Animated border rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yale-blue via-satin-gold to-saffron animate-spin-slow p-1">
                <div className="w-full h-full rounded-full bg-rich-black"></div>
              </div>
              
              {/* Profile image container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-yale-blue/50 shadow-2xl shadow-satin-gold/20 bg-gradient-to-br from-yale-blue to-oxford-blue">
                <Image
                  src="/profile.jpg"
                  alt="Cosmos Kyeremeh"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  onError={(e) => {
                    // Hide image on error
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-8xl font-bold text-satin-gold/30">CK</span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-saffron/20 blur-3xl animate-pulse"></div>
            </div>
          </motion.div>

          {/* Text Content - Right Side on Desktop */}
          <div className="text-center lg:text-left order-2 lg:order-2 flex-1">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-satin-gold text-lg sm:text-xl mb-4 font-mono"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Cosmos Kyeremeh</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 h-10 sm:h-12"
            >
              <TypeAnimation
                sequence={[
                  "Frontend Developer",
                  2000,
                  "React & TypeScript Enthusiast",
                  2000,
                  "Aspiring Full-Stack Developer",
                  2000,
                  "Problem Solver",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Building modern, scalable web applications with cutting-edge technologies.
              Passionate about creating seamless user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <a href="#projects" className="btn-primary w-full sm:w-auto">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary w-full sm:w-auto">
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <FileText size={20} />
                Download CV
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-satin-gold transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={28} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-satin-gold rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-satin-gold rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;