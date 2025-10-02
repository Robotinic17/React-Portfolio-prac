import { motion } from "framer-motion";
import { useState } from "react";

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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {" "}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        DaveTech
      </motion.div>
      <motion.div
        className="menu"
        variants={FadeInUp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={openNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="menu-icon"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#f59e0b"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </motion.div>
      <motion.ul
        className={`Navlinks ${isOpen ? "open" : ""}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.li
          variants={FadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeNav}
          className="Xmenu"
        >
          {" "}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="Xmenu-icon"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#f59e0b"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </motion.li>
        <motion.li
          variants={FadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeNav}
        >
          {" "}
          <a href="#home">Home</a>
        </motion.li>
        <motion.li
          variants={FadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeNav}
        >
          <a href="#projects">Project</a>
        </motion.li>
        <motion.li
          variants={FadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={closeNav}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};
