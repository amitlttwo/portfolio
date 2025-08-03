import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBug, FaMicrosoft, FaShieldVirus, FaUserGraduate } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  const experiences = [
    {
      id: 1,
      title: 'Cyber-Security Researcher',
      company: 'Bugcrowd',
      location: 'California - Australia',
      period: '2018 - 2022',
      description:
        'At Bugcrowd, I collaborated with leading clients like Soundcloud, Takeaway, and Upwork...',
      icon: <FaBug />,
    },
    {
      id: 2,
      title: 'Cyber-Security Researcher',
      company: 'Microsoft Corp.',
      location: 'Washington - US',
      period: '2021 - 2022',
      description:
        'As the leading Security Researcher at Microsoft (2021-2022), I pioneered initiatives...',
      icon: <FaMicrosoft />,
    },
    {
      id: 3,
      title: 'IT Security Analyst',
      company: 'Avalance Global Solutions',
      location: 'Dubai - UAE',
      period: '2022 - 2023',
      description:
        'At Avalance Global Solutions, I focused on securing high-complexity networks...',
      icon: <FaShieldVirus />,
    },
    {
      id: 4,
      title: 'Pentester & IT Trainer',
      company: 'VIEHGroup Pvt. Ltd.',
      location: 'Delhi - India',
      period: '2023 - Present',
      description:
        'Experienced IT security professional with a rich skill set, honed during my time at VIEHGroup...',
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Work <span className="cyber-text">Experience</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VerticalTimeline layout="1-column-left" lineColor="var(--primary-color)">
            {experiences.map((exp) => (
              <VerticalTimelineElement
                key={exp.id}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: 'var(--card-bg)',
                  color: 'var(--light-color)',
                  border: '1px solid var(--primary-color)',
                  boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)',
                }}
                contentArrowStyle={{ borderRight: '7px solid var(--primary-color)' }}
                date={exp.period}
                dateClassName="timeline-date"
                iconStyle={{
                  background: 'var(--dark-color)',
                  color: 'var(--primary-color)',
                  boxShadow: '0 0 0 4px var(--primary-color)',
                }}
                icon={exp.icon}
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {exp.company} | {exp.location}
                  </h4>
                  <p>{exp.description}</p>
                </motion.div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

