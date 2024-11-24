import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Import ikon panah
import visionImage from "../assets/img/vision.jpg";
import missionImage from "../assets/img/mission.jpg";

export const VisionMission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animasi fade-in untuk div paling atas
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Data untuk Vision dan Mission
  const content = [
    {
      title: "Vision",
      description:
        "Our vision is to create a sustainable future by leveraging the power of technology and innovation. We strive to lead with integrity and dedication in every step we take.",
      image: visionImage,
    },
    {
      title: "Mission",
      description:
        "Our mission is to empower individuals and communities by providing solutions that make life better. Together, we aim to inspire change and foster growth.",
      image: missionImage,
    },
  ];

  const handleToggle = () => {
    // Ubah indeks ke konten berikutnya
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  return (
    <motion.div
      key={currentIndex} // Tambahkan key berdasarkan currentIndex
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex items-center justify-center w-full h-screen bg-white p-4 font-nunito"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start w-full">
        {/* Bagian Kiri (Gambar) */}
        <div className="w-full md:w-1/2 flex justify-center p-4">
          <img
            src={content[currentIndex].image}
            alt={content[currentIndex].title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Bagian Kanan (Tulisan) */}
        <div className="w-full md:w-1/2 flex flex-col p-4 self-center ">
          <div className="w-[84px] h-[2px] bg-blue-500 mb-4"></div>
          <h2 className="text-3xl font-extrabold text-blue-500 mb-4 uppercase">
            {content[currentIndex].title}
          </h2>
          <p className="text-blue-500 text-lg mb-4">
            {content[currentIndex].description}
          </p>
          <motion.button
            onClick={handleToggle}
            whileTap={{ scale: 0.9 }} // Berikan animasi saat tombol ditekan
            className="self-start btn-grad hover:bg-blue-500 hover:text-white 
            bg-transparent border-2 border-blue-500 bg-clip-border px-12 py-4 
            text-blue-500 text-sm font-semibold uppercase transition-all duration-500 shadow-lg rounded-full transform"
          >
            {content[(currentIndex + 1) % content.length].title}
            {/* Menambahkan ikon panah ke tombol */}
            <FaArrowRight className="ml-2 mb-1 inline" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
