import { useEffect } from "react";
import { Tentang } from "../sections/About/Tentang";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Feedback } from "../components/Feedback";

function About() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | About";
  }, []);
  return (
    <>
      <Navbar />
      <Tentang />
      <Footer />
      <Feedback />
    </>
  );
}

export default About;
