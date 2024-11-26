import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { VisionMission } from "./components/VisionMission";
import { Division } from "./components/Division";
import { Team } from "./components/Team";
import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <About />
      <VisionMission />
      <Division />
      <Team />
      <Project />
      <FAQ />
      <Footer />
    </>
  );
}

export default Main;
