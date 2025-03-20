import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import XDashboard from "./page/XDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eksplorasi-dashboard" element={<XDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
