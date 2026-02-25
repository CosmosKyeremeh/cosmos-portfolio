"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(projectsData); // Start with local data
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Try to fetch from backend API
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
        
        const response = await fetch(`${API_URL}/api/projects`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.projects && data.projects.length > 0) {
            setProjects(data.projects);
          }
        } else {
          // If API fails, keep using local data (no error shown to user)
          console.log("API not available, using local project data");
        }
      } catch (err) {
        // If API fails, keep using local data (no error shown to user)
        console.log("API not available, using local project data");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in building modern web applications.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 size={48} className="text-satin-gold animate-spin" />
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 mb-4 bg-oxford-blue rounded-lg overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ) : null}
                  {/* Fallback gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yale-blue/50 to-satin-gold/30 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white/20">
                      {project.title[0]}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-rich-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-satin-gold rounded-full hover:bg-saffron transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={20} className="text-rich-black" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-yale-blue rounded-full hover:bg-oxford-blue transition-colors"
                      aria-label="View Code"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-satin-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-yale-blue/30 text-satin-gold rounded-full border border-satin-gold/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/CosmosKyeremeh" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-block"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
