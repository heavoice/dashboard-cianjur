import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { topik } from "../data/Topik";
import { kepuasan } from "../data/Kepuasan";

export const Modal = ({ onClose }) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedKepuasan, setSelectedKepuasan] = useState([]);
  const handleTopicClick = (id) => {
    setSelectedTopics(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Hapus jika sudah dipilih
          : [...prevSelected, id] // Tambahkan jika belum dipilih
    );
  };
  const handleKepuasanClick = (id) => {
    setSelectedKepuasan((prevSelected) =>
      prevSelected.includes(id) ? [] : [id]
    );
  };
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const selectedTopicTitles = topik
      .filter((item) => selectedTopics.includes(item.id))
      .map((item) => item.title);

    const selectedKepuasanTitle =
      kepuasan.find((item) => item.id === selectedKepuasan[0])?.title || "";

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("pesan", pesan);
    formData.append("topik", selectedTopicTitles.join(", "));
    formData.append("kepuasan", selectedKepuasanTitle);

    const res = await fetch(`${API_URL}/umpan`, {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(result.message);

    setNama("");
    setPesan("");
    setSelectedTopics([]);
    setSelectedKepuasan([]);
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-md w-full md:max-w-xl xs:max-w-[25rem] max-w-[15rem] py-4 sm:py-12 relative h-fit max-h-[28rem] sm:max-h-[36rem] overflow-auto hide-scrollbar">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-3 sm:pb-6 mb-4 px-4 sm:px-12">
          <div className="font-black text-gray-900 flex items-center justify-center">
            <img src={logo} className="w-8 h-8 sm:w-12 sm:h-12" />
            <span className="ml-2 sm:ml-4 text-xs sm:text-base font-noto">
              Dashboard <br /> Cianjur
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <AiOutlineClose />
          </button>
        </div>

        {/* Body */}
        <form className="space-y-4 font-nunito" onSubmit={handleSubmit}>
          <div className="px-4 sm:px-12">
            <label className="block mb-1 text-sm font-semibold">Nama</label>
            <input
              type="text"
              name="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Masukkan nama... (Opsional)"
            />
          </div>

          <div className="px-4 sm:px-12">
            <label className="block mb-1 text-sm font-semibold">Pesan</label>
            <textarea
              rows="4"
              name="pesan"
              value={pesan}
              onChange={(e) => setPesan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm"
              placeholder="Masukkan pesan tentang aplikasi ini disini..."
            ></textarea>
          </div>

          <div className="px-4 sm:px-12">
            <p className="block mb-2 text-sm font-semibold">
              Fitur apakah yang menurut anda sangat bermanfaat?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 overflow-auto h-full max-h-[5.6rem] md:max-h-full">
              {topik.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTopicClick(item.id)}
                  className={`px-3 py-2 rounded-full text-xxs sm:text-sm transition border ${
                    selectedTopics.includes(item.id)
                      ? "bg-[#22a9e1] text-white border-transparent"
                      : "border-gray-300 hover:bg-blue-100"
                  }`}
                  type="button"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-12">
            <p className="block mb-2 text-sm font-semibold">
              Sebarapa puaskah Anda dengan Dashboard Cianjur?
            </p>
            <div className="flex flex-row gap-2 items-center justify-center">
              {kepuasan.map((item) => (
                <div key={item.id} className="relative group">
                  <button
                    type="button"
                    onClick={() => handleKepuasanClick(item.id)}
                  >
                    <img
                      className="w-8 xs:w-14 md:w-20 lg:w-20 h-8 xs:h-14 md:h-20 lg:h-20"
                      src={item.img}
                    />
                  </button>
                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                      bg-gray-800 text-white text-xs rounded py-1 px-2 
                      ${
                        selectedKepuasan.includes(item.id)
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }
                      transition duration-300 pointer-events-none z-10 whitespace-nowrap`}
                  >
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 sm:px-12">
            <button
              type="submit"
              className="bg-[#22a9e1] text-white px-4 py-2 rounded-lg text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
