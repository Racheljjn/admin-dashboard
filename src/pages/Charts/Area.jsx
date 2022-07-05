import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { areaChartData } from '../../data/dummy';
import { format } from 'date-fns'
import { ChartsHeader } from '../../components';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Inflation Rate in percentage',
    },
  },
};

const labels = areaChartData[0].map((item)=>{
  return format(item.x, 'MM/dd/yyyy')
})

export const data = {
  labels,
  datasets: [
     {
      fill: true,
      label: 'Dataset 1',
      data:areaChartData[0].map((item)=>item.y),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      fill: true,
      label: 'Dataset 2',
      data:areaChartData[1].map((item)=>item.y),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Area=() =>{
  return <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Area" title="Inflation Rate In Percentage" />
    <div className="w-full">
      <Line options={options} data={data} />
    </div>
  </div>
}

export default Area
