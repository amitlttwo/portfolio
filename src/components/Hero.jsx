import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';
import MatrixRain from '../MatrixRain';

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });

  return (
    <section id="home" className="hero-section">
      <MatrixRain />
      <div className="container">
        <div className="hero-content">
          <motion.div
            ref={ref}
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="greeting"
            >
              Hi, my name is
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="name"
            >
              <span className="cyber-text">Amit Kumar Biswas.</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="title"
            >
              <TypeAnimation
                sequence={[
                  'Cyber Security Analyst', 2000,
                  'Ethical Hacker', 2000,
                  'Penetration Tester', 2000,
                  'Security Researcher', 2000
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="description"
            >
              I specialize in identifying and mitigating digital vulnerabilities to secure systems against cyber threats.
              With expertise in web, API, and network penetration testing, I help organizations strengthen their security posture.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a href="#about" className="btn">
                Learn More <FaArrowDown style={{ marginLeft: '10px' }} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="image-container">
              <div className="glowing-border"></div>
              <div className="profile-image"></div>
              <div className="holographic-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <a href="#about" className="scroll-link">
          <div className="scroll-animation">
            <span></span><span></span><span></span>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

