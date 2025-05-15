import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Pendidikan } from "../../api/Pendidikan";

export const Tentang = () => {
  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const [iplmData, setIplmData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await Pendidikan();
      setIplmData(data);
    };

    getData();
  }, []);

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
              Overview Pendidikan
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between w-full mt-6 text-black gap-4">
          <div className="text-lg md:text-xl lg:text-2xl font-bold font-noto ">
            Overview Pendidikan
          </div>
          <div className="">
            <button className="flex flex-row gap-1 bg-[#22A9E1] text-white px-4 py-3 rounded-lg">
              Bagikan <FaShareAlt className="mt-1" />
            </button>
          </div>
        </div>
        <div className="mt-10 w-full items-start">
          <div className="w-full h-auto bg-[#22A9E1] flex flex-col items-start rounded-lg py-8 px-8">
            <div className="w-full justify-between flex flex-row">
              <h1 className="font-bold text-xl">
                Indeks Pembangunan Literasi Masyarakat
              </h1>
              <IoMdInformationCircleOutline className="mt-0.5 text-xl" />
            </div>

            <div className="relative overflow-x-auto sm:justify-evenly flex flex-col sm:flex-row w-full self-center mt-6">
              {iplmData.map((item, index) => (
                <div key={index} className="space-y-8 sm:space-y-2">
                  <h1 className="text-xl font-bold">{item.iplm} Poin</h1>
                  <p className="text-sm">Data tahun {item.tahun}</p>
                </div>
              ))}
            </div>
            <hr className="mt-6 border-t border-white w-full" />

            <div className="mt-6">
              <button className="flex flex-row bg-transparent border-white border text-white p-2 text-xs rounded-lg">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full mt-20 text-black gap-4">
          <div className="text-lg md:text-xl lg:text-2xl font-bold font-noto border p-8 rounded-lg w-full h-[800px]">
            Pertumbuhan Rata-Rata Lama Sekolah & Indeks Pendidikan
          </div>
        </div>
      </div>
    </div>
  );
};
