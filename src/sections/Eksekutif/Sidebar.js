import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { sidebarItems } from "../../data/SidebarItems";
import { useNavigate } from "react-router-dom";
import { MainDashboard } from "./MainDashboard";

// Sidebar Component
export const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("Dashboard Utama");
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [userData, setUserData] = useState(null); // State untuk menyimpan data pengguna
  const [error, setError] = useState(null); // State untuk menyimpan error
  const API_URL = process.env.REACT_APP_API_URL;

  // Ambil token JWT dari localStorage
  const token = localStorage.getItem("token");

  // Mengambil data pengguna setelah komponen dimuat
  useEffect(() => {
    if (!token) {
      setError("No token found. Please login again.");
      return;
    }

    fetch(`${API_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Kirim token di header Authorization
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
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
    <div className="flex border bg-slate-50 h-auto p-4">
      <div
        className={`border bg-white rounded-lg font-noto transition-all duration-300 text-black h-fit  ${
          closeSidebar ? "w-44" : "w-1/4"
        }`}
      >
        <div className="flex border-b justify-between py-1">
          <Link to="/home" className="flex items-center space-x-2 p-4">
            <img src={logo} width={35} height={35} alt="SLP Logo" />
            {!closeSidebar && (
              <span className="text-sm font-bold">
                Dashboard <br /> Cianjur
              </span>
            )}
          </Link>
          <button
            className="bg-white hover:bg-black text-black hover:text-white transition-all duration-200 ease-in-out mr-2 w-fit h-fit self-center rounded-lg"
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
        <nav className="font-nunito text-start text-sm font-bold p-4 ">
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
        className={`transition-all duration-300 text-black p-4 h-auto flex flex-col ${
          closeSidebar ? "w-full" : "w-3/4"
        }`}
      >
        {/* Header */}
        <div className="p-4 flex flex-row justify-between font-nunito">
          <div className="flex flex-row gap-2">
            <p>Pages</p>
            <p className="font-bold">/</p>
            <p className="font-bold">{selectedSection}</p>
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
            {selectedSection === "Dashboard Utama" && <MainDashboard />}
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
          <p>
            Copyright © 2025{" "}
            <span className="font-bold">Diskominfo Cianjur</span>. All Right
            Reserved
          </p>
          <div className="flex flex-row gap-4 font-bold">
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
