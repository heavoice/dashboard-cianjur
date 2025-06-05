import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export const Tentang = () => {
  return (
    <div className="relative p-4 w-full h-auto flex flex-col justify-start items-center bg-cover bg-center transition-all duration-1000 font-nunito overflow-auto">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[#22a9e1] z-0"></div>

      {/* Kontainer teks */}
      <motion.div
        initial={{ opacity: 0, scale: 1, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{
          duration: 1,
          type: "tween",
          ease: "easeInOut",
        }}
        viewport={{ once: false, amount: 0.2 }}
        className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] mx-auto sm:max-w-7xl flex items-center justify-start text-left z-10 flex-col font-nunito text-white mt-40"
      >
        <div className="flex flex-row gap-2 items-start mr-auto ">
          <Link
            to="/home"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Beranda
          </Link>
          <MdOutlineKeyboardArrowRight className="text-md mt-1" />
          <Link
            to="/eksplorasi-dashboard"
            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Eksplorasi Dashboard
          </Link>
        </div>
        <div className="flex flex-col  justify-between w-full mt-6">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold font-noto ">
            Eksplorasi Dashboard
          </div>
          <p className="mt-10 mb-10">
            Temukan visualisasi data berupa dashboard dari berbagai topik yang
            <br /> bisa dianalisis lebih lanjut disini
          </p>
        </div>
      </motion.div>
    </div>
  );
};
