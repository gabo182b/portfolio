import React from "react";
import { NavLink } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="navbar__link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
