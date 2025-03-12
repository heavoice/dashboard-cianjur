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
import { motion } from "framer-motion";

export const Features = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [Banner1, Banner2, Banner2, Banner2];

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0,
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl xxs:p-4 sm:p-10 md:p-20 bg-white z-10 rounded-xl -translate-y-20 font-nunito"
      >
        <div className="flex flex-col xs:flex-row items-center gap-0 xs:gap-4 text-2xl font-bold text-black mb-10">
          <p className="whitespace-nowrap">Topik Populer</p>
          <div className="flex-1 border-t border-black/10"></div>
          <a
            href="#"
            className="text-sm text-green-600 hover:underline xxs:text-right"
          >
            Lihat Semua Berita
          </a>
        </div>
        {/* topik  */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="mr-2 p-1 sm:p-2 bg-transparent border-2 border-green-600 hover:bg-green-600 transition-all duration-200 rounded-full flex items-center justify-center text-green-600 hover:text-white"
          >
            <FaChevronLeft className="text-sm sm:text-xl " />
          </button>

          <motion.div
            key={startIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: "easeInOut",
            }}
            className="flex gap-4 justify-center items-start overflow-hidden"
          >
            {content
              .slice(startIndex, startIndex + visibleCount)
              .map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="w-auto h-auto  rounded-lg flex flex-col items-center"
                >
                  <img
                    src={item.src}
                    alt={`icon-${index}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 xl:w-48 xl:h-48 object-cover "
                  />
                  <p className="text-center font-bold mt-2">{item.label}</p>
                </a>
              ))}
          </motion.div>

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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 1, x: -100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          type: "tween",
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl overflow-hidden relative mt-10"
      >
        {/* Carousel Images Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <a href="#">
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevBanner}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 border-2 border-green-600  transition-all duration-200  flex items-center justify-center text-white hover:text-white p-2 md:p-4 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 border-2 border-green-600  transition-all duration-200  flex items-center justify-center text-white hover:text-white p-2 md:p-4 rounded-full"
        >
          <FaChevronRight />
        </button>
      </motion.div>
    </div>
  );
};

export default Features;
