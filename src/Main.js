import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { VisionMission } from "./components/VisionMission";
import { Division } from "./components/Division";
import { FAQ } from "./components/FAQ";

function Main() {
  return (
    <>
      <Navbar />
      <About />
      <VisionMission />
      <Division />
      <FAQ />
    </>
  );
}

export default Main;
