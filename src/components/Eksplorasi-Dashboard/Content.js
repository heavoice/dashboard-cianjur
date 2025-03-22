import React, { useState } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import Ekonomi from "../../assets/img/Ekonomi.svg";

const CategoryButton = ({ category, onClick, children, imageSrc }) => (
  <div className="flex flex-row gap-4 items-center mt-6">
    <button
      className="flex text-lg font-bold gap-4 items-center"
      onClick={() => onClick(category)}
    >
      <img src={imageSrc} alt={category} className="w-max" />
      {children}
    </button>
  </div>
);

const ContentCard = ({ title, category, year, imageSrc }) => (
  <div className="flex flex-col w-full gap-4 ">
    <img src={imageSrc} alt={title} className="w-max" />
    <div className="flex flex-row justify-between gap-8">
      <p className="text-green-600 text-xs w-fit font-bold sm:text-xl">
        {title}
      </p>
      <FaExternalLinkAlt className="text-green-600 text-xs cursor-pointer sm:text-xl" />
    </div>
    <div className="flex flex-col text-xs gap-2 xs:flex-row mt-auto">
      <button className="bg-green-600 rounded-lg text-white w-fit px-[0.65rem] py-1">
        {category}
      </button>
      <button className="bg-green-600/20 rounded-lg text-green-600 px-[0.65rem] py-1">
        {year}
      </button>
    </div>
  </div>
);

export const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("semua");

  return (
    <div className="flex flex-col bg-center bg-cover h-auto justify-start p-4 w-full duration-1000 font-nunito items-center overflow-auto relative transition-all">
      <div className="flex flex-col justify-start text-black text-left w-full font-nunito items-center mt-10 mx-auto sm:max-w-7xl xs:max-w-[25rem] xxs:max-w-[18rem] z-10">
        <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
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
              <CategoryButton
                category="semua"
                onClick={setSelectedCategory}
                imageSrc={Ekonomi}
              >
                Semua Kategori
              </CategoryButton>
              <CategoryButton
                category="pendidikan"
                onClick={setSelectedCategory}
                imageSrc={Ekonomi}
              >
                Pendidikan
              </CategoryButton>
              <CategoryButton
                category="sosial"
                onClick={setSelectedCategory}
                imageSrc={Ekonomi}
              >
                Sosial
              </CategoryButton>
              <CategoryButton
                category="kesehatan"
                onClick={setSelectedCategory}
                imageSrc={Ekonomi}
              >
                Kesehatan
              </CategoryButton>
            </div>
          </div>

          <div className="border-r p-4 rounded w-full basis-3/4 self-center">
            {["semua", "pendidikan"].includes(selectedCategory) && (
              <>
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="text-3xl font-black font-noto">
                    Pendidikan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 ">
                  <ContentCard
                    title="Dashboard Rekomendasi Sekolah"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Overview Pendidikan"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Indeks Pendidikan Cianjur"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Jumlah Sekolah, Guru, Siswa (SMA) Cianjur"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Jumlah Sekolah, Guru, Siswa (SD) Cianjur"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Jumlah Sekolah, Guru, Siswa (SMK) Cianjur"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Jumlah Sekolah, Guru, Siswa (SMP) Cianjur"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "sosial"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="text-3xl font-black font-noto">Sosial</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4">
                  <ContentCard
                    title="Dashboard Rekomendasi Sekolah"
                    category="Pendidikan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}
            {["semua", "kesehatan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <div className="flex flex-row justify-between w-full items-center">
                  <div className="text-3xl font-black font-noto">Kesehatan</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4">
                  <ContentCard
                    title="Situasi Covid-19"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
