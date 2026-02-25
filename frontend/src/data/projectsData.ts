// Project data - Edit this file to add/update/remove projects
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management. Built with modern technologies for seamless shopping experience.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce.jpg", // Replace with the image in public/projects/
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/CosmosKyeremeh/project-name",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Perfect for remote teams.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    image: "/projects/taskapp.jpg",
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/CosmosKyeremeh/project-name",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with location-based forecasts, interactive maps, and historical data visualization. Clean UI with detailed weather metrics.",
    technologies: ["Next.js", "API Integration", "Charts.js"],
    image: "/projects/weather.jpg",
    demoUrl: "https://your-demo-link.com",
    githubUrl: "https://github.com/CosmosKyeremeh/project-name",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with animated sections, contact form integration, and content management. Built with Next.js and TypeScript.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.jpg",
    demoUrl: "https://your-portfolio.com",
    githubUrl: "https://github.com/CosmosKyeremeh/cosmos-portfolio",
    featured: true,
  },
];