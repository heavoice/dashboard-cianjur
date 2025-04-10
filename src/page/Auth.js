import React, { useEffect } from "react";
import { Navbar } from "../components/Eksekutif-Dashboard/Navbar";
import { Auth } from "../components/Eksekutif-Dashboard/Auth";

function EksekutifDashboard() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Autentikasi";
  }, []);
  return (
    <>
      <Navbar />
      <Auth />
    </>
  );
}

export default EksekutifDashboard;
