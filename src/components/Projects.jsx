import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: "Collaborative Full Stack Code Editor",
    description: "A beginner-friendly platform to write, preview, save, and download HTML, CSS, and JavaScript projects effortlessly.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CodeIDE-CViyTiCgVVabCSpSHng28MAcAgAKeB.png",
    tags: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "JWT", "REST APIs"],
    links: {
      github: "https://github.com/vkkumars1/WebCraft_IDE",
      live: "https://webcraft-ide.onrender.com/login",
    },
    details: [
      "Built using React.js, Node.js, Express.js, and MongoDB, ensuring scalability and efficient performance.",
      "Integrated chatbot offers real-time assistance for coding queries, simplifying the learning process.",
    ],
  },
  {
    title: "Real-Time Chat Application",
    description: "A responsive, user-friendly, and visually appealing chat interface powered by Socket.io for instant message delivery.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatApp-W3WeCVabb79r3C3VNcVF0QF8D0p0yn.png",
    tags: ["Socket.io", "React.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/vkkumars1/ChatApp",
      live: "https://chatapp-gkqq.onrender.com/",
    },
    details: [
      "Built with React.js and Tailwind CSS, offering a responsive and visually appealing chat interface.",
      "Powered by Socket.io for instant message delivery and smooth interaction across all devices.",
    ],
  },
  {
    title: "Gemini-2.0 using Reactjs and Gemini API",
    description: "An AI-powered application leveraging the Gemini API for advanced features and seamless user authentication.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini-RjRpXjIKBe1QiP87JucXMSGV8Qii8E.png",
    tags: ["React.js", "Tailwind CSS", "Google Gemini API"],
    links: {
      github: "https://github.com/vkkumars1/Gemini",
      live: "https://gemini-beta-ivory.vercel.app/",
    },
    details: [
      "Hassle-Free Authentication: Integrated Clerk components for quick user management with manual email and Google sign-ins.",
      "AI-Powered Prompts: Utilize the Gemini API for seamless integration of AI functionalities, making advanced features accessible to beginners.",
      "Modern Responsive Design: Leverage Tailwind CSS for clean, responsive, and visually appealing user interfaces on all devices.",
    ],
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
            index={index}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={onClick}>
        <div className="p-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>
        <div className="p-6 pt-0">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-lg bg-background p-6 shadow-xl"
      >
        <button
          className="absolute right-4 top-4 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4">
          <h4 className="font-semibold">Key Features:</h4>
          <ul className="ml-6 mt-2 list-disc space-y-1">
            {project.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            View Live
          </a>
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

