import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export function Hero({id}) {
  return (
    <section id={id} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Single glow effect */}
              <motion.div
                className="absolute -inset-4 bg-yellow-500/20 blur-2xl rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
            {/* Image container */}
            <motion.div 
                className="relative w-80 h-96 md:w-[400px] md:h-[480px] overflow-hidden rounded-[30px] rounded-b-[80px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-yellow-500/30 to-transparent"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Image */}
                <motion.div
                  className="w-full h-full relative"
                  initial={{ scale: 2 }}
                  animate={{ scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6240124127587451458(1)-WNCysrJxGFcV4ux8fwkxqvcm9SArPa.png"
                    alt="VARUN KUMAR"
                    className="object-cover w-full h-full object-top "
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hey!👋 I'm
            </motion.h1>
            <div className="h-20 mb-4">
              <TypeAnimation
                sequence={[
                  'VARUN KUMAR',
                  1000,
                  'Full Stack Developer',
                  1000
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-3xl md:text-4xl lg:[line-height:1.4] lg:text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent leading-[1.4]"
              />
            </div>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Building beautiful and functional web experiences with modern technologies.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a 
                href="#projects" 
                className="border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background glow effect */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(255, 184, 0, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-yellow-500/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  );
}

