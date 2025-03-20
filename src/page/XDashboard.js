import React, { useEffect } from "react";
import { Navbar } from "../components/Eksplorasi-Dashboard/Navbar";
import { Tentang } from "../components/Eksplorasi-Dashboard/Tentang";
import { Content } from "../components/Eksplorasi-Dashboard/Content";
import { Footer } from "../components/Eksplorasi-Dashboard/Footer";

function About() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Eksplorasi Dashboard";
  }, []);
  return (
    <>
      <Navbar />
      <Tentang />
      <Content />
      <Footer />
    </>
  );
}

export default About;
