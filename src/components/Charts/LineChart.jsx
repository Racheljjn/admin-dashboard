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
import { format } from 'date-fns'
import { lineChartData } from '../../data/dummy';

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
      position: 'top'
    },
    title: {
      display: true,
      text: 'Inflation Rate',
    },
  },
};
const labels = lineChartData[0].map((item)=>{
  return format(item.x, 'MM/dd/yyyy')
})

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data:lineChartData[0].map((item)=>item.y),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data:lineChartData[1].map((item)=>item.y),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data:lineChartData[2].map((item)=>item.y),
      borderColor: 'rgb(100, 39, 80)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const LineChart = () => {
 
  return (
   <div> <Line options={options} data={data} /></div>
  );
};

export default LineChart;