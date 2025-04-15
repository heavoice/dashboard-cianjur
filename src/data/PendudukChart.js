import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

const PendudukUsiaChart = () => {
  const [series, setSeries] = useState([]);
  const [labels] = useState([
    "Bayi & Balita (0-4)",
    "Anak & Remaja (5-19)",
    "Dewasa (20-59)",
    "Orang Tua (60+)",
  ]);
  const [genderStats, setGenderStats] = useState({ laki: 0, perempuan: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://opendata.cianjurkab.go.id/api/bigdata/dinas_kependudukan_dan_pencatatan_sipil_2//jmlhpnddkbrdsrknklmpksdnjnsklmndkbptncnjr"
        );

        const data = response.data.data;

        // Inisialisasi kategori usia
        let bayiBalita = 0;
        let anakRemaja = 0;
        let dewasa = 0;
        let orangTua = 0;

        // Inisialisasi jenis kelamin
        let totalLaki = 0;
        let totalPerempuan = 0;

        data.forEach((item) => {
          const usia = item.kelompok_usia;
          const jk = item.jenis_kelamin;
          const jumlah = item.jumlah_penduduk;

          // Jenis kelamin
          if (jk === "LAKI-LAKI") {
            totalLaki += jumlah;
          } else if (jk === "PEREMPUAN") {
            totalPerempuan += jumlah;
          }

          // Kelompok usia
          if (usia === "00-04") {
            bayiBalita += jumlah;
          } else if (["05-09", "10-14", "15-19"].includes(usia)) {
            anakRemaja += jumlah;
          } else if (
            [
              "20-24",
              "25-29",
              "30-34",
              "35-39",
              "40-44",
              "45-49",
              "50-54",
              "55-59",
            ].includes(usia)
          ) {
            dewasa += jumlah;
          } else if (
            ["60-64", "65-69", "70-74", "75+", "75 >", "75 >"].includes(usia)
          ) {
            orangTua += jumlah;
          }
        });

        setSeries([bayiBalita, anakRemaja, dewasa, orangTua]);
        setGenderStats({ laki: totalLaki, perempuan: totalPerempuan });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Hitung persentase jenis kelamin
  const totalGender = genderStats.laki + genderStats.perempuan;
  const persenLaki =
    totalGender > 0 ? ((genderStats.laki / totalGender) * 100).toFixed(1) : 0;
  const persenPerempuan =
    totalGender > 0
      ? ((genderStats.perempuan / totalGender) * 100).toFixed(1)
      : 0;

  const options = {
    labels: labels,
    colors: ["#00E396", "#FEB019", "#775DD0", "#FF4560"],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`,
    },
    tooltip: {
      y: {
        formatter: (value) => `${value.toLocaleString()} jiwa`,
      },
    },
  };

  return (
    <div className="w-full max-h-fit xxs:max-w-[15rem] xs:max-w-[25rem] sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 ">
        Visualisasi Jumlah Penduduk Kabupaten Cianjur Berdasarkan Rentang Usia
        dan Jenis Kelamin
      </h2>

      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="overflow-x-auto">
          <Chart
            options={options}
            series={series}
            type="pie"
            className="w-[400px h-[300px] sm:w-[600px] sm:h-[580px]"
          />
        </div>

        {/* Persentase jenis kelamin */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-2">
            Persentase Jenis Kelamin
          </h3>
          <ul className="text-base space-y-1">
            <li>
              Laki-Laki: <span className="font-bold">{persenLaki}%</span> (
              {genderStats.laki.toLocaleString()} jiwa)
            </li>
            <li>
              Perempuan: <span className="font-bold">{persenPerempuan}%</span> (
              {genderStats.perempuan.toLocaleString()} jiwa)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PendudukUsiaChart;
