import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: <Layout className="h-6 w-6" />,
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database Management",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Others",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Linux", "AWS", "Postman", "RESTful APIs"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-lg p-6 shadow-md"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
                className="flex items-center mb-4"
              >
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
              </motion.div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="text-muted-foreground"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

