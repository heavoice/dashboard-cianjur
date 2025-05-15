import { useEffect, useState } from "react";

export const Sekolah = () => {
  const [sekolahList, setSekolahList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/sekolah`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.map((item) => ({
          id: item.id,
          nama: item.nama,
          instansi: item.instansi,
          akreditasi: item.akreditasi,
          alamat: item.alamat,
          kecamatan: item.kecamatan,
          npsn: item.npsn,
          koordinat: [item.koordinat_lat, item.koordinat_lng],
          jenjang: item.jenjang,
        }));
        setSekolahList(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { sekolahList, loading, error };
};
