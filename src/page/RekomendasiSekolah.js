import { Navbar } from "../components/Navbar";
import { Tentang } from "../sections/Rekomendasi-Sekolah/Tentang";
import { Data } from "../sections/Rekomendasi-Sekolah/Data";
import { Footer } from "../components/Footer";

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
