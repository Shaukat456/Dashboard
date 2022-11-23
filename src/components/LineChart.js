import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

var faker = require("faker")



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' ,
    },
    title: {
      // display: true,
      // text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Asia ',
      data: labels.map(() => faker.datatype.number({ min: -20 , max: 10 })),
      borderColor: 'yellow',
      backgroundColor: 'yellow',
      
    },
    {
      label: 'America',
      data: labels.map(() => faker.datatype.number({ min: -13, max: 9 })),
      borderColor: 'green',
      backgroundColor: 'green',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
