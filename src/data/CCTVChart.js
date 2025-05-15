import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const CctvChart = () => {
  const [kategoriData, setKategoriData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/dinas_perhubungan//daftar_lokasi_cctv_pada_ruas_jalan_di_kabupaten_cianjur"
        );

        const data = response.data.data;

        const kategoriCount = data.reduce((acc, item) => {
          acc[item.kategori] = (acc[item.kategori] || 0) + 1;
          return acc;
        }, {});

        setKategoriData(kategoriCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: Object.keys(kategoriData),
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
      name: "Jumlah CCTV",
      data: Object.values(kategoriData),
    },
  ];

  return (
    <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Visualisasi CCTV per Ruas Jalan di Kabupaten Cianjur
      </h2>

      <div className="overflow-x-auto">
        <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-7xl">
          <Chart
            options={options}
            series={series}
            type="bar"
            height={580}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default CctvChart;
