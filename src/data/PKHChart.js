import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const PKHChart = () => {
  const [labels, setLabels] = useState([]);
  const [jumlahPKH, setJumlahPKH] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/dinas_sosial//jumlah_penerima_program_keluarga_harapan_pkh_kabupaten_cianjur"
        );

        const data = response.data.data;

        const filteredData = data.filter((item) => item.id <= 64);

        const kecamatanLabels = filteredData.map(
          (item) => item.bps_nama_kecamatan
        );
        const pkhValues = filteredData.map((item) => item.jumlah);

        setLabels(kecamatanLabels);
        setJumlahPKH(pkhValues);
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
          fontSize: "5px",
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
      name: "Jumlah Penerima Program Keluarga Harapan (PKH)",
      data: jumlahPKH,
    },
  ];

  return (
    <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Visualisasi Jumlah Penerima Program Keluarga Harapan (PKH) Kabupaten
        Cianjur
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

export default PKHChart;
