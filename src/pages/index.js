import React, { useState } from "react";
import { About } from "../Components/About";
import { Hero } from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
    </>
  );
};

export { Home };
