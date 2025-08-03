import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBug, FaShieldAlt, FaTrophy, FaUniversity } from 'react-icons/fa';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const bugReports = [
    "Cambridge University: Reflected XSS, Session Hijacking x3",
    "Stanford University: Blind XSS",
    "Duke University: Reflected XSS",
    "Zscaler: DOM Based XSS, Reflected XSS, PUT Method Enabled (RCE possible)",
    "Google: No rate limit, Account Takeover",
    "adjust.com: Open Redirection",
    "Nike: Hardcoded API code disclosure",
    "Adidas: Reflected XSS 2x",
    "Intel: Sensitive API keys exposure",
    "Agirrevolution: SSRF, Internal files access",
    "GoPro: OGNL Injection, Command Injection",
    "Oslo University: SSRF on Apache Solar",
    "Howard University: Multiple vulnerabilities (SSRF, DoS, Info Disclosure)",
    "Datto: Multiple vulnerabilities (Open Redirect, API key exposure)",
    "Bently System: Multiple critical vulnerabilities (RCE x3, CRLF x4)",
    "Microsoft: XSS, Command Injection, HTML Injection",
    "Sony: Internal IP Disclosure",
    "PUBG: XSS",
    "Flipkart: Sensitive Data Exposure",
    "Apple: 2 vulnerabilities reported",
    "Accenture, JP Morgan Chase, and many more..."
  ];

  return (
    <section id="achievements" className="achievements-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Security <span className="cyber-text">Achievements</span>
        </motion.h2>
        
        <motion.div
          className="achievements-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="achievement-icon">
              <FaBug />
            </div>
            <h3>100+ Vulnerabilities Found</h3>
            <p>Discovered and reported security flaws in top organizations worldwide</p>
          </motion.div>
          
          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="achievement-icon">
              <FaShieldAlt />
            </div>
            <h3>Enterprise Security</h3>
            <p>Secured high-profile clients including Microsoft, Bugcrowd, and financial institutions</p>
          </motion.div>
          
          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="achievement-icon">
              <FaTrophy />
            </div>
            <h3>Bug Bounties</h3>
            <p>Recognized by multiple organizations for responsible vulnerability disclosure</p>
          </motion.div>
          
          <motion.div
            className="achievement-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="achievement-icon">
              <FaUniversity />
            </div>
            <h3>University Security</h3>
            <p>Identified critical vulnerabilities in prestigious universities' systems</p>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="bug-reports"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Notable Bug Reports</h3>
          <div className="bug-list-container">
            <ul className="bug-list">
              {bugReports.map((bug, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "var(--primary-color)" }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.02 }}
                >
                  {bug}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
