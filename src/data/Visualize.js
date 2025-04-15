import CCTVChart from "../data/CCTVChart";
import SiswaChart from "../data/SiswaChart";
import UMKMChart from "../data/UMKMChart";
import PKHChart from "../data/PKHChart";
import PendudukChart from "../data/PendudukChart";
import PemilihanChart from "./PemilihanChart";

export const visualize = [
  {
    id: 1,
    section: "Daftar Lokasi CCTV pada Ruas Jalan di Kabupaten Cianjur",
    data: <CCTVChart />,
  },
  {
    id: 2,
    section:
      "Jumlah Siswa Sekolah Dasar (SD) Berdasarkan Kecamatan di Kabupaten Cianjur",
    data: <SiswaChart />,
  },
  {
    id: 3,
    section: "Jumlah Usaha Kecil Berdasarkan Kecamatan di Kabupaten Cianjur",
    data: <UMKMChart />,
  },
  {
    id: 4,
    section:
      "Jumlah Penerima Program Keluarga Harapan (PKH ) di Kabupaten Cianjur",
    data: <PKHChart />,
  },
  {
    id: 5,
    section:
      "Jumlah Penduduk Berdasarkan Kelompok Usia dan Jenis Kelamin di Kabupaten Cianjur",
    data: <PendudukChart />,
  },
  {
    id: 6,
    section:
      "Jumlah Daftar Pemilih Tetap Pemilu per Kecamatan di Kabupaten Cianjur",
    data: <PemilihanChart />,
  },
  {
    id: 7,
    section: "Sebaran Kepadatan Penduduk Berdasarkan Kabupaten Cianjur",
    data: null,
  },
  {
    id: 8,
    section: "Perencanaan Pembangunan Daerah Berdasarkan Kabupaten Cianjur",
    data: null,
  },
  {
    id: 9,
    section: "Indeks Pembangunan Manusia Berdasarkan Kabupaten Cianjur",
    data: null,
  },
  {
    id: 10,
    section: "Aliran Anggaran Daerah Berdasarkan Kabupaten Cianjur",
    data: null,
  },
];
