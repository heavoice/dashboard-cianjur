import React, { useState } from "react";
import { motion } from "framer-motion";
import bg from "../assets/img/bg.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#1A1A1D90]"></div>
      <div className="relative z-10 flex flex-col justify-center items-center px-4 w-[80%] h-[70%] bg-[#1A1A1D90] rounded-2xl">
        <div className="text-center font-nunito">
          <p className="text-white font-extrabold uppercase text-xl sm:text-2xl md:text-3xl xl:text-5xl py-4">
            about slp community
          </p>
          {isVisible && (
            <motion.h1
              className="text-white mx-0 sm:mx-24 text-justify text-xs sm:text-sm"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeIn}
            >
              Ut est laboris sit elit incididunt cillum fugiat. Pariatur duis et
              veniam adipisicing anim exercitation id irure voluptate sit.
              Occaecat adipisicing irure magna magna aliquip enim cillum. Aliqua
              do sint ullamco qui eiusmod laboris Lorem ex ad qui mollit. Sint
              ullamco incididunt aliqua reprehenderit eiusmod dolore ullamco et.
              Sit pariatur incididunt commodo dolor.
            </motion.h1>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
            <button
              onClick={handleToggle}
              className="mt-4 btn-grad hover:bg-transparent hover:text-white bg-gradient-to-r from-[#1FA2FF] via-[#12D8FA] to-[#1FA2FF] px-12 py-4 text-white text-sm font-semibold uppercase transition-all duration-500 shadow-lg rounded-full transform"
            >
              {isVisible ? "Close Description" : "Open Description"}
            </button>
            <button className="mt-0 sm:mt-4 btn-grad hover:bg-blue-500 hover:text-white bg-transparent border-2 border-blue-500 bg-clip-border px-12 py-4 text-white text-sm font-semibold uppercase transition-all duration-500 shadow-lg rounded-full transform">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
