import { motion } from "framer-motion";

const FadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {" "}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 hello, I'm Dave</span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={FadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            DaveTech
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={FadeInUp}>
            Frontend Engineer & javascript Developer
          </motion.h2>
          <motion.p className="hero-description" variants={FadeInUp}>
            With over 2 years of experience dealing with Frontend technologies,
            I create reponsive and user-friendly website by combining design
            with powerful functionality. Specializing in mordern web
            applications and websites.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              Hire Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/Robotinic17" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/david-eluwole-166033370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://x.com/DavidTimil93017?t=v9pDGeM8YrlsFDd0Y7HyTw&s=09"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src="projects/realme.jpg" alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
};
