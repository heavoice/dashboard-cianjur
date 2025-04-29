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
      className={`p-4 font-noto fixed top-0 border-b border-white/20 left-0 w-full z-50 bg-[#22a9e1] `} // Gunakan navbarColor
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/home"
          className="text-white text-2xl flex items-center font-bold"
        >
          <a href="/home" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/home" className="text-white text-lg">
            Dashboard <br /> Cianjur
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-medium md:hidden">
          <button
            className="text-white hover:text-gray-300 transition-all ease-in-out duration-200 flex items-center"
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
            <div className="bg-[#22a9e1] p-8 font-noto fixed top-[6.75rem]  -left-6 w-full z-50 shadow-md">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <p className="text-white text-3xl">Topik</p>
                <p
                  className="cursor-pointer text-white text-2xl"
                  onClick={handleToggle}
                >
                  ✕
                </p>
              </div>

              <div className="grid  grid-cols-3 gap-6 max-w-7xl mx-auto mt-4">
                {topik.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg flex items-center border border-white/20"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg mr-4 border-white/20 border"
                    />
                    <div>
                      <p className="text-xl font-semibold text-white">
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
            className="text-white hover:text-gray-300 transition-all ease-in-out duration-200"
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
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          ref={menuRef}
        >
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
          <div className="flex flex-col space-y-4 p-6">
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
