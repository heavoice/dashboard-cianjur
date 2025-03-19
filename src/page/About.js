import React, { useEffect } from "react";
import { Navbar } from "../components/About/Navbar";
import { Tentang } from "../components/About/Tentang";
import { Footer } from "../components/Home/Footer";

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
