import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaBookOpen, FaInfoCircle, FaChartLine } from "react-icons/fa";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import logo from "../../assets/img/logo.png";
import { topik } from "../../data/Topik";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopikOpen, setIsTopikOpen] = useState(false);

  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleToggle = () => {
    setIsTopikOpen(false);
  };

  const toggleTopikDropdown = () => {
    setIsTopikOpen(!isTopikOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsTopikOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`p-4 font-noto fixed border-b border-white/20 top-0 left-0 w-full z-50 bg-[#22a9e1] `}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/home"
          className="flex text-2xl text-white font-bold items-center"
        >
          <a href="/home" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/home" className="text-lg text-white">
            Dashboard <br /> Cianjur
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="font-medium hidden lg:flex md:hidden space-x-6">
          <button
            className="flex text-white duration-200 ease-in-out hover:text-gray-300 items-center transition-all"
            onClick={isTopikOpen ? handleToggle : toggleTopikDropdown}
          >
            Topik
            <MdKeyboardArrowDown
              className={`ml-2 mt-1 text-xl transition-transform duration-300 ${
                isTopikOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isTopikOpen && (
            <div className="bg-[#22a9e1] p-8 shadow-md w-full -left-6 fixed font-noto top-[6.75rem] z-50">
              <div className="flex justify-between items-center max-w-7xl mx-auto">
                <p className="text-3xl text-white">Topik</p>
                <p
                  className="text-2xl text-white cursor-pointer"
                  onClick={handleToggle}
                >
                  ✕
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-7xl mt-4 mx-auto">
                {topik.map((item) => (
                  <div
                    key={item.id}
                    className="flex border border-white/20 p-4 rounded-lg items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-20 rounded-lg w-20 mr-4 object-cover"
                    />
                    <div>
                      <p className="text-white text-xl font-semibold">
                        {item.title}
                      </p>
                      <p className="text-white font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          <Link
            to="/eksplorasi-dashboard"
            className="text-white hover:text-gray-300 transition-all ease-in-out duration-200"
          >
            Eksplorasi Dashboard
          </Link>
          <Link
            to="/about"
            className="text-white duration-200 ease-in-out hover:text-gray-300 transition-all"
          >
            Tentang
          </Link>
          <Link
            to="/auth"
            className="text-white hover:text-gray-300 transition-all ease-in-out duration-200"
          >
            Executive Dashboard
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-[#22a9e1] w-[70%] shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden 
  ${
    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
  } flex flex-col justify-between`}
          ref={menuRef}
        >
          {/* Header */}
          <div className="flex justify-between p-4 border-b border-white/20">
            <Link
              to="/home"
              className="text-white text-2xl flex items-center font-bold"
            >
              <a href="/home" className="mr-2">
                <img src={logo} width={35} height={35} alt="SLP Logo" />
              </a>
              <a href="/home" className="text-white text-sm">
                Dashboard <br /> Cianjur
              </a>
            </Link>
            <button
              className="text-white text-xl p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          {/* Main Menu */}
          <div className="flex flex-col space-y-4 p-6 overflow-y-auto flex-grow">
            <button
              className="w-full text-white hover:text-gray-300 transition-all ease-in-out duration-200 flex justify-between items-center"
              onClick={toggleTopikDropdown}
            >
              <div className="flex items-center space-x-2">
                <FaBookOpen className="w-5 h-5" />
                <span className="text-xs sm:text-base">Topik</span>
              </div>
              <MdKeyboardArrowDown
                className={`ml-2 text-xl transition-transform duration-300 ${
                  isTopikOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isTopikOpen && (
              <div className="max-h-60 overflow-y-auto">
                {topik.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="text-xs sm:text-base p-1 block text-white mb-3 border-b border-white/20"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}

            <Link
              to="/eksplorasi-dashboard"
              className="text-white hover:text-gray-300 transition-all ease-in-out duration-200"
            >
              <div className="flex items-center space-x-2">
                <HiOutlineChartSquareBar className="w-5 h-5" />
                <span className="text-xs sm:text-base">
                  Eksplorasi Dashboard
                </span>
              </div>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition-all ease-in-out duration-200 "
            >
              <div className="flex items-center space-x-2">
                <FaInfoCircle className="w-5 h-5" />
                <span className="text-xs sm:text-base">Tentang</span>
              </div>
            </Link>
            <Link
              to="/auth"
              className="text-white hover:text-gray-300 transition-all ease-in-out duration-200"
            >
              <div className="flex items-center space-x-2">
                <FaChartLine className="w-5 h-5" />
                <span className="text-xs sm:text-base">
                  Executive Dashboard
                </span>
              </div>
            </Link>
          </div>

          {/* Footer */}
          <div className="p-6 text-xs text-white border-t border-white/20">
            Copyright © 2025 Diskominfo Cianjur. All Right Reserved
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} className="text-white" />
            ) : (
              <AiOutlineMenu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
