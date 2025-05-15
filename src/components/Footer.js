import React from "react";
import logo from "../assets/img/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPeople, MdSpaceDashboard } from "react-icons/md";
import {
  BsFillTelephoneFill,
  BsStack,
  BsTelephone,
  BsTelephoneFill,
} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#22a9e1]">
      <div className="w-full xxs:max-w-[18rem] xs:max-w-[25rem] sm:max-w-7xl px-4 py-8 z-10 rounded-xl font-nunito">
        <div className="text-white text-2xl flex items-center font-bold">
          <a href="/home" className="mr-2">
            <img src={logo} width={70} height={70} alt="SLP Logo" />
          </a>
          <a href="/home" className="text-white font-noto text-lg">
            Dashboard <br /> Cianjur
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6 text-white">
          <div className="p-4 border-b border-white/20 ">
            <div className="flex flex-col">
              <div className="flex">
                <FaLocationDot className="mt-1 text-md" />
                <p className="pl-4 text-xl font-semibold">Diskominfo Cianjur</p>
              </div>
              <p className="ml-8 font-light">
                Jl. KH Abdullah Bin Nuh, Nagrak, Kec. Cianjur, Kabupaten
                Cianjur, Jawa Barat 43215
              </p>
            </div>
          </div>

          <div className="p-4 border-b  border-white/20">
            <div className="flex flex-col">
              <div className="flex">
                <MdSpaceDashboard className="mt-1 text-md" />
                <p className="pl-4 text-xl font-semibold">Dashboard Cianjur</p>
              </div>
              <p className="ml-8 font-light">Tentang</p>
            </div>
          </div>
          <div className="p-4 border-b border-white/20">
            <div className="flex flex-col">
              <div className="flex">
                <MdPeople className="mt-1 text-md" />
                <p className="pl-4 text-xl font-semibold">Social Media</p>
              </div>
              <div className="flex gap-3 mt-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/"
                  className="text-white bg-gray-500/30 p-3 sm:p-4 rounded-xl transition-all duration-300 
        hover:text-blue-500 hover:bg-white/20 hover:scale-110 hover:shadow-md"
                >
                  <FaFacebook className="text-xl sm:text-2xl" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/"
                  className="text-white bg-gray-500/30 p-3 sm:p-4 rounded-xl transition-all duration-300 
        hover:text-pink-500 hover:bg-white/20 hover:scale-110 hover:shadow-md"
                >
                  <FaInstagram className="text-xl sm:text-2xl" />
                </a>

                {/* Twitter (X) */}
                <a
                  href="https://twitter.com/"
                  className="text-white bg-gray-500/30 p-3 sm:p-4 rounded-xl transition-all duration-300 
        hover:text-blue-400 hover:bg-white/20 hover:scale-110 hover:shadow-md"
                >
                  <FaTwitter className="text-xl sm:text-2xl" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/"
                  className="text-white bg-gray-500/30 p-3 sm:p-4 rounded-xl transition-all duration-300 
        hover:text-red-500 hover:bg-white/20 hover:scale-110 hover:shadow-md"
                >
                  <FaYoutube className="text-xl sm:text-2xl" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-white/20">
            <div className="flex flex-col">
              <div className="flex">
                <BsTelephoneFill className="mt-1 text-md" />
                <p className="pl-4 text-xl font-semibold">Telepon</p>
              </div>
              <p className="ml-8 font-light">(0263) 261892</p>
            </div>
          </div>
          <div className="p-4 border-b border-white/20">
            <div className="flex flex-col">
              <div className="flex">
                <BsStack className="mt-1 text-md" />
                <p className="pl-4 text-xl font-semibold">Ekosistem Cianjur</p>
              </div>
              <p className="ml-8 font-light">Open Data Cianjur</p>
              <p className="ml-8 font-light">Satu Data Cianjur</p>
              <p className="ml-8 font-light">Satu Peta Cianjur</p>
            </div>
          </div>
        </div>
        <div className="p-4  text-white max-w-[25rem]">
          <div className="flex flex-col">
            <div className="flex">
              <MdEmail className="mt-1 text-md" />
              <p className="pl-4 text-xl font-semibold">Email</p>
            </div>
            <p className="ml-8 font-light">diskominfo@cianjurkab.go.id</p>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-white/20 mt-4 pt-4 text-center">
        <p className="text-sm text-white">
          Copyright © 2025 Diskominfo Cianjur. All Right Reserved
        </p>
      </div>
    </div>
  );
};
