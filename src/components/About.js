import React, { useState } from "react";
import bg from "../assets/img/bg.jpg";

export const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleToggle = () => {
    setIsVisible(!isVisible);
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
      <div className="w-[80%] h-[70%] bg-[#1A1A1D90] rounded-2xl">
        <div className="text-center py-16 font-nunito relative z-10">
          <p className="text-white font-extrabold uppercase text-xl sm:text-5xl py-4">
            about slp community
          </p>
          {isVisible && (
            <h1 className="text-white mx-0 sm:mx-24 text-justify text-xs sm:text-sm">
              Ut est laboris sit elit incididunt cillum fugiat. Pariatur duis et
              veniam adipisicing anim exercitation id irure voluptate sit.
              Occaecat adipisicing irure magna magna aliquip enim cillum. Aliqua
              do sint ullamco qui eiusmod laboris Lorem ex ad qui mollit. Sint
              ullamco incididunt aliqua reprehenderit eiusmod dolore ullamco et.
              Sit pariatur incididunt commodo dolor.
            </h1>
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
