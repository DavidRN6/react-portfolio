import "./hero.css";
import { MdVerified } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Lottie from "lottie-react";
import developerAnimation from "../../animations/developer.json";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="left-section">
        <div className="profile">
          <motion.img
            // animation
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(0.9)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="me.jpeg"
            className="avatar"
            alt=""
          />
          <span className="icon-verified">
            {" "}
            <MdVerified />{" "}
          </span>
        </div>

        <motion.h1
          // animation
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Frontend Developer
        </motion.h1>

        <p className="info">
          Create the user-facing part of websites and web applications. The main
          goal is to make sure that your website looks great and works well
          across different devices and browsers. I do not need to say that I
          definitely care about the website being fast and smooth
        </p>

        <div className="media">
          <a
            href="https://www.instagram.com/david_raoof/"
            target="_blank"
            className="social"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/DavidRN6"
            target="_blank"
            className="social"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/david-raoof-08b643258/"
            target="_blank"
            className="social"
          >
            <FaLinkedin />
          </a>
        </div>

        <div className="cv">
          <a href="CV.pdf" download>
            Download CV
          </a>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie className="hero-animation" animationData={developerAnimation} />
      </div>
    </section>
  );
}

export default Hero;
