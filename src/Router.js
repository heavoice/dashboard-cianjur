import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import EksplorasiDashboard from "./page/EksplorasiDashboard";
import EksekutifDashboard from "./page/EksekutifDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eksplorasi-dashboard" element={<EksplorasiDashboard />} />
        <Route path="/eksekutif-dashboard" element={<EksekutifDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
