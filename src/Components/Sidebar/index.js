import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink } from '../../styled-components/SidebarElements'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink
          to="home"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        //offset={-80}
        >
          Home
        </SidebarLink>
        <SidebarLink
          to="about"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        //offset={-80}
        >
          About
        </SidebarLink>
        <SidebarLink
          to="portfolio"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        //offset={-80}
        >
          Portfolio
        </SidebarLink>
        <SidebarLink
          to="contact"
          onClick={toggleSidebar}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        //offset={-80}
        >
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export { Sidebar };
