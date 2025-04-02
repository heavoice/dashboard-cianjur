import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import EksplorasiDashboard from "./page/EksplorasiDashboard";
import EksekutifDashboard from "./page/EksekutifDashboard";
import Register from "./page/Register";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const RedirectToDefault = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      navigate("/eksekutif-dashboard", { replace: true });
    }
  }, [pathname, navigate]);

  return null;
};

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <RedirectToDefault />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eksplorasi-dashboard" element={<EksplorasiDashboard />} />
        <Route path="/eksekutif-dashboard" element={<EksekutifDashboard />} />
        <Route path="/eksekutif-dashboard/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
