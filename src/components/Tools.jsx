import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import { FaTerminal, FaNetworkWired, FaCode, FaShieldAlt } from 'react-icons/fa';

const Tools = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const toolCategories = [
    {
      title: "Web Security Tools",
      icon: <FaCode />,
      tools: [
        "BurpSuite", "OWASP ZAP", "Acunetix", "Invicti", 
        "SQL Map", "jSQLi", "XSS Killer", "Parameter Fuzz"
      ]
    },
    {
      title: "Network Tools",
      icon: <FaNetworkWired />,
      tools: [
        "Nmap", "Nessus", "OpenVAS", "Wireshark", 
        "Metasploit", "Cobalt Strike", "Air-CrackNg", "Hydra"
      ]
    },
    {
      title: "Reconnaissance",
      icon: <FaTerminal />,
      tools: [
        "theHarvester", "Recon-ng", "Endpoint-Extractor", 
        "Url Grabber Scanner", "Port-Scanner", "Hashcat"
      ]
    },
    {
      title: "Analysis Tools",
      icon: <FaShieldAlt />,
      tools: [
        "IDA", "Hobies", "CTF Labs", "Open-Source Contributions"
      ]
    }
  ];

  return (
    <section id="tools" className="tools-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Expertise <span className="cyber-text">Tools</span>
        </motion.h2>
        
        <div className="tools-container">
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              className="tool-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
                <motion.div
                  className="tool-card"
                  whileHover={{ boxShadow: "0 0 30px rgba(0, 240, 255, 0.5)" }}
                >
                  <div className="tool-icon">{category.icon}</div>
                  <h3>{category.title}</h3>
                  <ul className="tool-list">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.li
                        key={toolIndex}
                        whileHover={{ x: 10, color: "var(--primary-color)" }}
                      >
                        {tool}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
