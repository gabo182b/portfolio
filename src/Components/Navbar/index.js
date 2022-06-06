import React from "react";
import { Link } from "react-scroll/modules";
import { FaBars } from "react-icons/fa";
import "./navbar.scss";

const Navbar = (props) => {
  const { toggle } = props;
  return (
    <nav className="navbar">
      <FaBars className="navbar__burger-icon" onClick={toggle} />
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Home
          </Link>        </li>
        <li className="navbar__link">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="navbar__link">
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Portfolio
          </Link>        </li>
        <li className="navbar__link">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contact
          </Link>        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
