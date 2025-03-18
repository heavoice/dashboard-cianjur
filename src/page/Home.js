import React, { useEffect } from "react";
import { Navbar } from "../components/Home/Navbar";
import { Portal } from "../components/Home/Portal";
import { Features } from "../components/Home/Features";
import { Highlight } from "../components/Home/Highlight";
import { Visualizer } from "../components/Home/Visualizer";
import { Footer } from "../components/Home/Footer";

function Home() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Home";
  }, []);
  return (
    <>
      <Navbar />
      <Portal />
      <Features />
      <Highlight />
      <Visualizer />
      <Footer />
    </>
  );
}

export default Home;
