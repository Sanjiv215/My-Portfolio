import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-logo">
        <h2>Connect me</h2>
      </div>

      <div className="social-links">

        <a href="https://leetcode.com/u/NJNTE0egUh/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode />
        </a>

        <a href="https://www.linkedin.com/in/prasadsanjiv/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>

        <a href="https://github.com/Sanjiv215" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/code.sanjiv/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

      </div>

      <p className="footer-copy">© 2026 Sanjiv</p>

    </footer>
  );
}

export default Footer;