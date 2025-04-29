import React, { useEffect } from "react";
import { Sidebar } from "../components/Eksekutif/Sidebar";

function Eksekutif() {
  useEffect(() => {
    document.title = "Dashboard Cianjur | Eksekutif Dashboard";
  }, []);
  return (
    <>
      <Sidebar />
    </>
  );
}

export default Eksekutif;
