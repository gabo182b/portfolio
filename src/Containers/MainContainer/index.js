import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Portfolio } from "../../Components/Portfolio";
//mport { Contact } from "../../Components/Contact";
//import { Navbar } from "../../Components/Navbar";
//import { Sidebar } from "../../Components/Sidebar";
import { Home } from "../../pages";

const MainContainer = () => {
  return (
    <BrowserRouter>
      <Home />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </BrowserRouter>
  );
};

export { MainContainer };
