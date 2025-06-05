import React, { useEffect } from "react";
import { Tentang } from "../sections/Eksplorasi-Dashboard/Tentang";
import { Content } from "../sections/Eksplorasi-Dashboard/Content";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Feedback } from "../components/Feedback";

function EksplorasiDashboard() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Eksplorasi Dashboard";
  }, []);
  return (
    <>
      <Navbar />
      <Tentang />
      <Content />
      <Footer />
      <Feedback />
    </>
  );
}

export default EksplorasiDashboard;
