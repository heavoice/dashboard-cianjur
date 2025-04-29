import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const UMKMChart = () => {
  const [labels, setLabels] = useState([]);
  const [jumlahUMKM, setJumlahUMKM] = useState([]);
  const [dataDeskripsi, setDataDeskripsi] = useState([]);
  const [tahunTerbaru, setTahunTerbaru] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/dkukmpp//jmlh-sh-mkr-kcl-mnngh-mkm-brdsrkn-skl-sh-dn-kcmtn-d-kbptn-cnjr"
        );

        const data = response.data.data;

        const grouped = {};

        data.forEach((item) => {
          const kecamatan = item.bps_nama_kecamatan;
          const tahun = parseInt(item.tahun);
          const jumlah = parseInt(item.jumlah_umkm);

          // Filter tahun 2022-2024
          if (
            !kecamatan ||
            isNaN(tahun) ||
            tahun < 2022 ||
            tahun > 2024 ||
            isNaN(jumlah)
          )
            return;

          // Simpan data terbaru per kecamatan
          if (!grouped[kecamatan] || tahun > grouped[kecamatan].tahun) {
            grouped[kecamatan] = {
              tahun,
              jumlah,
              kecamatan,
            };
          }
        });

        const sortedKecamatan = Object.keys(grouped).sort();
        const umkmValues = sortedKecamatan.map((kec) => grouped[kec].jumlah);
        const tahunTerbesar = Math.max(
          ...Object.values(grouped).map((item) => item.tahun)
        );

        setLabels(sortedKecamatan);
        setJumlahUMKM(umkmValues);
        setDataDeskripsi(Object.values(grouped));
        setTahunTerbaru(tahunTerbesar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const colorPalette = [
    "#00E396",
    "#008FFB",
    "#FEB019",
    "#775DD0",
    "#3F51B5",
    "#546E7A",
    "#D4526E",
    "#8D5B4C",
    "#F86624",
    "#1B998B",
    "#2E294E",
    "#F46036",
    "#9C27B0",
    "#3DDC97",
    "#FF4560",
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    xaxis: {
      categories: labels,
      labels: {
        rotate: -45,
        style: { fontSize: "10px" },
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "straight",
      width: 2,
    },
    markers: {
      size: 4,
      colors: colorPalette,
    },
    colors: [colorPalette[1]],
  };

  const series = [
    {
      name: `Jumlah UMKM (data tahun ${tahunTerbaru})`,
      data: jumlahUMKM,
    },
  ];

  return (
    <div className="w-full h-auto">
      <h2 className="text-xl font-semibold mb-4">
        Visualisasi Usaha Mikro, Kecil, dan Menengah di Kabupaten Cianjur
      </h2>

      <div className="overflow-x-auto">
        <Chart options={options} series={series} type="line" />
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 text-xs font-normal">
        {dataDeskripsi.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span
              className="p-1 sm:p-2 rounded-full"
              style={{
                backgroundColor: colorPalette[index % colorPalette.length],
              }}
            ></span>
            <span className="line-clamp-1">
              {item.kecamatan} ({item.tahun})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UMKMChart;
