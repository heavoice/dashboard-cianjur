import React, { useEffect } from "react";
import { Tentang } from "../sections/Eksplorasi-Dashboard/Tentang";
import { Content } from "../sections/Eksplorasi-Dashboard/Content";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

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
    </>
  );
}

export default EksplorasiDashboard;
