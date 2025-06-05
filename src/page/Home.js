import { useEffect } from "react";
import { Navbar } from "../sections/Home/Navbar";
import { Portal } from "../sections/Home/Portal";
import { Features } from "../sections/Home/Features";
import { Highlight } from "../sections/Home/Highlight";
import { Visualizer } from "../sections/Home/Visualizer";
import { Footer } from "../components/Footer";
import { Feedback } from "../components/Feedback";

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
      <Feedback />
    </>
  );
}

export default Home;
