import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__list-item">
          <a href="/" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </a>
        </li>
        <li className="footer__list-item">
          <a href="/" target="_blank" aria-label="Instagram">
            <FaInstagram />
          </a>
        </li>
        <li className="footer__list-item">
          <a href="/" target="_blank" aria-label="Linked in">
            <FaLinkedin />
          </a>
        </li>
        <li className="footer__list-item" target="_blank" aria-label="Github">
          <a href="/" target="_blank" aria-label="Github">
            <FaGithub />
          </a>
        </li>
      </ul>
      <div className="footer__rights">
        <p>© Gabriel Rojas {year}</p>
      </div>
    </footer>
  );
};

export { Footer };
