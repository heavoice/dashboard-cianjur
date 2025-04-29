import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const PemiluChart = () => {
  const [labels, setLabels] = useState([]);
  const [jumlahPemilu, setJumlahPemilu] = useState([]);
  const [tahunTerbaru, setTahunTerbaru] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/badan_kesatuan_bangsa_dan_politik//jmlh_dftr_pmlh_ttp_pml_pr_kcmtn_d_kbptn_cnjr_2"
        );

        const data = response.data.data;

        // Ambil data terbaru (tahun tertinggi) untuk setiap kecamatan
        const grouped = {};

        data.forEach((item) => {
          const kecamatan = item.bps_nama_kecamatan;
          const tahun = parseInt(item.tahun);
          const jumlah = parseInt(item.jumlah_suara);

          // Lewatkan jika data tidak valid
          if (!kecamatan || isNaN(tahun) || isNaN(jumlah)) return;

          if (!grouped[kecamatan] || tahun > grouped[kecamatan].tahun) {
            grouped[kecamatan] = { tahun, jumlah };
          }
        });

        const tahunTerbesar = Math.max(
          ...Object.values(grouped).map((item) => item.tahun)
        );
        setTahunTerbaru(tahunTerbesar);

        // Ubah ke bentuk array untuk chart
        const kecamatanLabels = Object.keys(grouped);
        const jumlahPemilu = kecamatanLabels.map((kec) => grouped[kec].jumlah);

        setLabels(kecamatanLabels);
        setJumlahPemilu(jumlahPemilu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        rotate: -45,
        style: {
          fontSize: "10px",
        },
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: `Jumlah Daftar Pemilu (data tahun ${tahunTerbaru})`,
      data: jumlahPemilu,
    },
  ];

  return (
    <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Visualisasi Jumlah Daftar Pemilih Tetap Pemilu per Kecamatan di
        Kabupaten Cianjur
      </h2>

      <div className="overflow-x-auto">
        <Chart
          options={options}
          series={series}
          type="bar"
          height={580}
          width={800}
        />
      </div>
    </div>
  );
};

export default PemiluChart;
