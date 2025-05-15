import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPrint } from "react-icons/io5";
import { FaCheck, FaArrowUp } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import { sidebarItems } from "../../data/SidebarItems";
import { useNavigate } from "react-router-dom";
import WeeklyViewsChart from "../Eksekutif/WeeklyChart";
import CompletionCell from "../../hooks/statusColor";
import { projectData } from "./ProjectData";

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
                <div className="w-full flex flex-row gap-6 rounded-lg mt-6 overflow-hidden">
                  {/* Content 1 */}
                  <div className="w-full min-w-0 h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex flex-col">
                        <p className="font-semibold text-black text-base">
                          Website Views
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                          Last Campaign Performance
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-auto">
                      <WeeklyViewsChart />
                    </div>
                  </div>

                  {/* Content 2 */}
                  <div className="w-full min-w-0 h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
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
                    </div>
                    <div className="w-full h-auto">
                      <WeeklyViewsChart />
                    </div>
                  </div>
                  {/* Content 3 */}
                  <div className="w-full min-w-0 h-auto flex flex-col items-center border rounded-lg p-4 space-y-2 bg-white">
                    <div className="flex flex-row w-full  justify-between">
                      <div cla ssName="flex flex-col">
                        <p className="font-semibold text-black text-base">
                          Completed Tasks
                        </p>
                        <p className="font-normal text-gray-400 text-base">
                          Last Campaign Performance
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-auto">
                      <WeeklyViewsChart />
                    </div>
                  </div>
                </div>
                {/* Project & Orders */}
                <div className="w-full flex flex-row gap-6 mt-6 overflow-hidden">
                  <div className="w-2/3 h-auto rounded-lg border bg-white font-nunito">
                    {/* Head */}
                    <div className="flex flex-row justify-between items-center p-4">
                      <div>
                        <p className="font-bold text-base">Projects</p>
                        <div className="flex flex-row mt-3">
                          <FaCheck className="text-sm mt-0.5 text-blue-600" />
                          <p className="ml-2 text-sm text-gray-500">
                            30 done
                            <span className="font-normal ml-1">this month</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <button>
                          <SlOptionsVertical className="text-sm mt-0.5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                    {/* Table */}
                    <div className="relative overflow-x-auto py-2 ">
                      <table className="w-full text-sm text-left text-gray-500 font-nunito">
                        <thead className="text-xs text-gray-700 uppercase border-b">
                          <tr>
                            <th scope="col" className="px-6 py-3">
                              Companies
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Member
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Budget
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Completion
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectData.map((project, index) => (
                            <tr
                              key={index}
                              className="bg-white border-b border-gray-200"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap flex flex-row"
                              >
                                {project.icon}
                                <span className="ml-5 text-sm">
                                  {project.title}
                                </span>
                              </th>
                              <td className="px-6 py-4">
                                <div className="flex flex-row">
                                  {project.members.map((member, i) => (
                                    <img
                                      key={i}
                                      src={member}
                                      className="w-6 h-6 rounded-full aspect-square object-cover"
                                      alt={`member-${i}`}
                                    />
                                  ))}
                                </div>
                              </td>
                              <td className="px-6 py-4">{project.budget}</td>
                              <td>
                                <CompletionCell
                                  percentage={project.percentage}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="w-1/3 h-auto rounded-lg border bg-white">
                    <div className="flex flex-col p-4">
                      <p className="font-semibold text-base">Orders overview</p>
                      <p className="flex flex-row text-sm text-gray-500 mt-3">
                        <FaArrowUp className="mt-1 text-green-500" />
                        <span className="ml-2">
                          24% <span className="font-normal">this month</span>
                        </span>
                      </p>
                      <div className="mt-6 px-2">
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-row items-start">
                          {/* Icon dan garis */}
                          <div className="flex flex-col items-center">
                            <IoMdNotificationsOutline className="text-2xl" />
                            <div className="w-px h-8 bg-gray-300 mt-1" />
                          </div>

                          {/* Teks di kanan */}
                          <div className="flex flex-col ml-2">
                            <p className="text-sm font-semibold">
                              $2400, Design changes
                            </p>
                            <p className="text-xs text-gray-500 font-semibold">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                      </div>
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
