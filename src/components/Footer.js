import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Import icons from react-icons

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A1D] text-white py-8 font-nunito">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo or brand name */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold">SLP Community</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaFacebookF className="text-xl" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaTwitter className="text-xl" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaInstagram className="text-xl" />
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaLinkedinIn className="text-xl" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex text-sm justify-center space-x-6 mb-6 font-noto">
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} SLPCommunity. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
