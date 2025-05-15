import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

export const Tentang = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const [currentSlide, setCurrentSlide] = useState(slide1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="tentang"
      className="relative p-4 w-full h-auto flex flex-col justify-start  items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0"></div>

      {/* Kontainer teks */}
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-white mt-40">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-start items-start mr-auto">
          <div className="flex flex-row items-center gap-2 text-black">
            <Link
              to="/"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Beranda
            </Link>
            <MdOutlineKeyboardArrowRight className="text-md " />
            <Link
              to="/eksplorasi-dashboard"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Eksplorasi Dashboard
            </Link>
            <MdOutlineKeyboardArrowRight className="text-md " />
          </div>

          <div className="flex flex-row items-center gap-2 translate-x-2 sm:translate-x-0 text-black">
            <Link
              to="/eksplorasi-dashboard/rekomendasi-sekolah"
              className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
            >
              Rekomendasi Sekolah
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full mt-6 text-black">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold font-noto ">
            Rekomendasi Sekolah
          </div>
          <p className="mt-10 mb-10">
            Cari, temukan dan bandingkan sekolah yang sesuai kriteria Anda untuk
            <br /> sekolah tingkat SMA, SMK, SLB sederajat di Jawa Barat
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between text-black w-full gap-4">
          <div className="flex flex-col gap-1">
            <p>Update Terakhir: </p>
            <p>Sumber Data: </p>
          </div>
          <div className="">
            <button className="flex flex-row gap-1 bg-[#22A9E1] text-white px-4 py-3 rounded-lg">
              Bagikan <FaShareAlt className="mt-1" />
            </button>
          </div>
        </div>
        <div className="mb-20"></div>
      </div>
    </div>
  );
};
