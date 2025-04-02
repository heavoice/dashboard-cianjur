import React, { useEffect } from "react";
import { Navbar } from "../components/Eksekutif-Dashboard/Navbar";
import { Login } from "../components/Eksekutif-Dashboard/Login";

function EksekutifDashboard() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Eksekutif Dashboard";
  }, []);
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default EksekutifDashboard;
