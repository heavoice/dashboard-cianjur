import React, { useState, useEffect } from "react";
import { bgPrimary, textPrimary } from "../constant/constants";
import { HiUsers } from "react-icons/hi";

export const Team = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1); // Buat daftar tanggal (1-30)
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // Default: 5

  // Update visibleCount berdasarkan ukuran layar
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 480) {
        setVisibleCount(3); // Ukuran xxs-xs (misalnya < 480px) hanya tampilkan 3
      } else {
        setVisibleCount(5); // Ukuran lebih besar, tampilkan 5
      }
    };

    updateVisibleCount(); // Set awal
    window.addEventListener("resize", updateVisibleCount); // Dengarkan perubahan ukuran layar

    return () => {
      window.removeEventListener("resize", updateVisibleCount); // Cleanup listener saat unmount
    };
  }, []);

  const nextSlide = () => {
    if (startIndex + visibleCount < days.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div className="w-full xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-7xl px-4 py-8 bg-white z-10 rounded-xl font-nunito">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Layanan Terpopuler */}
          <div className={`basis-3/4 text-4xl p-4`}>
            <span className="font-semibold">Layanan Terpopuler</span>
            <div className="grid lg:grid-cols-3 grid-cols-1 mt-6 p-4 ">
              <div className="flex flex-col gap-4 border-0 md:border-r border-black/10">
                {/* Bagian Pertama (Atas) */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="block px-5 py-5 bg-black rounded-full"></button>

                  <div className="flex flex-col leading-tight">
                    <p className="uppercase text-xs sm:text-sm">Untuk</p>
                    <p className="font-bold text-lg sm:text-3xl">Wargi</p>
                  </div>
                </div>

                {/* Bagian Kedua (Dibawah) */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <HiUsers className="text-gray-500" />
                    <p className="font-bold text-sm sm:text-xl mt-1">
                      Layanan Kependudukan
                    </p>
                    <p className="text-xxs sm:text-sm mt-1 leading-tight">
                      Informasi mengenai syarat dan tata cara mendapatkan
                      layanan kependudukan di seluruh Kabupaten/Kota di Jawa
                      Barat.
                    </p>
                  </div>
                </div>
                {/* Bagian Ketiga (Dibawah) */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <HiUsers className="text-gray-500" />
                    <p className="font-bold text-sm sm:text-xl mt-1">
                      Layanan Kependudukan
                    </p>
                    <p className="text-xxs sm:text-sm mt-1 leading-tight">
                      Informasi mengenai syarat dan tata cara mendapatkan
                      layanan kependudukan di seluruh Kabupaten/Kota di Jawa
                      Barat.
                    </p>
                  </div>
                </div>
                {/* Bagian Keempat (Dibawah) */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <HiUsers className="text-gray-500" />
                    <p className="font-bold text-sm sm:text-xl mt-1">
                      Layanan Kependudukan
                    </p>
                    <p className="text-xxs sm:text-sm mt-1 leading-tight">
                      Informasi mengenai syarat dan tata cara mendapatkan
                      layanan kependudukan di seluruh Kabupaten/Kota di Jawa
                      Barat.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 lg:mt-0 mt-6 ml-0 lg:ml-4 border-0 md:border-r border-black/10">
                {/* Bagian Pertama (Atas) */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="block px-5 py-5 bg-black rounded-full"></button>

                  <div className="flex flex-col leading-tight">
                    <p className="uppercase text-xs sm:text-sm">Untuk</p>
                    <p className="font-bold text-lg sm:text-3xl">Wargi</p>
                  </div>
                </div>

                {/* Bagian Kedua (Dibawah) */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <HiUsers className="text-gray-500" />
                    <p className="font-bold text-sm sm:text-xl mt-1">
                      Layanan Kependudukan
                    </p>
                    <p className="text-xxs sm:text-sm mt-1 leading-tight">
                      Informasi mengenai syarat dan tata cara mendapatkan
                      layanan kependudukan di seluruh Kabupaten/Kota di Jawa
                      Barat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:mt-0 mt-6 ml-0 lg:ml-4">
                {/* Bagian Pertama (Atas) */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="block px-5 py-5 bg-black rounded-full"></button>

                  <div className="flex flex-col leading-tight">
                    <p className="uppercase text-xs sm:text-sm">Untuk</p>
                    <p className="font-bold text-lg sm:text-3xl">Wargi</p>
                  </div>
                </div>

                {/* Bagian Kedua (Dibawah) */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <HiUsers className="text-gray-500" />
                    <p className="font-bold text-sm sm:text-xl mt-1">
                      Layanan Kependudukan
                    </p>
                    <p className="text-xxs sm:text-sm mt-1 leading-tight">
                      Informasi mengenai syarat dan tata cara mendapatkan
                      layanan kependudukan di seluruh Kabupaten/Kota di Jawa
                      Barat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Agenda / Kalender */}
          <div className={`basis-1/4 p-4`}>
            <div className={`${bgPrimary} p-4 rounded-t-lg`}>
              <p className={`${textPrimary} font-bold text-sm sm:text-xl`}>
                Agenda Jawa Barat
              </p>
              <p className={`${textPrimary} text-xxs sm:text-xs mt-1`}>
                Dapatkan informasi terkait semua kegiatan yang dilakukan di Jawa
                Barat
              </p>
            </div>
            <div className={` border border-black/10 p-4`}>
              <p className="mt-2 text-xxs sm:text-lg">Februari 2025</p>
              <p className="text-xxs sm:text-xs">Minggu ke-5</p>
              <div className="flex flex-col items-center mt-6">
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 border border-grey-500 rounded-full"
                    onClick={prevSlide}
                    disabled={startIndex === 0}
                  >
                    ◀
                  </button>

                  <div className="flex flex-row gap-2 overflow-hidden">
                    {days
                      .slice(startIndex, startIndex + visibleCount)
                      .map((day) => (
                        <button
                          key={day}
                          className="w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-200 rounded sm:text-lg xxs:text-xs"
                        >
                          {day}
                        </button>
                      ))}
                  </div>

                  <button
                    className="px-2 py-1 border border-grey-500 rounded-full"
                    onClick={nextSlide}
                    disabled={startIndex + visibleCount >= days.length}
                  >
                    ▶
                  </button>
                </div>
                <div className="mt-6 w-[7.5rem] h-[7.5rem] bg-gray-500 rounded-full"></div>
                <div className="mt-6 text-center font-semibold text-xl mx-12">
                  Tidak ada kegiatan/event di hari ini
                </div>

                <div className="mt-2 mb-9 text-center font-semibold text-sm mx-12">
                  Silakan lihat ke tanggal sebelumnya atau selanjutnya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
