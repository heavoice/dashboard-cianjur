import { Navbar } from "./components/Navbar";
import { Portal } from "./components/Portal";
import { News } from "./components/News";
import { Division } from "./components/Division";
import { Team } from "./components/Team";
import { FAQ } from "./components/FAQ";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function Main() {
  return (
    <>
      <Navbar />
      <Portal />
      <News />
      <Division />
      <Team />
      {/*<Project />
      <FAQ />*/}
      <Footer />
    </>
  );
}

export default Main;
