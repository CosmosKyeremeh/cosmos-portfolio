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
  title: "Local Borga",
  description: "Premium Ghanaian staples and bespoke custom milling — delivered intercontinentally. Features real-time production tracking, a live admin command center, and printable shipping labels.",
  technologies: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
  image: "/projects/localBorgaPreview.png",
  demoUrl: "https://local-borga.vercel.app/",
  githubUrl: "https://github.com/CosmosKyeremeh/local-borga",
  featured: true,
},
  {
    id: 2,
    title: "Movie Box",
    description: "A modern Netflix-inspired movie streaming platform featuring PWA capabilities, offline support, and TMDB API integration. Browse thousands of movies and TV shows with advanced search, personalized watchlists, and installable app functionality.",
    technologies: ["JavaScript (ES6+)", "PWA", "IndexedDB", "TMDB API", "Service Workers"],
    image: "/projects/moviebox.png",
    demoUrl: "https://cosmoskyeremeh.github.io/movie-box/",
    githubUrl: "https://github.com/CosmosKyeremeh/movie-box",
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
    description: "Modern, responsive portfolio website with animated sections, contact form integration, and content management. Built with HTML, css and javascript.",
    technologies: ["Tailwind CSS", "Framer Motion"],
    image: "/projects/basic-porfolio1.png",
    demoUrl: "https://cosmoskyeremeh.github.io/Basic-portfolio/",
    githubUrl: "https://github.com/CosmosKyeremeh/cosmos-portfolio",
    featured: true,
  },
];