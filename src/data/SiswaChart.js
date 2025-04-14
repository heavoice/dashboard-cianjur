import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const SiswaChart = () => {
  const [labels, setLabels] = useState([]);
  const [jumlahSiswa, setJumlahSiswa] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/dinas_komunikasi_informatika_dan_persandian//jmlh-ssw-sklh-dsr-sd-brdsrkn-kcmtn-d-kbptn-cnjr"
        );

        const data = response.data.data;

        const kecamatanLabels = data.map((item) => item.bps_nama_kecamatan);
        const siswaValues = data.map((item) => item.jumlah_siswa);

        setLabels(kecamatanLabels);
        setJumlahSiswa(siswaValues);
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
      name: "Jumlah Siswa",
      data: jumlahSiswa,
    },
  ];

  return (
    <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">
        Visualisasi Siswa SD di Kabupaten Cianjur
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

export default SiswaChart;
