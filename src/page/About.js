import React, { useEffect } from "react";
import { Tentang } from "../sections/About/Tentang";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function About() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | About";
  }, []);
  return (
    <>
      <Navbar />
      <Tentang />
      <Footer />
    </>
  );
}

export default About;
