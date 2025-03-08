import React, { useState } from "react";
import { bgPrimary, textPrimary } from "../constant/constants";
import { FaSearch } from "react-icons/fa";
import { visualize } from "../constant/Visualize";

export const Visualizer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVisual, setSelectedVisual] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectVisual = (visual) => {
    setSelectedVisual(visual);
  };

  const filteredVisuals = visualize.filter((item) =>
    item.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full max-h-fit xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl px-4 py-8 bg-white z-10 rounded-xl font-nunito">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Sidebar Pencarian */}
          <div className={`basis-1/4`}>
            <div className={`${bgPrimary} p-4 rounded-t-lg`}>
              <p
                className={`${textPrimary} font-bold xxs:text-sm sm:text-xl lg:text-2xl`}
              >
                Visualisasi Data
              </p>
              <div className="w-full flex items-center relative border border-gray-300 rounded-lg overflow-hidden mt-4">
                <FaSearch className="ml-3 absolute text-green-600" />
                <input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full p-3 pl-10 pr-16 border-none focus:outline-none text-gray-700"
                />
              </div>
            </div>
            <div className="border border-black/10">
              <div className="flex flex-col items-start">
                {/* Daftar Visualisasi dengan Scroll */}
                <div className="flex items-start flex-col w-full max-h-[34.5rem] overflow-y-auto">
                  {filteredVisuals.length > 0 ? (
                    filteredVisuals.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelectVisual(item)}
                        className={`w-full p-5 text-left transition-all duration-200 ${
                          selectedVisual === item
                            ? "bg-green-600 text-white"
                            : "bg-white text-gray-700 hover:bg-green-600 hover:text-white"
                        }`}
                      >
                        {item.section}
                      </button>
                    ))
                  ) : (
                    <p className="p-4 text-gray-500 text-left w-full">
                      Tidak ditemukan
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tampilan Gambar */}
          <div
            className={`basis-3/4 text-4xl justify-center items-center flex flex-col`}
          >
            {selectedVisual ? (
              <div className="p-4 border rounded-lg shadow-lg">
                <img
                  src={selectedVisual.data[Object.keys(selectedVisual.data)[0]]}
                  alt={selectedVisual.section}
                  className="max-w-full h-auto"
                />
              </div>
            ) : (
              <p className="text-gray-500">Pilih data untuk ditampilkan</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
