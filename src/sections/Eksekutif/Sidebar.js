import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { sidebarItems } from "../../data/SidebarItems";
import { useNavigate } from "react-router-dom";
import { MainDashboard } from "./MainDashboard";
import { ManajemenProgram } from "./ManajemenProgram";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState("Dashboard Utama");
  const [closeSidebar, setCloseSidebar] = useState(false);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
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
        <ul className="flex justify-around items-center p-2 text-sm font-bold font-nunito">
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
                <span className="text-[10px]">{label}</span>
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
        {/* Header */}
        <div className="p-2 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-nunito text-sm xl:text-base">
          <div className="flex flex-row gap-2">
            <p>Pages</p>
            <p className="font-bold">/</p>
            <p className="font-bold">{selectedSection}</p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
            <input
              type="text"
              placeholder="Type here..."
              className="px-4 py-2 border rounded-md focus:outline-none w-full md:w-auto"
            />

            <div className="flex items-center gap-2">
              <CgProfile className="text-gray-700" />
              <p>{userData.full_name}</p>
            </div>

            <IoMdNotificationsOutline className="text-gray-700" />
          </div>
          {/* Footer untuk mobile - muncul di atas konten ketika layar kecil */}
          <div className="block lg:hidden p-2 md:p-4 mb-2 font-nunito text-xs">
            <p>
              Copyright © 2025{" "}
              <span className="font-bold">Diskominfo Cianjur</span>. All Right
              Reserved
            </p>
            <div className="flex flex-col gap-1 font-bold mt-2">
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

        {/* Main Content Section */}
        <div className="flex-1 p-2 md:p-4 h-auto overflow-auto">
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
        <div className="hidden lg:flex p-2 md:p-4 mt-auto flex-col md:flex-row justify-between items-start md:items-center gap-2 font-nunito text-xs xl:text-base">
          <p>
            Copyright © 2025{" "}
            <span className="font-bold">Diskominfo Cianjur</span>. All Right
            Reserved
          </p>
          <div className="flex flex-col md:flex-row gap-2 font-bold">
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
