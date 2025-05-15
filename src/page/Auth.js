import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Auth } from "../sections/Auth/Auth";

function AuthPage() {
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

export default AuthPage;
