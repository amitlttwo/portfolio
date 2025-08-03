import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaCode, FaNetworkWired, FaUserSecret } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const aboutItems = [
    {
      icon: <FaShieldAlt />,
      title: "Security Focused",
      description: "Dedicated to identifying and mitigating vulnerabilities to protect digital assets."
    },
    {
      icon: <FaCode />,
      title: "Full-Stack Knowledge",
      description: "Proficient in both front-end and back-end technologies for comprehensive security analysis."
    },
    {
      icon: <FaNetworkWired />,
      title: "Network Expertise",
      description: "Specialized in network penetration testing and security architecture."
    },
    {
      icon: <FaUserSecret />,
      title: "Ethical Hacker",
      description: "Certified Ethical Hacker with a passion for uncovering security flaws responsibly."
    }
  ];

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About <span className="cyber-text">Me</span>
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Who Am I?</h3>
            <p>
              A dedicated B.Tech student pursuing a degree in Computer Science at Lucknow University, 
              I am an accomplished Certified Ethical Hacker with a diverse skill set encompassing 
              proficiency in both Front-End and Back-End languages.
            </p>
            <p>
              My expertise extends to specialized areas, including Web Pentesting, API Pentesting, 
              and Network Pentesting. I have a proven track record of identifying vulnerabilities 
              in high-profile systems and helping organizations strengthen their security posture.
            </p>
            <div className="personal-info">
              <div className="info-item">
                <span>Name:</span>
                <span>Amit Kumar Biswas</span>
              </div>
              <div className="info-item">
                <span>Email:</span>
                <span>amitlthax0r@gmail.com</span>
              </div>
              <div className="info-item">
                <span>Phone:</span>
                <span>+91 6289612466</span>
              </div>
              <div className="info-item">
                <span>Location:</span>
                <span>Kolkata, India</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                className="skill-card"
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 240, 255, 0.3)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="skill-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
