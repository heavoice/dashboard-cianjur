import React, { useState, useEffect, useRef } from "react";
import { AiOutlineDown, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/img/logo.png";
import { beritaJawaBarat } from "../constant/BeritaJawaBarat";
import { layananPublik } from "../constant/LayananPublik";
import useNavbarColor from "../hooks/useNavColor";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBeritaJawaBaratOpen, setIsBeritaJawaBaratOpen] = useState(false);
  const [isLayananPublikOpen, setIsLayananPublikOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarColor = useNavbarColor();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleToggle = () => {
    setIsBeritaJawaBaratOpen(false);
    setIsLayananPublikOpen(false);
  };

  const toggleBeritaJawaBaratDropdown = () => {
    setIsBeritaJawaBaratOpen(!isBeritaJawaBaratOpen);
  };

  const toggleLayananPublikDropdown = () => {
    setIsLayananPublikOpen(!isLayananPublikOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsBeritaJawaBaratOpen(false);
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
      className={`${navbarColor} p-4 font-noto fixed top-0 left-0 w-full z-50 shadow-sm hover:bg-green-600`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl flex items-center font-bold">
          <a href="/" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/" className="text-white text-lg">
            Dashboard <br /> Cianjur
          </a>
        </div>

        <div className="hidden lg:flex space-x-6 font-medium md:hidden">
          <button
            className="text-white hover:text-gray-300 flex items-center"
            onClick={toggleBeritaJawaBaratDropdown}
          >
            Berita Jawa Barat <AiOutlineDown className="ml-2 mt-1" />
          </button>

          {isBeritaJawaBaratOpen && (
            <div className="bg-green-600 p-4 font-noto fixed top-24 border-t-2 border-black/10 -left-6 w-full z-50 shadow-md">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <p className="text-white text-3xl">Berita Jawa Barat</p>
                <p
                  className="cursor-pointer text-white text-2xl"
                  onClick={handleToggle}
                >
                  ✕
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-4">
                {beritaJawaBarat.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg flex items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            className="text-white hover:text-gray-300 flex items-center"
            onClick={toggleLayananPublikDropdown}
          >
            Layanan Publik <AiOutlineDown className="ml-2 mt-1" />
          </button>

          {isLayananPublikOpen && (
            <div className="bg-green-600 p-4 font-noto fixed top-24 border-t-2 border-black/10 -left-6 w-full z-50 shadow-md">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <p className="text-white text-3xl">Layanan Publik</p>
                <p
                  className="cursor-pointer text-white text-2xl"
                  onClick={handleToggle}
                >
                  ✕
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-4">
                {layananPublik.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-lg flex items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="text-xl font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-green-600 w-64 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden md:block ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          ref={menuRef}
        >
          <div className="p-4 flex justify-end">
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
          </div>
        </div>

        <div className="lg:hidden md:block text-white">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
