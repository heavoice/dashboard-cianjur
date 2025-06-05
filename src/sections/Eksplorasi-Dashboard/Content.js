import React, { useState } from "react";
import { FaSearch, FaExternalLinkAlt } from "react-icons/fa";
import Ekonomi from "../../assets/img/Ekonomi.svg";
import { Link, useNavigate } from "react-router-dom";
import RekomendasiSekolah from "../../assets/img/rekomendasi-sekolah.svg";
import OverviewPendidikan from "../../assets/img/overview-pendidikan.svg";
import { categories } from "../../data/Categories";
import { motion } from "framer-motion";

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
  <motion.div
    initial={{ opacity: 0, scale: 1, x: -25 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{
      duration: 1,
      type: "tween",
      ease: "easeInOut",
    }}
    viewport={{ once: false, amount: 0.2 }}
    className="flex flex-col w-full gap-4 rounded p-4 hover:bg-slate-100"
  >
    <img src={imageSrc} alt={title} className="w-max" />
    <div className="flex flex-row justify-between gap-3 ">
      <p className="text-[#22A9E1] text-xs w-full font-bold sm:text-base line-clamp-2 md:line-clamp-none">
        {title}
      </p>
      <FaExternalLinkAlt className="text-[#22A9E1] cursor-pointer w-fit xl:w-6 h-fit xl:h-6 mt-1" />
    </div>
    <div className="flex flex-col text-xxs sm:text-xs gap-2 xs:flex-row mt-auto">
      <button className="bg-[#22A9E1] rounded text-white w-fit px-[0.65rem] py-1">
        {category}
      </button>
      <button className="bg-[#22A9E1]/20 rounded text-[#22A9E1] w-fit px-[0.65rem] py-1">
        {year}
      </button>
    </div>
  </motion.div>
);

export const Content = () => {
  const [selectedCategory, setSelectedCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const filteredCategories = categories.filter((category) =>
    category.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    navigate(`/eksplorasi-dashboard/${category}`, { replace: true });
  };

  return (
    <div className="flex flex-col bg-center bg-cover h-auto justify-start p-4 w-full font-nunito items-center overflow-auto relative">
      <div className="flex flex-col justify-start text-black text-left w-full font-nunito items-center mt-10 mx-auto sm:max-w-7xl xs:max-w-[25rem] xxs:max-w-[18rem]">
        <div className="flex flex-col justify-between w-full gap-4 lg:flex-row">
          <div className="lg:border-r p-4 w-full basis-1/4">
            <motion.div
              initial={{ opacity: 0, scale: 1, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex border rounded-lg w-full items-center mt-auto overflow-hidden relative"
            >
              <FaSearch className="text-[#22A9E1] absolute ml-3" />
              <input
                type="text"
                placeholder="Cari..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-gray-25 border-none p-3 text-gray-700 w-full focus:outline-none pl-10 pr-16"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="max-h-[23.5rem] mt-6 overflow-y-auto"
            >
              {filteredCategories.map(({ category, label, icon }) => (
                <CategoryButton
                  key={category}
                  category={category}
                  onClick={handleCategoryClick}
                  imageSrc={icon}
                >
                  {label}
                </CategoryButton>
              ))}
            </motion.div>
          </div>

          <div className="p-4 rounded w-full basis-3/4 self-center">
            {["semua", "pendidikan"].includes(selectedCategory) && (
              <>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Pendidikan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <Link
                    to="/eksplorasi-dashboard/rekomendasi-sekolah"
                    className="block no-underline"
                  >
                    <ContentCard
                      title="Dashboard Rekomendasi Sekolah"
                      category="Pendidikan"
                      year="2024"
                      imageSrc={RekomendasiSekolah}
                    />
                  </Link>
                  <Link to="/eksplorasi-dashboard/overview-pendidikan">
                    <ContentCard
                      title="Overview Pendidikan"
                      category="Pendidikan"
                      year="2024"
                      imageSrc={OverviewPendidikan}
                    />
                  </Link>

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
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">Sosial</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Dashboard Rekomendasi Sekolah"
                    category="Sosial"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "kesehatan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">Kesehatan</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Situasi Covid-19"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Ketersediaan Tempat Tidur"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Overview Kesehatan"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Sebaran Rumah Sakit Cianjur"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Kasus Stunting Cianjur"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Angka Harapan Hidup"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Target dan Capaian BIAN"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Target dan Capaian PIN"
                    category="Kesehatan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "kependudukan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Kependudukan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Kependudukan"
                    category="Kependudukan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Demografi Penduduk Cianjur"
                    category="Kependudukan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Kepadatan Penduduk Cianjur"
                    category="Kependudukan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Penduduk Disabilitas Cianjur"
                    category="Kependudukan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "industri"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">Industri</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Industri"
                    category="Industri"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Demografi Penduduk Cianjur"
                    category="Industri"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Kepadatan Penduduk Cianjur"
                    category="Industri"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Penduduk Disabilitas Cianjur"
                    category="Industri"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "ekonomi"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">Ekonomi</div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Harga Pangan Cianjur"
                    category="Ekonomi"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Pendapatan Daerah Cianjur"
                    category="Ekonomi"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                  <ContentCard
                    title="Overview Ekonomi dan Keuangan"
                    category="Ekonomi"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "lingkungan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Lingkungan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Lingkungan"
                    category="Lingkungan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "kemiskinan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Kemiskinan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Kemiskinan"
                    category="Kemiskinan"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "infrastruktur"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Infrasturktur
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Infrasturktur"
                    category="Infrasturktur"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "pariwisata"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Pariwisata
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Pariwisata"
                    category="Pariwisata"
                    year="2024"
                    imageSrc={Ekonomi}
                  />
                </div>
              </>
            )}

            {["semua", "pemerintahan"].includes(selectedCategory) && (
              <>
                <div className="mt-10"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 1, x: -25 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{
                    duration: 1,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="flex flex-row justify-between w-full items-center"
                >
                  <div className="text-3xl font-black font-noto">
                    Pemerintahan
                  </div>
                  <div className="flex-grow border-b border-black/20 mx-4"></div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-10 xl:grid-cols-4 gap-y-8 rounded">
                  <ContentCard
                    title="Overview Pemerintahan"
                    category="Pemerintahan"
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
