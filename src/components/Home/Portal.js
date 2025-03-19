import React, { useState, useEffect } from "react";
import slide1 from "../../assets/img/slide1.jpg";
import slide2 from "../../assets/img/slide2.jpg";
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
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

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

  // Main title
  const textIndexTitle = useMotionValue(0); // Motion value for tracking main title index
  const textsTitle = ["Hadirkan Visualisasi Data Cianjur Dalam Satu Kanal."]; // Main title text
  const baseTextTitle = useTransform(
    textIndexTitle,
    (latest) => textsTitle[latest] || ""
  );

  // Subtitle
  const textIndexSubtitle = useMotionValue(0); // Motion value for tracking subtitle index
  const textsSubtitle = [
    "Hadirkan angka, metriks, dan visualisasi data Jabar dalam satu kanal. Bantu analisis data dan perumusan kebijakan jadi lebih baik.",
  ]; // Subtitle text
  const baseTextSubtitle = useTransform(
    textIndexSubtitle,
    (latest) => textsSubtitle[latest] || ""
  );

  const countTitle = useMotionValue(0); // Motion value to control the text slicing for title
  const countSubtitle = useMotionValue(0); // Motion value to control the text slicing for subtitle

  const roundedTitle = useTransform(countTitle, (latest) => Math.round(latest)); // Round the count value for title
  const roundedSubtitle = useTransform(countSubtitle, (latest) =>
    Math.round(latest)
  ); // Round the count value for subtitle

  const displayTextTitle = useTransform(
    roundedTitle,
    (latest) => baseTextTitle.get().slice(0, latest) // Slice the title based on the count
  );

  const displayTextSubtitle = useTransform(
    roundedSubtitle,
    (latest) => baseTextSubtitle.get().slice(0, latest) // Slice the subtitle based on the count
  );

  const updatedThisRoundTitle = useMotionValue(true); // To track the round completion for title
  const updatedThisRoundSubtitle = useMotionValue(true); // To track the round completion for subtitle

  useEffect(() => {
    // Animate count value for title to simulate the typing effect
    animate(countTitle, baseTextTitle.get().length, {
      type: "tween",
      duration: 3, // Duration for typing effect
      ease: "easeInOut",
      repeatType: "reverse", // Reverse effect after each completion
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRoundTitle.get() === true && latest > 0) {
          updatedThisRoundTitle.set(false);
        } else if (updatedThisRoundTitle.get() === false && latest === 0) {
          // Switch to the next text when the current one finishes typing (for title)
          if (textIndexTitle.get() === textsTitle.length - 1) {
            textIndexTitle.set(0);
          } else {
            textIndexTitle.set(textIndexTitle.get() + 1);
          }
          updatedThisRoundTitle.set(true);
        }
      },
    });

    // Animate count value for subtitle to simulate the typing effect
    animate(countSubtitle, baseTextSubtitle.get().length, {
      type: "tween",
      duration: 3, // Duration for typing effect
      ease: "easeInOut",
      repeatType: "reverse", // Reverse effect after each completion
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRoundSubtitle.get() === true && latest > 0) {
          updatedThisRoundSubtitle.set(false);
        } else if (updatedThisRoundSubtitle.get() === false && latest === 0) {
          // Switch to the next text when the current one finishes typing (for subtitle)
          if (textIndexSubtitle.get() === textsSubtitle.length - 1) {
            textIndexSubtitle.set(0);
          } else {
            textIndexSubtitle.set(textIndexSubtitle.get() + 1);
          }
          updatedThisRoundSubtitle.set(true);
        }
      },
    });

    return () => {
      // Clean up the animation on component unmount
      countTitle.stop();
      countSubtitle.stop();
    };
  }, [
    countTitle,
    baseTextTitle,
    textIndexTitle,
    updatedThisRoundTitle,
    countSubtitle,
    baseTextSubtitle,
    textIndexSubtitle,
    updatedThisRoundSubtitle,
  ]);

  return (
    <div
      id="portal"
      className="relative p-4 w-full h-screen flex flex-col justify-center items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto botd"
      style={{ backgroundImage: `url(${currentSlide})` }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0"></div>

      {/* Kontainer teks */}
      <div className="w-full xxs:max-w-[15rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col">
        {/* Main Title Section */}
        <motion.h1 className="text-white text-xl xs:text-2xl md:text-2xl lg:text-5xl font-extrabold max-w-xl w-full flex justify-center items-center text-start font-noto">
          {displayTextTitle}
        </motion.h1>

        {/* Subtitle Section */}
        <motion.h2 className="text-white text-sm max-w-xl w-full mt-6 ">
          {displayTextSubtitle}
        </motion.h2>

        {/* Input Pencarian */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-6 w-full max-w-xl flex items-center relative rounded-lg overflow-hidden"
        >
          <FaSearch className="ml-3 absolute text-green-600" />
          <input
            type="text"
            placeholder="Cari..."
            className="w-full p-3 pl-10 pr-16 border-none focus:outline-none text-gray-700"
          />
          <button className="absolute right-2 bg-green-600 text-white px-4 py-2 rounded-lg">
            Cari
          </button>
        </motion.div>

        {/* Carousel */}

        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="slider-container w-full max-w-xl mt-6"
        >
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
        </motion.div>
        {/* sosmed dll */}
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            type: "spring",
            bounce: 0,
          }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-row gap-3 pt-8"
        >
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
        </motion.div>
      </div>
    </div>
  );
};
