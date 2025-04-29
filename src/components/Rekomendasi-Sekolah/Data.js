import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MapView } from "../../components/MapView";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import IconPendidikan from "../../assets/img/icon-pendidikan.svg";

export const filterOptions = {
  lokasi: ["Cianjur", "Warungkondang", "Cibeber"],
  jenjang: ["SD", "SMP", "SMA"],
  status: ["Negeri", "Swasta"],
  akreditasi: ["A", "B", "C"],
};

export const Data = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div
      id="tentang"
      className="relative p-4 w-full h-auto flex flex-col justify-start  items-center bg-cover bg-center transition-all duration-1000 font-nunito"
    >
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-white border rounded-lg mt-20">
        {/* Fungsi Filterasi Data */}
        <div className="flex flex-col lg:flex-row w-full p-4 items-start justify-center gap-4 lg:gap-12">
          <div className=" w-full max-w-max">
            <div className="w-fit flex items-center relative border border-gray-300 rounded-lg overflow-hidden">
              <FaSearch className="ml-3 absolute text-[#22a9e1]" />
              <input
                type="text"
                placeholder="Cari sekolah..."
                className="w-full p-3 pl-10 pr-16 border-none focus:outline-none text-gray-700"
              />
            </div>
          </div>

          <div className=" w-full max-w-max">
            <div className="flex flex-row gap-2 w-fit">
              {Object.entries(filterOptions).map(([key, options]) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="p-2 md:px-5 md:py-3 sm:text-base text-xxs text-gray-400 border border-gray-400 justify-center items-center bg-white rounded-lg flex flex-row"
                  >
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/_/g, " ")}
                    <MdKeyboardArrowDown
                      className={`ml-2 transition-transform duration-300 ${
                        openDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === key && (
                    <ul className="absolute z-10 mt-2 w-48  text-gray-400 bg-white border border-gray-300 rounded-lg shadow">
                      {options.map((option, idx) => (
                        <li
                          key={idx}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-max">
            <button className="p-2 md:p-3 sm:text-base text-xxs justify-center items-center bg-[#22a9e1] rounded-lg flex flex-row text-white">
              <img
                src={IconPendidikan}
                className="w-3 h-3 sm:w-5 sm:h-5 filter invert brightness-0 saturate-100"
              />
              <span className="ml-2">Bandingkan Sekolah</span>
              <MdKeyboardArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      {/* Visualisasi Data */}
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left flex-col font-nunito text-white mt-6">
        <div className="w-full h-auto text-white flex flex-col lg:flex-row gap-6">
          <div className="w-full xl:w-[46%] h-auto flex flex-col gap-2 items-center justify-center">
            {/* Nama Sekolah */}
            <div className="w-full p-4 bg-white rounded-lg border flex flex-col gap-5">
              {/* Section 1 */}
              <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                <div className="text-black font-bold uppercase text-lg">
                  SMAN 1 Warungkondang
                </div>
                <div className="flex flex-row gap-1 sm:text-base text-xxs">
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-300 border border-orange-600 text-orange-600 rounded-3xl font-bold">
                    Negeri
                  </p>
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600 rounded-3xl text-white font-semibold">
                    A
                  </p>
                </div>
              </div>
              {/* Section 2 */}
              <div className="text-black flex flex-row w-full xl:max-w-[30rem]">
                <FaLocationDot className="text-[#22a9e1] mt-0.5" />
                <span className="ml-2">
                  Jl. Pasirhuni No.15 Gekbrong, Kabupaten Cianjur, Jawa Barat
                  43256
                </span>
              </div>
              {/* Section 3 */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 w-full">
                <div className="text-black flex flex-col">
                  <p className="font-light">Cadisdik</p>
                  <p className="font-bold text-sm">
                    Cabang Dinas Pendidikan Wilayah VI
                  </p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light">NPSN</p>
                  <p className="font-bold text-sm">20203722</p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light flex flex-row">
                    <span>Jarak</span>
                    <IoIosInformationCircleOutline className="font-normal mt-1 ml-1 text-[#22a9e1]" />
                  </p>
                  <p className="font-bold text-sm">-</p>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full p-4 bg-white rounded-lg border flex flex-col gap-5">
              {/* Section 1 */}
              <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                <div className="text-black font-bold uppercase text-lg">
                  SMAN 1 Warungkondang
                </div>
                <div className="flex flex-row gap-1 sm:text-base text-xxs">
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-300 border border-orange-600 text-orange-600 rounded-3xl font-bold">
                    Negeri
                  </p>
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600 rounded-3xl text-white font-semibold">
                    A
                  </p>
                </div>
              </div>
              {/* Section 2 */}
              <div className="text-black flex flex-row w-full xl:max-w-[30rem]">
                <FaLocationDot className="text-[#22a9e1] mt-0.5" />
                <span className="ml-2">
                  Jl. Pasirhuni No.15 Gekbrong, Kabupaten Cianjur, Jawa Barat
                  43256
                </span>
              </div>
              {/* Section 3 */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 w-full">
                <div className="text-black flex flex-col">
                  <p className="font-light">Cadisdik</p>
                  <p className="font-bold text-sm">
                    Cabang Dinas Pendidikan Wilayah VI
                  </p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light">NPSN</p>
                  <p className="font-bold text-sm">20203722</p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light flex flex-row">
                    <span>Jarak</span>
                    <IoIosInformationCircleOutline className="font-normal mt-1 ml-1 text-[#22a9e1]" />
                  </p>
                  <p className="font-bold text-sm">-</p>
                </div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full p-4 bg-white rounded-lg border flex flex-col gap-5">
              {/* Section 1 */}
              <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                <div className="text-black font-bold uppercase text-lg">
                  SMAN 1 Warungkondang
                </div>
                <div className="flex flex-row gap-1 sm:text-base text-xxs">
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-300 border border-orange-600 text-orange-600 rounded-3xl font-bold">
                    Negeri
                  </p>
                  <p className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600 rounded-3xl text-white font-semibold">
                    A
                  </p>
                </div>
              </div>
              {/* Section 2 */}
              <div className="text-black flex flex-row w-full xl:max-w-[30rem]">
                <FaLocationDot className="text-[#22a9e1] mt-0.5" />
                <span className="ml-2">
                  Jl. Pasirhuni No.15 Gekbrong, Kabupaten Cianjur, Jawa Barat
                  43256
                </span>
              </div>
              {/* Section 3 */}
              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 w-full">
                <div className="text-black flex flex-col">
                  <p className="font-light">Cadisdik</p>
                  <p className="font-bold text-sm">
                    Cabang Dinas Pendidikan Wilayah VI
                  </p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light">NPSN</p>
                  <p className="font-bold text-sm">20203722</p>
                </div>
                <div className="text-black flex flex-col">
                  <p className="font-light flex flex-row">
                    <span>Jarak</span>
                    <IoIosInformationCircleOutline className="font-normal mt-1 ml-1 text-[#22a9e1]" />
                  </p>
                  <p className="font-bold text-sm">-</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map View */}
          <div className="w-full xl:w-[54%] h-auto border rounded-lg flex items-center justify-center z-0">
            <MapView />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-6 w-full mt-6">
          <div className="w-full bg-[#22a9e1] px-5 py-2 rounded-lg">
            <div className="p-10 space-y-2">
              <h1 className="font-noto font-bold text-2xl">Informasi PPDB</h1>
              <p className="font-nunito">
                Penerimaan Peserta Didik Baru (PPDB) merupakan rangkaian
                kegiatan sistematik yang dirancang untuk mengatur
                penyelenggaraan penerimaan peserta didik baru mulai dari
                pendaftaran, proses seleksi, pengumuman hingga daftar ulang.
                Penyelenggaraan PPDB dilakasanakan setiap tahunnya oleh Dinas
                Pendidikan Provinsi Jawa Barat untuk jenjang SMA, SMK dan SLB di
                daerah Provinsi Jawa Barat.
              </p>
            </div>
          </div>
          <div className="w-full border px-5 py-2 rounded-lg">
            <div className="p-5">
              <ul className="flex flex-col gap-4 text-black font-noto font-bold">
                <li className="border-b text-sm md:text-lg lg:text-xl py-3 flex flex-row justify-between">
                  Jadwal atau Timeline PPDB <MdKeyboardArrowDown />
                </li>
                <li className="border-b text-sm md:text-lg lg:text-xl py-3 flex flex-row justify-between">
                  Persyaratan Calon Peserta PPDB <MdKeyboardArrowDown />
                </li>
                <li className="border-b text-sm md:text-lg lg:text-xl py-3 flex flex-row justify-between">
                  Cara Pendaftaran PPDB <MdKeyboardArrowDown />
                </li>
                <li className="border-b text-sm md:text-lg lg:text-xl py-3 flex flex-row justify-between">
                  Lapor Aduan PPDB <MdKeyboardArrowDown />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};
