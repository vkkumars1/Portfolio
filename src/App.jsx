import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    // Scroll to top on page refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    // Scroll to top when the component mounts (on initial load or refresh)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // This provides a smooth scrolling effect
    });
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackgroundAnimation />
      <Navigation />
      <main>
        <Hero id="home"/>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

