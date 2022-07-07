import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, BurgerMenu, NavMenu, NavItem, NavLink } from "./NavbarElements";

const Navbar = ({ toggleSidebar }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const handleNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <BurgerMenu onClick={toggleSidebar}>
          <FaBars />
        </BurgerMenu>
        <NavMenu>
          <NavItem>
            <NavLink
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="portfolio"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
            >
              Portfolio
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              activeClass='active'
            >
              Contact
            </NavLink>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>

  );
};

export { Navbar };
