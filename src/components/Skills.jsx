import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { spring } from 'framer-motion';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const skills = [
    { name: "Cybersecurity Strategy Development", level: 95 },
    { name: "Incident Response and Threat Mitigation", level: 90 },
    { name: "Network Security", level: 92 },
    { name: "Security Audits and Compliance", level: 88 },
    { name: "Vulnerability Management", level: 94 },
    { name: "Security Awareness Training", level: 85 },
    { name: "Adaptability and Continuous Learning", level: 97 }
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My <span className="cyber-text">Skills</span>
        </motion.h2>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1.5, delay: index * 0.1, type: "spring" }}
                  style={{
                    background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="additional-skills"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3>Additional Capabilities</h3>
          <div className="tags-container">
            {[
              "Web Application Security",
              "API Security",
              "Network Penetration Testing",
              "Cloud Security",
              "Threat Modeling",
              "Risk Assessment",
              "Security Architecture",
              "Digital Forensics",
              "Malware Analysis",
              "Cryptography",
              "Secure Coding Practices",
              "OWASP Top 10",
              "NIST Framework",
              "ISO 27001",
              "PCI DSS Compliance",
              "GDPR Compliance"
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="skill-tag"
                whileHover={{ scale: 1.1, boxShadow: "0 0 10px var(--primary-color)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
