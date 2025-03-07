import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ekonomi from "../assets/img/Ekonomi.svg";
import Environment from "../assets/img/Environment.svg";
import Governance from "../assets/img/Governance.svg";
import Industri from "../assets/img/Industri.svg";
import Infrastruktur from "../assets/img/Infrastruktur.svg";
import Kemiskinan from "../assets/img/Kemiskinan.svg";
import Kependudukan from "../assets/img/Kependudukan.svg";
import Kesehatan from "../assets/img/Kesehatan.svg";
import Pariwisata from "../assets/img/Pariwisata.svg";
import Pendidikan from "../assets/img/Pendidikan.svg";
import Social from "../assets/img/Ekonomi.svg";
import Banner1 from "../assets/img/banner1.png";
import Banner2 from "../assets/img/comingsoon.png";

export const News = () => {
  const dashboard = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        dashboard: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        dashboard: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        dashboard: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  const content = [
    { src: Ekonomi, label: "Ekonomi", link: "/ekonomi" },
    { src: Environment, label: "Lingkungan", link: "/lingkungan" },
    { src: Governance, label: "Pemerintahan", link: "/pemerintahan" },
    { src: Industri, label: "Industri", link: "/industri" },
    { src: Infrastruktur, label: "Infrastruktur", link: "/infrastruktur" },
    { src: Kemiskinan, label: "Kemiskinan", link: "/kemiskinan" },
    { src: Kependudukan, label: "Kependudukan", link: "/kependudukan" },
    { src: Kesehatan, label: "Kesehatan", link: "/kesehatan" },
    { src: Pariwisata, label: "Pariwisata", link: "/pariwisata" },
    { src: Pendidikan, label: "Pendidikan", link: "/pendidikan" },
    { src: Social, label: "Sosial", link: "/sosial" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 830) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < content.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const prevSlide = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center p-4">
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl xxs:p-4 sm:p-10 md:p-20 bg-white z-10 rounded-xl -translate-y-20 font-nunito">
        <div className="flex flex-col xs:flex-row items-center gap-4 text-2xl font-bold text-black mb-20">
          <p className="whitespace-nowrap">Topik Populer</p>
          <div className="flex-1 border-t border-black/10"></div>
          <a
            href="#"
            className="text-sm text-green-600 hover:underline xxs:text-right"
          >
            Lihat Semua Berita
          </a>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="mr-2 p-1 sm:p-2 bg-transparent border-2 border-green-600 hover:bg-green-600 transition-all duration-200 rounded-full flex items-center justify-center text-green-600 hover:text-white"
          >
            <FaChevronLeft className="text-sm sm:text-xl " />
          </button>

          <div className="flex gap-4 justify-center items-start flex-grow overflow-hidden">
            {content
              .slice(startIndex, startIndex + visibleCount)
              .map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="w-auto h-auto p-4 rounded-lg flex flex-col items-center"
                >
                  <img
                    src={item.src}
                    alt={`icon-${index}`}
                    className="w-16 h-16 sm:w-24 sm:h-24 xl:w-48 xl:h-48 object-cover "
                  />
                  <p className="text-center font-bold mt-2">{item.label}</p>
                </a>
              ))}
          </div>

          <button
            onClick={nextSlide}
            className="ml-2 p-1 sm:p-2 bg-transparent border-2 border-green-600 hover:bg-green-600 transition-all duration-200 rounded-full flex items-center justify-center text-green-600 hover:text-white"
          >
            <FaChevronRight className="text-sm sm:text-xl " />
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: Math.ceil(content.length / visibleCount) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index * visibleCount)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === Math.floor(startIndex / visibleCount)
                    ? "bg-green-600 w-4"
                    : "bg-gray-300"
                }`}
              ></button>
            )
          )}
        </div>
      </div>
      <div className="slider-container w-full xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-7xl overflow-hidden">
        <Slider {...dashboard} className="flex justify-center overflow-hidden">
          <div className="flex justify-center px-4">
            <a href="#">
              <img
                src={Banner1}
                alt="Banner 1"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="flex justify-center px-4">
            <a href="#">
              <img
                src={Banner2}
                alt="Coming Soon"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="flex justify-center px-4">
            <a href="#">
              <img
                src={Banner2}
                alt="Coming Soon"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <div className="flex justify-center px-4">
            <a href="#">
              <img
                src={Banner2}
                alt="Coming Soon"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default News;
