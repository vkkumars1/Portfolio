import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export function About() {
  const handleDownload = () => {
    window.open("https://drive.google.com/file/d/1vR3SI06ho_EAh3h2WbdX_18mcXz0dnXY/view", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid gap-8 items-center md:grid-cols-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I am a BE Computer Science graduate and a dedicated Full Stack Developer with expertise in React.js, Node.js, and MongoDB. I excel at building scalable, user-focused applications and solving complex challenges with innovative solutions.
            </motion.p>
            <motion.button 
              onClick={handleDownload}
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <blockquote className="italic text-xl text-muted-foreground">
              "The only way to do great work is to love what you do."
              <footer className="mt-2 text-sm">- Steve Jobs</footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

