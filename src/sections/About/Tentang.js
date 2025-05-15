import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ilustrasi from "../../assets/img/about-illustration.svg";
import { Link } from "react-router-dom";
import {
  MdKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { aboutdata } from "../../data/AboutData";
import { motion } from "framer-motion";

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
      className="relative p-4 w-full h-auto flex flex-col justify-start items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto botd"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-slate-50 z-0"></div>

      {/* Kontainer teks */}
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-black mt-40">
        <div className="flex flex-row gap-2 items-start mr-auto ">
          <Link
            to="/home"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Beranda
          </Link>
          <MdOutlineKeyboardArrowRight className="text-md mt-1" />
          <Link
            to="/about"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Tentang
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row justify-between w-full p-4 sm:p-8   ">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold font-noto sm:self-center">
            Tentang <div className="md:mt-4 xxs:mb-10">Dashboard Cianjur</div>
          </div>

          <img src={Ilustrasi} className="sm:mt-0 xl:mr-40" />
        </div>

        <div className="p-4 mb-20 sm:mb-40 w-full">
          {aboutdata.map((item, index) => (
            <div key={index} className="mr-auto mt-10 md:mt-10 py-4 border-b">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold font-noto">
                  {item.title}
                </p>
                <MdKeyboardArrowDown
                  className={`text-lg xs:mt-1 xs:ml-2 lg:text-3xl lg:ml-4 transition-transform duration-300 ${
                    openItems[index] ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openItems[index] && (
                <motion.p
                  initial={{ opacity: 0, scale: 1, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="mt-2 sm:mt-5"
                >
                  {item.description}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
