import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppRouter from "./Router";
import "leaflet/dist/leaflet.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter /> {/* Gunakan AppRouter di sini */}
  </React.StrictMode>
);

console.log("API URL:", process.env.REACT_APP_API_URL);
console.log("Environment:", process.env.REACT_APP_ENV);

// Jika Anda ingin memulai pengukuran kinerja di aplikasi Anda, kirimkan fungsi
// untuk mencatat hasilnya (misalnya: reportWebVitals(console.log))
// atau kirim ke endpoint analitik. Pelajari lebih lanjut: https://bit.ly/CRA-vitals
reportWebVitals();
