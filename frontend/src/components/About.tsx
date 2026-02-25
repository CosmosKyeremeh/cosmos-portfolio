"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Layout,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      color: "text-saffron",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
      color: "text-yale-blue",
    },
    {
      icon: Database,
      title: "Database",
      description: "MongoDB",
      color: "text-satin-gold",
    },
    {
      icon: Code2,
      title: "Version Control",
      description: "Git, GitHub, CI/CD",
      color: "text-saffron",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-First, Cross-Browser",
      color: "text-yale-blue",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimization, Best Practices",
      color: "text-satin-gold",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-oxford-blue/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I am an aspiring Software Engineer, a passionate Frontend Developer. Currently in my third year of Computer Science & Engineering at University of Mines and Technology.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="card group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`${skill.color} mb-4 group-hover:animate-pulse`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Projects Completed", value: "20+" },
            { label: "Technologies", value: "15+" },
            { label: "Years Experience", value: "3+" },
            { label: "Happy Clients", value: "10+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
