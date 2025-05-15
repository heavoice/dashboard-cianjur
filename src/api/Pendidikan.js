export const Pendidikan = async () => {
  try {
    const response = await fetch(
      "https://opendata.cianjurkab.go.id/api/bigdata/dinas_arsip_dan_perpustakaan//indeks_pembangunan_literasi_masyarakat_di_kabupaten_cianjur"
    );
    const data = await response.json();

    // Ambil hanya tahun dan iplm
    const filtered = data.data.map((item) => ({
      tahun: item.tahun,
      iplm: item.iplm,
    }));

    return filtered;
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    return [];
  }
};
