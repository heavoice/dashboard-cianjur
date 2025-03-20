import React from "react";
import Ekonomi from "../../assets/img/Ekonomi.svg";
import Environment from "../../assets/img/Environment.svg";
import Governance from "../../assets/img/Governance.svg";
import Industri from "../../assets/img/Industri.svg";
import Infrastruktur from "../../assets/img/Infrastruktur.svg";
import Kemiskinan from "../../assets/img/Kemiskinan.svg";
import Kependudukan from "../../assets/img/Kependudukan.svg";
import Kesehatan from "../../assets/img/Kesehatan.svg";
import Pariwisata from "../../assets/img/Pariwisata.svg";
import Pendidikan from "../../assets/img/Pendidikan.svg";
import Social from "../../assets/img/Ekonomi.svg";
import { FaExternalLinkAlt, FaSearch } from "react-icons/fa";

export const Content = () => {
  return (
    <div className="relative p-4 w-full h-auto flex flex-col justify-start items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto">
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-black mt-10">
        <div className="w-full justify-between flex-col lg:flex-row flex gap-4">
          {/* Jenis Topik */}
          <div className="basis-1/4 w-full p-4 border-r rounded">
            <div className="w-full flex items-center relative rounded-lg overflow-hidden border mt-auto">
              <FaSearch className="ml-3 absolute text-green-600" />
              <input
                type="text"
                placeholder="Cari..."
                className="w-full p-3 pl-10 pr-16 border-none focus:outline-none bg-gray-50 text-gray-700"
              />
              <button className="absolute right-2 bg-green-600 text-white px-3 py-1 rounded-lg">
                Cari
              </button>
            </div>
            <div className="max-h-[27.5rem] overflow-y-auto mt-6">
              {/* Semua Topik */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Semua Topik</p>
                </div>
              </div>
              {/* Pendidikan */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Pendidikan</p>
                </div>
              </div>
              {/* Sosial */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Sosial</p>
                </div>
              </div>
              {/* Kependudukan */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Kependudukan</p>
                </div>
              </div>
              {/* Kependudukan */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Kependudukan</p>
                </div>
              </div>
              {/* Kependudukan */}
              <div className="flex flex-row items-center mt-6 gap-4">
                <div>
                  <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                </div>
                <div>
                  <p className="font-bold mt-2 text-lg">Kependudukan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/4 w-full p-4 border-r rounded self-center">
            <div className="flex flex-row  justify-between items-center w-full">
              <div className="text-3xl font-noto font-black">Pendidikan</div>
              <div className="flex-grow border-b border-black/20 mx-4"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 mt-10 gap-4">
              {/* 1 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 2 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 3 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 4 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 5 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 6 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
              {/* 7 */}
              <div className="w-full flex flex-col gap-4">
                <img src={Ekonomi} alt="Ekonomi" className="w-max" />
                <div className="flex flex-row justify-between">
                  <p className="text-xs sm:text-xl font-bold text-green-600 w-fit">
                    Dashboard Rekomendasi Sekolah
                  </p>
                  <FaExternalLinkAlt className=" cursor-pointer text-green-600 text-xs sm:text-xl" />
                </div>
                <div className="flex xs:flex-row flex-col gap-2 text-xs">
                  <button className="px-[0.65rem] py-1 bg-green-600 rounded-lg text-white w-fit">
                    Pendidikan
                  </button>
                  <button className="px-[0.65rem] py-1 bg-green-600/20 rounded-lg text-green-600">
                    2024
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
