import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="bg-background border-t py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            © {currentYear} VARUN KUMAR. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="https://github.com/vkkumars1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/varun-kumar-284b721b3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:varunkumarrss2001@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
          <motion.p 
            className="text-sm text-muted-foreground mt-4 md:mt-0"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Built with React and Framer Motion
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
}

