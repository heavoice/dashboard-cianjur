import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router dari react-router-dom
import Main from "./Main"; // Import komponen utama atau halaman lain yang ingin dirutekan

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} /> {/* Tentukan path dan komponen */}
        {/* Anda dapat menambahkan route lain di sini */}
      </Routes>
    </Router>
  );
};

export default AppRouter; // Ekspor Router yang telah dikonfigurasi
