import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFigma,
  FaJava,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGit,
  FaVuejs,
} from "react-icons/fa";
import {
  SiKotlin,
  SiFlutter,
  SiDart,
  SiAndroidstudio,
  SiAdobexd,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";
import uiuximg from "../assets/img/uiux.jpg";
import webimg from "../assets/img/webdev.jpg";
import mobileimg from "../assets/img/mobile.jpg";

export const Division = () => {
  // Dummy data untuk divisi
  const divisionData = [
    {
      title: "UI/UX Designer",
      description:
        "UI/UX Designer bertanggung jawab untuk menciptakan pengalaman pengguna (User Experience) dan antarmuka pengguna (User Interface) yang intuitif, menarik, dan efisien.",
      image: uiuximg,
      icons: (
        <>
          <FaFigma style={{ fontSize: "1.5rem", color: "#F24E1E" }} />{" "}
          <SiAdobephotoshop style={{ fontSize: "1.5rem", color: "#31A8FF" }} />{" "}
          <SiAdobeillustrator
            style={{ fontSize: "1.5rem", color: "#FF9A00" }}
          />{" "}
          <SiAdobexd style={{ fontSize: "1.5rem", color: "#FF26D5" }} />{" "}
          <SiCanva style={{ fontSize: "1.5rem", color: "#00C6C8" }} />
        </>
      ),
    },
    {
      title: "Web Developer",
      description:
        "Web Developer berfokus pada pengembangan dan pemeliharaan situs web, baik dari sisi front-end, back-end, atau keduanya (full-stack).",
      image: webimg,
      icons: (
        <>
          <FaHtml5 style={{ fontSize: "1.5rem", color: "#E44D26" }} />
          <FaCss3 style={{ fontSize: "1.5rem", color: "#2965F1" }} />
          <FaJs style={{ fontSize: "1.5rem", color: "#F7DF1E" }} />
          <FaReact style={{ fontSize: "1.5rem", color: "#61DBFB" }} />
          <FaGit style={{ fontSize: "1.5rem", color: "#F1502F" }} />
          <FaVuejs style={{ fontSize: "1.5rem", color: "#4FC08D" }} />
          <FaPhp style={{ fontSize: "1.5rem", color: "#8993BE" }} />
          <FaLaravel style={{ fontSize: "1.5rem", color: "#FF2D20" }} />
        </>
      ),
    },
    {
      title: "Mobile Developer",
      description:
        "Mobile Developer bertugas untuk mengembangkan aplikasi untuk perangkat mobile, baik berbasis Android, iOS, maupun platform lintas (cross-platform).",
      image: mobileimg,
      icons: (
        <>
          <FaJava style={{ fontSize: "1.5rem", color: "#007396" }} />
          <SiFlutter style={{ fontSize: "1.5rem", color: "#02569B" }} />
          <SiDart style={{ fontSize: "1.5rem", color: "#00B4AB" }} />
          <SiAndroidstudio style={{ fontSize: "1.5rem", color: "#3DDC84" }} />
          <SiKotlin style={{ fontSize: "1.5rem", color: "#F14C2D" }} />
        </>
      ),
    },
  ];

  // State untuk menyimpan indeks divisi yang ditampilkan
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 4000;

  // Fungsi untuk pindah ke divisi berikutnya
  const goToNextDivision = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % divisionData.length);
  };

  // Fungsi untuk pindah ke divisi sebelumnya
  const goToPreviousDivision = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? divisionData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      goToNextDivision();
    }, interval);

    return () => clearInterval(autoPlay);
  }, [currentIndex]);

  return (
    <div className="w-full h-[120vh] sm:h-[200vh]  bg-slate-50 flex justify-center items-center p-4 font-nunito relative">
      {/* Teks Divisi Kami */}
      <h2 className="absolute top-10 text-4xl font-extrabold text-blue-500 uppercase p-8">
        Represent Our Division
      </h2>

      {/* Konten Divisi */}
      <div className="relative w-[90%] md:w-[60%] p-6 bg-white rounded-lg shadow-lg flex flex-col items-start">
        {/* Judul Divisi */}
        <h3 className="text-2xl font-bold text-blue-500 mb-4">
          {divisionData[currentIndex].title}
        </h3>

        {/* Gambar Divisi */}
        <img
          src={divisionData[currentIndex].image}
          alt={divisionData[currentIndex].title}
          className="w-full h-full object-cover mb-4 rounded-md"
        />

        {/* Deskripsi Divisi */}
        <p className="text-lg text-gray-600 text-justify text-balance">
          {divisionData[currentIndex].description}
        </p>

        <div className="flex flex-wrap items-center mt-2 gap-4">
          {divisionData[currentIndex].icons}
        </div>

        {/* Tombol Navigasi */}
        <button
          onClick={goToPreviousDivision}
          className="hidden md:block absolute rounded-full left-[-80px] top-1/2 transform -translate-y-1/2 border-2 border-blue-500 bg-transparent text-blue-500 p-2 text-xl hover:border-blue-700 hover:text-blue-700 transition-all"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={goToNextDivision}
          className="hidden md:block absolute rounded-full right-[-80px] top-1/2 transform -translate-y-1/2 border-2 border-blue-500 bg-transparent text-blue-500 p-2 text-xl hover:border-blue-700 hover:text-blue-700 transition-all"
        >
          <FaArrowRight />
        </button>

        {/* Tombol Navigasi Mobile */}
        <div className="mt-4 flex justify-between w-full md:hidden">
          <button
            onClick={goToPreviousDivision}
            className="rounded-lg border-2 border-blue-500 bg-transparent text-blue-500 px-4 py-2 hover:border-blue-700 hover:text-blue-700 transition-all"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={goToNextDivision}
            className="rounded-lg border-2 border-blue-500 bg-transparent text-blue-500 px-4 py-2 hover:border-blue-700 hover:text-blue-700 transition-all"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
