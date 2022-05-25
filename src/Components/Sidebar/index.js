import React from "react";
import { FaTimes } from "react-icons/fa";
//import { NavLink } from "react-router-dom";
import { Link } from "react-scroll/modules";
import "./sidebar.scss";
const Sidebar = (props) => {
  const { isOpen, toggle } = props;
  return (
    <aside className={isOpen ? "aside" : "aside-closed"} onClick={toggle}>
      <FaTimes className="aside__close-icon" />
      <ul className="aside__links">
        <li className="aside__link">
          <Link to="/" onClick={toggle}>
            Home
          </Link>
        </li>
        <li className="aside__link">
          <Link to="/about" onClick={toggle}>
            About
          </Link>
        </li>
        <li className="aside__link">
          <Link to="/portfolio" onClick={toggle}>
            Portfolio
          </Link>
        </li>
        <li className="aside__link">
          <Link to="/contact" onClick={toggle}>
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export { Sidebar };
