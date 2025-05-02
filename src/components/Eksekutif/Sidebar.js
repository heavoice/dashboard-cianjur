import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPrint } from "react-icons/io5";
import { sidebarItems } from "../../data/SidebarItems";
import { useNavigate } from "react-router-dom";

// Sidebar Component
export const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("Dashboard Utama");
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna
  const [error, setError] = useState(null); // State untuk menyimpan error

  // Ambil token JWT dari localStorage
  const token = localStorage.getItem("token");

  // Mengambil data pengguna setelah komponen dimuat
  useEffect(() => {
    if (!token) {
      setError("No token found. Please login again.");
      return;
    }

    fetch("https://dashboard-cianjur-backend.vercel.app/api/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Kirim token di header Authorization
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Menyimpan data pengguna yang diterima
      })
      .catch((err) => {
        setError("Failed to fetch user data.");
        console.error("Error:", err);
      });
  }, [token]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#22a9e1]">
        <div className="loader"></div>
      </div>
    );
  }

  const handleSelect = (section) => {
    setSelectedSection(section);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth");
  };

  return (
    <div className="flex border bg-slate-50 h-screen">
      <div
        className={`border bg-white rounded-lg font-noto transition-all duration-300 text-black p-4  ${
          closeSidebar ? "w-44" : "w-1/4"
        }`}
      >
        <div className="flex border-b justify-between ">
          <Link to="/home" className="flex items-center space-x-2 p-4">
            <img src={logo} width={35} height={35} alt="SLP Logo" />
            {!closeSidebar && (
              <span className="text-sm font-bold">
                Dashboard <br /> Cianjur
              </span>
            )}
          </Link>
          <button
            className="p-4 bg-white hover:bg-black text-black hover:text-white transition-all duration-200 ease-in-out"
            onClick={() => setCloseSidebar(!closeSidebar)}
          >
            <MdOutlineKeyboardDoubleArrowLeft
              className={`transition-transform duration-300 ${
                closeSidebar ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu Navigasi */}
        <nav className="font-nunito text-start text-sm font-bold p-4">
          <ul>
            <ul>
              {sidebarItems.map(({ label, icon }) => (
                <li key={label} className="mb-4">
                  <button
                    className={`hover:text-[#22a9e1] flex items-center gap-2 w-full ${
                      selectedSection === label
                        ? "font-bold text-[#22a9e1]"
                        : ""
                    }`}
                    onClick={() => {
                      if (label === "Logout") {
                        handleLogout();
                      } else {
                        handleSelect(label);
                      }
                    }}
                  >
                    {icon}
                    {!closeSidebar && <span>{label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </ul>
        </nav>
      </div>
      <div
        className={`transition-all duration-300 text-black p-4 h-screen flex flex-col ${
          closeSidebar ? "w-full" : "w-3/4"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex flex-row justify-between font-nunito">
          <div className="flex flex-row gap-2">
            <p>Pages</p>
            <p>/</p>
            <p>Dashboard Utama</p>
          </div>

          <div className="flex flex-row gap-4 items-center">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Type here..."
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <CgProfile className="text-gray-700" />
            <p>{userData.full_name}</p>

            <IoMdNotificationsOutline className="text-gray-700" />
          </div>
        </div>

        {/* Main Content (optional) */}
        <div className="flex-1 p-4 h-auto">
          <div>
            {selectedSection === "Dashboard Utama" && (
              <div className="text-2xl font-bold flex flex-col gap-2">
                <p className="font-nunito font-bold">Dashboard Utama</p>
                <p className="font-nunito font-normal text-sm">
                  Dashboard Utama adalah tampilan utama atau halaman pertama
                  dari sebuah aplikasi atau sistem yang memberikan gambaran umum
                  tentang status atau informasi penting secara ringkas.
                </p>
                <div className="w-full flex flex-row gap-6 rounded-lg mt-6">
                  {/* Content 1 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div className="flex flex-col">
                        <p className="font-normal text-sm text-gray-400">
                          Today's Money
                        </p>
                        <p className="text-xl font-bold">IDR 5.300K</p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>

                  {/* Content 2 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div className="flex flex-col">
                        <p className="font-normal text-sm text-gray-400">
                          Today's Money
                        </p>
                        <p className="text-xl font-bold">IDR 5.300K</p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>
                  {/* Content 3 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div className="flex flex-col">
                        <p className="font-normal text-sm text-gray-400">
                          Today's Money
                        </p>
                        <p className="text-xl font-bold">IDR 5.300K</p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>
                  {/* Content 4 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div className="flex flex-col">
                        <p className="font-normal text-sm text-gray-400">
                          Today's Money
                        </p>
                        <p className="text-xl font-bold">IDR 5.300K</p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-px my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>
                </div>
                {/* Visualisasi */}
                <div className="w-full flex flex-row gap-6 rounded-lg mt-6">
                  {/* Content 1 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex flex-col">
                        <p className="font-semibold text-black text-base">
                          Website Views
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                          Last Campaign Performance
                        </p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-[200px] my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent">
                      Tralala
                    </div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>

                  {/* Content 2 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div className="flex flex-col">
                        <p className="font-semibold text-black text-base">
                          Daily Sales
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                          <span className="font-semibold">(+15%)</span> increase
                          in today sales.
                        </p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-[200px] my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent">
                      Tralala
                    </div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>
                  {/* Content 3 */}
                  <div className="w-full h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div cla ssName="flex flex-col">
                        <p className="font-semibold text-black text-base">
                          Completed Tasks
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                          Last Campaign Performance
                        </p>
                      </div>

                      <div className="bg-black p-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3)]">
                        <IoPrint className="filter invert" />
                      </div>
                    </div>
                    <div className="w-full h-[200px] my-4 bg-gradient-to-r from-transparent via-gray-400 to-transparent">
                      Tralala
                    </div>

                    <div className="w-full flex flex-row items-center gap-1">
                      <span className="font-bold text-base text-green-500">
                        +55%
                      </span>
                      <p className="text-gray-400 text-sm font-normal">
                        than last week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedSection === "Manajemen Program & Kegiatan" && (
              <p>Berikut adalah daftar program dan kegiatan yang tersedia.</p>
            )}
            {selectedSection === "Monitoring Infrastruktur & Proyek Fisik" && (
              <p>
                Data monitoring infrastruktur dan proyek fisik ditampilkan di
                sini.
              </p>
            )}
            {selectedSection === "Layanan Publik & Kesejahteraan" && (
              <p>
                Info layanan publik dan kesejahteraan masyarakat tersedia di
                sini.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 mt-auto flex flex-row justify-between font-nunito">
          <p>Copyright © 2025 Diskominfo Cianjur. All Right Reserved</p>
          <div className="flex flex-row gap-4">
            <Link
              to="/home"
              className="hover:text-gray-400 flex flex-row gap-2"
            >
              Home
            </Link>
            <Link
              to="/eksplorasi-dashboard"
              className="text-black hover:text-gray-300 transition-all ease-in-out duration-200"
            >
              Eksplorasi Dashboard
            </Link>
            <Link
              to="/about"
              className="text-black duration-200 ease-in-out hover:text-gray-300 transition-all"
            >
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
