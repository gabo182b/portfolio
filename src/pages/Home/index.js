import React, { useState } from "react";
import { Navbar } from "../../Components/Navbar";
import { Sidebar } from "../../Components/Sidebar";
import { Hero } from "../../Components/Hero";
import { About } from "../../Components/About";
import { Portfolio } from "../../Components/Portfolio";
import { Footer } from "../../Components/Footer";
import { Contact } from "../../Components/Contact"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
};

export { Home };
