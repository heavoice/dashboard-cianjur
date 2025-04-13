import React, { useEffect } from "react";
import { Navbar } from "../components/Eksekutif-Dashboard/Navbar";
import { Auth } from "../components/Eksekutif-Dashboard/Auth";
import { Footer } from "../components/Eksekutif-Dashboard/Footer";

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
