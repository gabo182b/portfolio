import React from "react";
//import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="home" onClick={toggleSidebar}>
          Home
        </SidebarLink>
        <SidebarLink to="about" onClick={toggleSidebar}>
          About
        </SidebarLink>
        <SidebarLink to="portfolio" onClick={toggleSidebar}>
          Portfolio
        </SidebarLink>
        <SidebarLink to="contact" onClick={toggleSidebar}>
          Contact
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export { Sidebar };
