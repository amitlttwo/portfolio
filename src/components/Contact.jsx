import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.name,
        to_name: 'Amit',
        from_email: form.email,
        to_email: 'amitlthax0r@gmail.com',
        message: form.message
      },
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setIsLoading(false);
      setNotification({
        show: true,
        message: 'Thank you for your message. I will get back to you soon!',
        type: 'success'
      });
      setForm({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((error) => {
      setIsLoading(false);
      setNotification({
        show: true,
        message: 'Something went wrong. Please try again later.',
        type: 'error'
      });
    });
  };

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="cyber-text">Touch</span>
        </motion.h2>
        
        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <ul className="info-list">
              <motion.li
                whileHover={{ x: 10 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="info-icon"><FaMapMarkerAlt /></span>
                <span>Kolkata, India</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="info-icon"><FaPhone /></span>
                <span>+91 6289612466</span>
              </motion.li>
              <motion.li
                whileHover={{ x: 10 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <span className="info-icon"><FaEnvelope /></span>
                <span>amitlthax0r@gmail.com</span>
              </motion.li>
            </ul>
            
            <div className="social-links">
              <motion.a
                href="https://linkedin.com/in/amit-kumar-3b6820195"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary-color)" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/amit-kumar-3b6820195"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary-color)" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://twitter.com/amitlthax0r"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "var(--primary-color)" }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>
              
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                {isLoading ? 'Sending...' : (
                  <>
                    Send Message <FaPaperPlane style={{ marginLeft: '10px' }} />
                  </>
                )}
              </motion.button>
            </form>
            
            {notification.show && (
              <motion.div
                className={`notification ${notification.type}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {notification.message}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
      
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Amit Kumar Biswas. All rights reserved.</p>
          <p>Designed & Developed with ❤️ by Amit</p>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
