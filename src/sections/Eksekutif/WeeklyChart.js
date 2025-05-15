import React, { useState } from "react";
import Chart from "react-apexcharts";

const WeeklyViewsChart = () => {
  const [weeklyViewsData, setWeeklyViewsData] = useState({
    Monday: 120,
    Tuesday: 150,
    Wednesday: 180,
    Thursday: 140,
    Friday: 200,
    Saturday: 170,
    Sunday: 130,
  });

  const options = {
    chart: {
      type: "bar",
    },
    xaxis: {
      categories: Object.keys(weeklyViewsData),
    },
    plotOptions: {
      bar: {
        distributed: false,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  const series = [
    {
      name: "Views",
      data: Object.values(weeklyViewsData),
    },
  ];

  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <div className="w-full">
          <Chart options={options} series={series} type="bar" height={250} />
        </div>
      </div>
    </div>
  );
};

export default WeeklyViewsChart;
