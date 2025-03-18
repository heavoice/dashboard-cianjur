import React, { useEffect } from "react";
import { Navbar } from "../components/About/Navbar";
import { Portal } from "../components/About/Portal";

function About() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | About";
  }, []);
  return (
    <>
      <Navbar />
      <Portal />
    </>
  );
}

export default About;
