import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/img/logo.png";
import { topik } from "../../constant/Topik";
import useNavbarColor from "../../hooks/useNavColor";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTopikOpen, setIsTopikOpen] = useState(false);
  const [isLayananPublikOpen, setIsLayananPublikOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarColor = useNavbarColor();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleToggle = () => {
    setIsTopikOpen(false);
    setIsLayananPublikOpen(false);
  };

  const toggleTopikDropdown = () => {
    setIsTopikOpen(!isTopikOpen);
    setIsLayananPublikOpen(false);
  };

  const toggleLayananPublikDropdown = () => {
    setIsLayananPublikOpen(!isLayananPublikOpen);
    setIsTopikOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsTopikOpen(false);
        setIsLayananPublikOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`p-4 font-noto fixed top-0 left-0 w-full z-50 hover:bg-green-600 ${navbarColor}`} // Gunakan navbarColor
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-2xl flex items-center font-bold"
        >
          <a href="/" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/" className="text-white text-lg">
            Dashboard <br /> Cianjur
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 font-medium md:hidden">
          <button
            className="text-white hover:text-gray-300 flex items-center"
            onClick={toggleTopikDropdown}
          >
            Topik <AiOutlineDown className="ml-2 mt-1" />
          </button>

          {isTopikOpen && (
            <div className="bg-green-600 p-8 font-noto fixed top-24 border-t-2 border-black/10 -left-6 w-full z-50 shadow-md">
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
                      className="w-20 h-20 object-cover rounded-lg mr-4"
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
          <a className="text-white">Eksplorasi Dashboard</a>
          <Link to="/about" className="text-white">
            Tentang
          </Link>
          <a className="text-white">Executive Dashboard</a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-green-600 w-64 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden 
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          ref={menuRef}
        >
          <div className="flex justify-end">
            <button
              className="text-white text-2xl p-5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-6">
            <button
              className="text-white flex justify-between items-center"
              onClick={toggleTopikDropdown}
            >
              Berita Jawa Barat <AiOutlineDown className="ml-2" />
            </button>
            {isTopikOpen && (
              <div className="max-h-60 overflow-y-auto">
                {topik.map((item) => (
                  <a
                    key={item.id}
                    href="#"
                    className="block text-white mb-3 border-b border-white/20"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            )}

            <a className="text-white">Eksplorasi Dashboard</a>
            <Link to="/about" className="text-white">
              Tentang
            </Link>
            <a className="text-white">Executive Dashboard</a>
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
