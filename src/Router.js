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
import Auth from "./page/Auth";

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
      navigate("/auth", { replace: true });
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
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
