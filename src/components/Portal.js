import React, { useState, useEffect } from "react";
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaSearch,
  FaTwitter,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Portal = () => {
  const [currentSlide, setCurrentSlide] = useState(slide1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Menonaktifkan tombol navigasi panah
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false, // Pastikan panah tetap dinonaktifkan di responsif
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div
      id="portal"
      className="relative p-4 w-full h-screen flex flex-col justify-center items-center bg-cover bg-center transition-all duration-1000 font-nunito"
      style={{ backgroundImage: `url(${currentSlide})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Kontainer teks */}
      <div className="w-full xxs:max-w-[15rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col ">
        <h1 className="text-white text-xl xs:text-2xl md:text-2xl lg:text-5xl font-extrabold max-w-xl w-full flex justify-center items-center text-start">
          Hadirkan Visualisasi Data Cianjur Dalam Satu Kanal.
        </h1>

        <p className="text-white text-sm  max-w-xl w-full mt-6 ">
          Hadirkan angka, metriks, dan visualisasi data Jabar dalam satu kanal.
          Bantu analisis data dan perumusan kebijakan jadi lebih baik.
        </p>

        {/* Input Pencarian */}
        <div className="mt-6 w-full max-w-xl flex items-center relative border border-gray-300 rounded-lg overflow-hidden">
          <FaSearch className="ml-3 absolute text-green-600" />
          <input
            type="text"
            placeholder="Cari..."
            className="w-full p-3 pl-10 pr-16 border-none focus:outline-none text-gray-700"
          />
          <button className="absolute right-2 bg-green-600 text-white px-4 py-2 rounded-lg">
            Cari
          </button>
        </div>

        {/* Carousel */}

        <div className="slider-container w-full max-w-xl mt-6">
          <Slider {...settings} className="flex justify-center">
            {["PPDB", "Aduan Warga", "Sapawarga", "Al Jabbar"].map(
              (item, index) => (
                <div key={index} className="flex justify-center px-1">
                  <div className="w-full flex items-center justify-between bg-white hover:bg-green-600 text-gray-700 hover:text-white rounded-lg overflow-hidden px-4 py-2 gap-4 transition-all duration-200 ease-in-out relative">
                    <p className="text-lg font-medium">{item}</p>
                    <div className="absolute -right-[9rem] px-40 py-4 text-green-600 hover:text-white overflow-x-hidden-hidden transition-all duration-200 ease-in-out">
                      <FaExternalLinkAlt className="text-xl cursor-pointer" />
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>
        </div>
        {/* sosmed dll */}
        <div className="flex flex-row gap-3 pt-8">
          <div className="text-gray-500 hover:text-white bg-gray-500/30 rounded-xl hover:bg-white/20 px-2 py-2 sm:px-5 sm:py-3 transition-all duration-300 text-xl sm:text-2xl">
            <FaFacebook href="https://www.facebook.com/" />
          </div>
          <div className="text-gray-500 hover:text-white bg-gray-500/30 rounded-xl hover:bg-white/20 px-2 py-2 sm:px-5 sm:py-3 transition-all duration-300 text-xl sm:text-2xl">
            <FaInstagram />
          </div>
          <div className="text-gray-500 hover:text-white bg-gray-500/30 rounded-xl hover:bg-white/20 px-2 py-2 sm:px-5 sm:py-3 transition-all duration-300 text-xl sm:text-2xl">
            <FaTwitter />
          </div>
          <div className="text-gray-500 hover:text-white bg-gray-500/30 rounded-xl hover:bg-white/20 px-2 py-2 sm:px-5 sm:py-3 transition-all duration-300 text-xl sm:text-2xl">
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};
