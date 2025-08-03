import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor of Technology",
      institution: "Shri Krishna University",
      period: "2022 - 2025",
      description: "Graduated with a degree in Computer Science, focusing on cybersecurity and network systems."
    },
    {
      icon: <FaCertificate />,
      degree: "Diploma in Cyber-Security",
      institution: "Indian School of Ethical Hacking and Anti-Hacking",
      period: "2018 - 2022",
      description: "Specialized training in ethical hacking, penetration testing, and cybersecurity defense mechanisms."
    }
  ];

  const certifications = [
    "CEH (Certified Ethical Hacker) - EC-COUNCIL",
    "Deliver a Session Talk upon Web and API Pentesting and Exploitation",
    "The Art Of Exploitation",
    "Pivoting In Metasploit",
    "Master Networking For Penetration Testing",
    "Network Security for Beginners",
    "Access Control and Identity Management",
    "Pivoting During the Hunt",
    "CCNA - Archive"
  ];

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education & <span className="cyber-text">Certifications</span>
        </motion.h2>
        
        <div className="education-container">
          <motion.div
            className="education-list"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="education-card"
                whileHover={{ y: -10, boxShadow: "0 10px 20px rgba(0, 240, 255, 0.3)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="edu-icon">{edu.icon}</div>
                <div className="edu-content">
                  <h3>{edu.degree}</h3>
                  <h4>{edu.institution}</h4>
                  <span className="edu-period">{edu.period}</span>
                  <p>{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="certifications"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Certifications</h3>
            <ul className="cert-list">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 10, color: "var(--primary-color)" }}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
