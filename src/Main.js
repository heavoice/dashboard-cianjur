import { Navbar } from "./components/Navbar";
import { Portal } from "./components/Portal";
import { Features } from "./components/Features";
import { Highlight } from "./components/Highlight";
import { Visualizer } from "./components/Visualizer";
import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Portal />
      <Features />
      <Highlight />
      <Visualizer />
      <Footer />
      {/* <Project />
      <FAQ />*/}
    </>
  );
}

export default Main;
