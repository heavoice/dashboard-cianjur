import React, { useState } from "react";
import Ekonomi from "../../assets/img/Ekonomi.svg";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import { categories } from "../../constant/Topik";

export const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua Topik");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCategory = categories.filter(
    (category) => category.category === selectedCategory
  );

  return (
    <div className="flex flex-col bg-center bg-cover h-auto justify-start p-4 w-full duration-1000 font-nunito items-center overflow-auto relative transition-all">
      <div className="flex flex-col justify-start text-black text-left w-full font-nunito items-center mt-10 mx-auto sm:max-w-7xl xs:max-w-[25rem] xxs:max-w-[18rem] z-10">
        <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
          {/* Jenis Topik */}
          <div className="border-r p-4 rounded w-full basis-1/4">
            <div className="flex border rounded-lg w-full items-center mt-auto overflow-hidden relative">
              <FaSearch className="text-green-600 absolute ml-3" />
              <input
                type="text"
                placeholder="Cari..."
                className="bg-gray-50 border-none p-3 text-gray-700 w-full focus:outline-none pl-10 pr-16"
              />
              <button className="bg-green-600 rounded-lg text-white absolute px-3 py-1 right-2">
                Cari
              </button>
            </div>
            <div className="max-h-[27.5rem] mt-6 overflow-y-auto">
              <div className="flex flex-row gap-4 items-center mt-6">
                <button
                  onClick={() => handleCategoryChange("Semua Topik")}
                  className="flex text-lg font-bold gap-4 items-center"
                >
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" /> Semua
                  Topik
                </button>
              </div>
              <div className="flex flex-row gap-4 items-center mt-6">
                <button
                  onClick={() => handleCategoryChange("Pendidikan")}
                  className="flex text-lg font-bold gap-4 items-center"
                >
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />{" "}
                  Pendidikan
                </button>
              </div>

              <div className="flex flex-row gap-4 items-center mt-6">
                <button
                  onClick={() => handleCategoryChange("Sosial")}
                  className="flex text-lg font-bold gap-4 items-center"
                >
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" /> Sosial
                </button>
              </div>
            </div>
          </div>

          <div className="border-r p-4 rounded w-full basis-3/4 self-center">
            {/* Displaying selected category */}
            <div className="flex flex-row justify-between w-full items-center">
              <div className="text-3xl font-black font-noto">
                {selectedCategory}
              </div>
              <div className="flex-grow border-b border-black/20 mx-4"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4">
              {/* Dynamically displaying items based on selected category */}
              {filteredCategory[0]?.items.map((item, index) => (
                <div key={index} className="flex flex-col w-full gap-4">
                  <img src={item.img} alt={item.title} className="w-max" />
                  <div className="flex flex-row justify-between space-x-4">
                    <p className="text-green-600 text-xs w-fit font-bold sm:text-xl">
                      {item.title}
                    </p>
                    <FaExternalLinkAlt className="text-green-600 text-xs cursor-pointer sm:text-xl" />
                  </div>
                  <div className="flex flex-col text-xs gap-2 xs:flex-row">
                    <button className="bg-green-600 rounded-lg text-white w-fit px-[0.65rem] py-1">
                      {selectedCategory}
                    </button>
                    <button className="bg-green-600/20 rounded-lg text-green-600 px-[0.65rem] py-1">
                      {item.year}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
