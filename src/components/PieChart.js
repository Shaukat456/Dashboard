import React from "react";
import Chart from "react-apexcharts";

const series = [44, 55, 41, 17, 15];
const options = {
  
  chart: {
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "85%",
      },
      
    },
  },
  legend: {
    labels: {
      colors: "#FFFFFF",
      useSeriesColors: false,
    
    },
  },
};

export default function PieChart() {
  return (
    <div>
      <Chart options={options} series={series} type="donut" height={300} />
    </div>
  );
}
