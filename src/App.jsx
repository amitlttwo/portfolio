import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Custom Cursor */}
        <motion.div
          className="custom-cursor"
          animate={{
            x: cursorPosition.x - 15,
            y: cursorPosition.y - 15,
            transition: { type: 'spring', damping: 20, stiffness: 300 }
          }}
        />
        
        <motion.div
          className="custom-cursor-follower"
          animate={{
            x: cursorPosition.x - 5,
            y: cursorPosition.y - 5,
            transition: { type: 'spring', damping: 20, stiffness: 150 }
          }}
        />

        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="loading-screen"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="loading-container">
                <motion.div
                  className="loading-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <h1>AMIT KUMAR BISWAS</h1>
                  <p>CYBERSECURITY ANALYST</p>
                </motion.div>
                <motion.div
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ) : (
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Tools />
                <Education />
                <Achievements />
                <Contact />
              </main>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
