// src/components/Navbar.js
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-[#1A1A1D] p-4 font-noto fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl items-center flex font-bold">
          <a href="/" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/" className="text-white text-xs">
            SLP <br /> Community
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Vision/Mission
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Division
          </a>
          <a href="/team" className="text-white hover:text-gray-300">
            Team
          </a>
          <a href="/project" className="text-white hover:text-gray-300">
            Project
          </a>
          <a href="/faq" className="text-white hover:text-gray-300">
            FAQ
          </a>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 h-full bg-[#1A1A1D] w-[50%] shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          ref={menuRef}
        >
          <div className="p-4">
            <button
              className="text-white text-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-6">
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-300">
              Vision/Mission
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Division
            </a>
            <a href="/team" className="text-white hover:text-gray-300">
              Team
            </a>
            <a href="/project" className="text-white hover:text-gray-300">
              Project
            </a>
            <a href="/faq" className="text-white hover:text-gray-300">
              FAQ
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={toggleMobileMenu}>
            <i
              className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}
            ></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
