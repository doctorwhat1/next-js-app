import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';


const MyChart: React.FC = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'line',
      height: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Количество Тасков',
      align: 'left',
      style: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    xaxis: {
      categories: ['Явн', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль'],
      title: {
        text: 'Месяцы',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Таски',
        style: {
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#333',
        },
      },
    },
    grid: {
      borderColor: '#e0e0e0',
    },
    colors: ['#008FFB'],
  };

  const chartSeries = [
    {
      name: 'Таски',
      data: [30, 40, 35, 50, 49, 60, 70],
    },
  ];

  return (
    <>
      <Chart options={chartOptions} series={chartSeries} type="line" height={350} />
    </>
  );
};

export default MyChart;