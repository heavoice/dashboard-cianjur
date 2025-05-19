import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MapView } from "../../components/MapView";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import IconPendidikan from "../../assets/img/icon-pendidikan.svg";
import { getAkredColor } from "../../hooks/akredColor";
import { Sekolah } from "../../api/Sekolah";

export const Data = () => {
  const { sekolahList, loading, error } = Sekolah();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    lokasi: null,
    status: null,
    akreditasi: null,
    jenjang: null,
  });

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSekolahClick = (koordinat) => {
    setSelectedPosition(koordinat);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const filteredSekolah = (sekolahList || []).filter((item) => {
    const matchesSearch = item.nama
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLokasi = selectedFilters.lokasi
      ? item.kecamatan === selectedFilters.lokasi
      : true;
    const matchesStatus = selectedFilters.status
      ? item.instansi === selectedFilters.status
      : true;
    const matchesAkreditasi = selectedFilters.akreditasi
      ? item.akreditasi === selectedFilters.akreditasi
      : true;
    const matchesJenjang = selectedFilters.jenjang
      ? item.jenjang === selectedFilters.jenjang
      : true;

    return (
      matchesSearch &&
      matchesLokasi &&
      matchesStatus &&
      matchesAkreditasi &&
      matchesJenjang
    );
  });

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div
      id="tentang"
      className="relative p-4 w-full h-auto flex flex-col justify-start items-center bg-cover bg-center transition-all duration-1000 font-nunito"
    >
      {/* Filter UI */}
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-white border rounded-lg mt-20">
        <div className="flex flex-col lg:flex-row w-full p-4 items-start justify-center gap-4 lg:gap-12">
          {/* Search Bar */}
          <div className="w-full max-w-max">
            <div className="w-fit flex items-center relative border border-gray-300 rounded-lg overflow-hidden">
              <FaSearch className="ml-3 absolute text-[#22a9e1]" />
              <input
                type="text"
                placeholder="Cari sekolah..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-3 pl-10 pr-16 border-none focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="w-full max-w-max">
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-fit">
              {[
                {
                  key: "lokasi",
                  options: [
                    ...new Set(sekolahList.map((item) => item.kecamatan)),
                  ].sort(),
                },
                {
                  key: "jenjang",
                  options: [
                    ...new Set(sekolahList.map((item) => item.jenjang)),
                  ].sort(),
                },
                {
                  key: "status",
                  options: [
                    ...new Set(sekolahList.map((item) => item.instansi)),
                  ].sort(),
                },
                {
                  key: "akreditasi",
                  options: [
                    ...new Set(sekolahList.map((item) => item.akreditasi)),
                  ].sort(),
                },
              ].map(({ key, options }) => (
                <div key={key} className="relative">
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="p-2 md:px-5 md:py-3 sm:text-base text-xxs text-gray-400 border border-gray-400 justify-center items-center bg-white rounded-lg flex flex-row"
                  >
                    {selectedFilters[key] ||
                      key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/_/g, " ")}

                    <MdKeyboardArrowDown
                      className={`ml-2 transition-transform duration-300 ${
                        openDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openDropdown === key && (
                    <ul className="absolute z-10 mt-2 w-48 text-gray-400 bg-white border border-gray-300 rounded-lg shadow">
                      {options.map((option, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setSelectedFilters((prev) => ({
                              ...prev,
                              [key]: prev[key] === option ? "" : option,
                            }));
                            setOpenDropdown(null); // tutup dropdown setelah memilih
                          }}
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

          {/* Compare Button */}
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
          <div className="w-full xl:w-[46%] h-auto flex flex-col gap-2 items-center justify-start max-h-[636px] overflow-auto pr-1">
            {filteredSekolah.map((item) => (
              <div
                key={item.id}
                className="w-full p-4 bg-white rounded-lg border flex flex-col gap-5 cursor-pointer hover:bg-slate-100 transition"
                onClick={() => handleSekolahClick(item.koordinat)}
              >
                <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0 sm:items-center">
                  <div className="text-black font-bold uppercase text-lg">
                    {item.nama}
                  </div>
                  <div className="flex flex-row gap-1 sm:text-base text-xxs">
                    <p className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-300 border border-orange-600 text-orange-600 rounded-3xl font-bold">
                      {item.instansi}
                    </p>
                    <p
                      className={`px-[9px] sm:px-[15px] py-[4.5px] sm:py-[7.5px] rounded-full text-white font-semibold ${getAkredColor(
                        item.akreditasi
                      )} `}
                    >
                      {item.akreditasi}
                    </p>
                  </div>
                </div>
                <div className="text-black flex flex-row w-full xl:max-w-[30rem]">
                  {item.alamat}
                </div>
                <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 w-full">
                  <div className="text-black flex flex-col">
                    <p className="font-light">Cadisdik</p>
                    <p className="font-bold text-sm">
                      Cabang Dinas Pendidikan Wilayah VI
                    </p>
                  </div>
                  <div className="text-black flex flex-col">
                    <p className="font-light">NPSN</p>
                    <p className="font-bold text-sm">{item.npsn}</p>
                  </div>
                  <div className="text-black flex flex-col">
                    <p className="font-light">Jarak</p>
                    <p className="font-bold text-sm">-</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="w-full xl:w-[54%] h-auto border rounded-lg flex items-center justify-center z-0">
            <MapView selectedPosition={selectedPosition} />
          </div>
        </div>

        {/* Informasi PPDB */}
        <div className="flex flex-col justify-between items-center gap-6 w-full mt-6">
          <div className="w-full bg-[#22a9e1] px-5 py-2 rounded-lg">
            <div className="p-10 space-y-2">
              <h1 className="font-noto font-bold text-2xl">Informasi PPDB</h1>
              <p className="font-nunito">
                Penerimaan Peserta Didik Baru (PPDB) merupakan rangkaian
                kegiatan...
              </p>
            </div>
          </div>
          <div className="w-full border px-5 py-2 rounded-lg">
            <div className="p-5">
              <ul className="flex flex-col gap-4 text-black font-noto font-bold">
                {[
                  "Jadwal atau Timeline PPDB",
                  "Persyaratan Calon Peserta PPDB",
                  "Cara Pendaftaran PPDB",
                  "Lapor Aduan PPDB",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="border-b text-sm md:text-lg lg:text-xl py-3 flex flex-row justify-between"
                  >
                    {item} <MdKeyboardArrowDown />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};
