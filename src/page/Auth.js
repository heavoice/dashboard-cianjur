import React, { useEffect } from "react";
import { Navbar } from "../components/Auth/Navbar";
import { Auth } from "../components/Auth/Auth";
import { Footer } from "../components/Auth/Footer";

function EksekutifDashboard() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Autentikasi";
  }, []);
  return (
    <>
      <Navbar />
      <Auth />
      <Footer />
    </>
  );
}

export default EksekutifDashboard;
