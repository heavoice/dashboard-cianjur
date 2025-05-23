import React from "react";
import { highlightData } from "../../data/HighlightData";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export const Highlight = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 overflow-hidden">
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl px-4 py-8 bg-white z-10 rounded-xl font-nunito">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold font-noto">
          Highlight
        </h1>
        <p className="sm:text-sm lg:text-lg mt-6">
          Memberikan informasi penting mengenai berbagai aspek yang signifikan
          terkait Kabupaten Cianjur
        </p>
        <a
          href="#"
          className="max-w-7xl w-full mx-auto my-6 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {highlightData.map((highlightData, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 1, x: 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 1,
                type: "tween",
                ease: "easeInOut",
              }}
              viewport={{ once: false, amount: 0.2 }}
              key={index}
              className="bg-[#22a9e1] rounded-lg p-4 flex items-center text-white "
            >
              <div className="flex flex-col w-full">
                <div className="flex flex-row items-center h-12">
                  <button className="p-1 sm:p-2  rounded-lg mr-2 ml-4 text-white border-2 border-white">
                    {highlightData.icon}
                  </button>
                  <h2 className="font-bold text-sm sm:text-xl ml-0 sm:ml-2">
                    {highlightData.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 p-4 gap-2 mt-3">
                  <div className="xxs:border-r-0 xs:border-r border-white/20">
                    <p className="text-sm font-bold">{highlightData.point1}</p>
                    <p className="text-md font-bold">
                      {highlightData.subpoint1
                        ?.split(" ")
                        .slice(0, -1)
                        .join(" ") || ""}{" "}
                      <span className="text-sm font-normal">
                        {highlightData.subpoint1?.split(" ").slice(-1) || ""}
                      </span>
                    </p>
                    <p className="text-sm font-light mt-3">
                      {highlightData.subsubpoint1}
                    </p>
                  </div>
                  <div className="sm:border-r-0 xl:border-r border-white/20">
                    <p className="text-sm font-bold">{highlightData.point2}</p>
                    <p className="text-md font-bold">
                      {highlightData.subpoint2
                        ?.split(" ")
                        .slice(0, -1)
                        .join(" ") || ""}{" "}
                      <span className="text-sm font-normal">
                        {highlightData.subpoint2?.split(" ").slice(-1) || ""}
                      </span>
                    </p>
                    <p className="text-sm font-light mt-3">
                      {highlightData.subsubpoint2}
                    </p>
                  </div>
                  <div className="xxs:mt-0 xs:mt-6 sm:mt-0">
                    <p className="text-sm font-bold">{highlightData.point3}</p>
                    <p className="text-md font-bold">
                      {highlightData.subpoint3
                        ?.split(" ")
                        .slice(0, -1)
                        .join(" ") || ""}{" "}
                      <span className="text-sm font-normal">
                        {highlightData.subpoint3?.split(" ").slice(-1) || ""}
                      </span>
                    </p>
                    <p className="text-sm font-light mt-3">
                      {highlightData.subsubpoint3}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </a>
        <a
          href="#"
          className={`w-fit transition ease-in-out delay-150 hover:translate-y-2 hover:scale-110 duration-300 p-3 font-bold rounded-xl ml-auto mt-6 max-w-7xl flex lg:justify-end md:justify-center border border-[#22a9e1] bg-white text-[#22a9e1] hover:bg-[#22a9e1] hover:text-white`}
        >
          Lihat Semua Highlight
          <FaExternalLinkAlt className="mt-1 ml-4" />
        </a>
      </div>
    </div>
  );
};
