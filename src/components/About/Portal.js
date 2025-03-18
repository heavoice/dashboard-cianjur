import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ekonomi from "../../assets/img/Ekonomi.svg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Portal = () => {
  const [currentSlide, setCurrentSlide] = useState(slide1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slide1 ? slide2 : slide1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="portal"
      className="relative p-4 w-full h-auto flex flex-col justify-start items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto botd"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-slate-50 z-0"></div>

      {/* Kontainer teks */}
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-black mt-40">
        <div className="flex flex-row gap-2 items-start mr-auto ">
          <Link to="/" className="">
            Beranda
          </Link>
          <MdOutlineKeyboardArrowRight className="text-md mt-1" />
          <Link to="/about">Tentang</Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-4 sm:p-8   ">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-noto sm:self-center">
            Tentang <div className="mt-4">Dashboard Cianjur</div>
          </div>

          <img
            src={Ekonomi}
            className="w-20 h-20 sm:w-24 sm:h-24 lg: xl:w-48 xl:h-48 lg:mr-40 mt-10 sm:mt-0"
          />
        </div>

        <div className="mr-auto mt-20 md:mt-10 p-4">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold font-noto">
            Apa itu Dashboard Cianjur?
          </p>
          <p className="mt-2 sm:mt-5">
            Dashboard Cianjur adalah sebuah platform yang menyajikan informasi
            melalui visualisasi yang informatif, terintegrasi, mutakhir, dan
            dapat diandalkan untuk pengambilan kebijakan berbasis data yang
            terukur bagi pemerintah dan sarana edukasi bagi masyarakat.
          </p>
        </div>
        <div className="mr-auto mt-20 md:mt-10 p-4">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold font-noto">
            Tujuan Dashboard Cianjur
          </p>
          <p className="mt-2 sm:mt-5">
            Terwujudnya pengambilan kebijakan berbasis data yang terukur bagi
            pemerintah dan sarana edukasi bagi masyarakat melalui visualisasi
            yang informatif, terintegrasi, mutakhir, dan dapat diandalkan.
          </p>
        </div>
        <div className="mr-auto mt-20 md:mt-10 p-4">
          <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold font-noto">
            Regulasi Pendukung Dashboard Cianjur
          </p>
          <p className="mt-2 sm:mt-5">
            Dashboard Cianjur untuk Citizen mengacu terhadap Undang-Undang No.14
            Tahun 2008 mengenai Keterbukaan Informasi Publik yang menyatakan
            bahwa setiap Badan Publik memiliki kewajiban untuk membuka akses
            bagi setiap pemohon informasi publik untuk mendapatkan informasi
            publik, kecuali informasi yang memuat rahasia pribadi, rahasia
            negara, dan sejenisnya.
          </p>
        </div>
      </div>
    </div>
  );
};
