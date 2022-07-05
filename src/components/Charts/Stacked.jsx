import React from 'react';

import { stackedChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Revenue Breakdown',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels =  stackedChartData[0].map((item)=>{
  return item.x
});

export const data = {
  labels,
  datasets: [
    {
      label: 'Budget',
      data: stackedChartData[0].map((item)=>item.y),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Expense',
      data: stackedChartData[1].map((item)=>item.y),
      backgroundColor: 'rgb(75, 192, 192)',
    }
  ],
};


const Stacked = () => {
  return (
    <div><Bar options={options} data={data} /></div>
  )
}

export default Stacked