import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { sidebarItems } from "../../data/SidebarItems";
import { useNavigate } from "react-router-dom";
import { MainDashboard } from "./MainDashboard";
import { ManajemenProgram } from "./ManajemenProgram";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HiOutlineChartSquareBar } from "react-icons/hi";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("Dashboard Utama");
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const menuRef = useRef(null);

  const API_URL = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setError("No token found. Please login again.");
      return;
    }

    fetch(`${API_URL}/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
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
    <div className="flex flex-col lg:flex-row border bg-slate-50 h-auto p-2 lg:p-4">
      {/* Sidebar - hanya tampil di lg ke atas */}
      <div
        className={`hidden lg:block border bg-white rounded-lg font-noto transition-all duration-300 text-black h-fit mb-4 lg:mb-0  ${
          closeSidebar ? "lg:w-20" : "lg:w-[30%] xl:w-1/4"
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

        <nav className="font-nunito text-start w-full text-xs font-bold p-4">
          <ul>
            {sidebarItems.map(({ label, icon }) => (
              <li key={label} className="mb-4">
                <button
                  className={`hover:text-[#22a9e1] flex items-center gap-2 w-full ${
                    selectedSection === label ? "font-bold text-[#22a9e1]" : ""
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
        </nav>
      </div>

      {/* Bottom Navigation - hanya tampil di bawah lg */}
      <nav className="block lg:hidden fixed bottom-0 left-0 w-full bg-white border-t z-50">
        <ul className="flex justify-around items-center p-2 text-sm font-bold font-nunito overflow-auto">
          {sidebarItems.map(({ label, icon }) => (
            <li key={label}>
              <button
                className={`flex flex-col items-center ${
                  selectedSection === label ? "text-[#22a9e1]" : "text-gray-700"
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
                <span className="hidden">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 text-black p-4 h-auto flex flex-col ${
          closeSidebar ? "w-full" : "w-full lg:w-[70%] xl:w-3/4"
        }`}
      >
        {/* Navbar mobile sebagai pengganti footer di lg kebawah */}
        <nav className="block lg:hidden fixed top-0 left-0 w-full bg-white border-b z-50 p-4">
          <div className="w-full bg-white pt-2 pb-2 px-4">
            <div className="flex items-center justify-between">
              <Link
                to="/home"
                className="text-white text-2xl flex items-center font-bold"
              >
                <a href="/home" className="mr-2">
                  <img src={logo} width={35} height={35} alt="SLP Logo" />
                </a>
                <a href="/home" className="text-black font-noto text-sm">
                  Dashboard <br /> Cianjur
                </a>
              </Link>

              {/* Toggle Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => {
                    setDropdownOpen((prev) => !prev);
                  }}
                >
                  {dropdownOpen ? (
                    <AiOutlineClose size={18} />
                  ) : (
                    <AiOutlineMenu size={18} />
                  )}
                </button>

                {/* Overlay */}
                {dropdownOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                    onClick={() => setDropdownOpen(false)}
                  ></div>
                )}

                {/* Sidebar / Dropdown */}
                <div
                  className={`
    fixed top-0 right-0 h-full bg-white w-[70%] shadow-lg 
    transform transition-transform duration-300 ease-in-out lg:hidden z-50
    flex flex-col justify-between
    ${dropdownOpen ? "translate-x-0" : "translate-x-full"}
  `}
                  ref={menuRef}
                >
                  <div className="flex justify-between p-4 border-b border-black/20 font-noto">
                    <div className="text-black text-2xl flex items-center font-bold">
                      <img
                        src={logo}
                        width={35}
                        height={35}
                        alt="SLP Logo"
                        className="mr-2"
                      />
                      <span className="text-sm">
                        Dashboard
                        <br />
                        Cianjur
                      </span>
                    </div>
                    <button
                      className="text-black text-xl p-2"
                      onClick={() => setDropdownOpen(false)}
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex flex-col space-y-4 p-6 font-noto flex-grow overflow-y-auto">
                    <div className="flex flex-row gap-2 font-nunito">
                      <p className="text-xs sm:text-base">Pages</p>
                      <p className="font-bold text-xs sm:text-base">/</p>
                      <p className="font-bold text-xs sm:text-base">
                        {selectedSection}
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here..."
                      className="px-4 py-2 border rounded-md focus:outline-none w-full lg:w-auto font-nunito"
                    />

                    <Link
                      to="/home"
                      className="text-black hover:text-gray-300 transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <FaHome className="w-5 h-5" />
                        <span className="text-xs sm:text-base">Home</span>
                      </div>
                    </Link>

                    <Link
                      to="/eksplorasi-dashboard"
                      className="text-black hover:text-gray-300 transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <HiOutlineChartSquareBar className="w-5 h-5" />
                        <span className="text-xs sm:text-base">
                          Eksplorasi Dashboard
                        </span>
                      </div>
                    </Link>
                    <Link
                      to="/about"
                      className="text-black hover:text-gray-300 transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <FaInfoCircle className="w-5 h-5" />
                        <span className="text-xs sm:text-base">Tentang</span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-6 text-black font-nunito space-y-2">
                    <div className="flex items-center gap-2">
                      <IoMdNotificationsOutline className="w-5 h-5" />
                      <p className="text-xs sm:text-base">Notification</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CgProfile className="w-5 h-5" />
                      <p className="text-xs sm:text-base">
                        {userData.full_name}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-6 text-xs text-black border-t border-black/20 font-noto">
                    Copyright © 2025 Diskominfo Cianjur. All Right Reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Header untuk layar lg ke atas */}
        <div className="hidden lg:flex p-2 lg:p-4 flex-col lg:flex-row items-start lg:items-center justify-between gap-4 font-nunito text-sm xl:text-base">
          <div className="flex flex-row gap-2">
            <p>Pages</p>
            <p className="font-bold">/</p>
            <p className="font-bold">{selectedSection}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center">
            <div className="flex items-center gap-2">
              <CgProfile className="text-gray-700" />
              <p>{userData.full_name}</p>
            </div>
            <IoMdNotificationsOutline className="text-gray-700" />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex-1 p-2 lg:p-4 h-auto overflow-auto mt-6 lg:mt-0">
          <div>
            {selectedSection === "Dashboard Utama" && <MainDashboard />}
            {selectedSection === "Manajemen Program & Kegiatan" && (
              <ManajemenProgram />
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

        {/* Footer untuk desktop */}
        <div className="hidden lg:flex p-2 lg:p-4 mt-auto flex-col lg:flex-row justify-between items-start lg:items-center gap-2 font-nunito text-xs xl:text-base">
          <p>
            Copyright © 2025{" "}
            <span className="font-bold">Diskominfo Cianjur</span>. All Right
            Reserved
          </p>
          <div className="flex flex-col lg:flex-row gap-2 font-bold">
            <Link to="/home" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/eksplorasi-dashboard" className="hover:text-gray-400">
              Eksplorasi Dashboard
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
