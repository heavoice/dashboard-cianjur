// src/components/Navbar.js
import React, { useState } from "react";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1A1A1D] p-4 font-noto">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl items-center flex font-bold">
          <a href="/" className="mr-2">
            <img src={logo} width={70} height={70} />
          </a>
          <div className="text-white text-xs">
            SLP <br /> Community
          </div>
        </div>

        {/* Menu */}
        <div
          className={`md:flex space-x-6 font-medium ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Vision/Mission
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Division
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Team
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Project
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            FAQ
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
