import React from "react";
import { Navbar } from "../components/Rekomendasi-Sekolah/Navbar";
import { Tentang } from "../components/Rekomendasi-Sekolah/Tentang";
import { Data } from "../components/Rekomendasi-Sekolah/Data";
import { Footer } from "../components/Rekomendasi-Sekolah/Footer";

function RekomendasiSekolah() {
  return (
    <>
      <Navbar />
      <Tentang />
      <Data />
      <Footer />
    </>
  );
}
export default RekomendasiSekolah;
