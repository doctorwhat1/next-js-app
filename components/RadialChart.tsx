"use client"
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';




const RadialChart: React.FC = () => {
  const getChartOptions = (): ApexOptions => {
    return {
      series: [90, 85, 70],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
      chart: {
        height: "380px",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E7EB',
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "32%",
          }
        },
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: ["Done", "In progress", "To do"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter(value) {
            return value + '%';
          }
        }
      }
    };
  };

  const options = getChartOptions();

  return (
    <div className="container">
      {/* <div className="flex space-x-8 mb-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Done</h2>
          <p className="text-sm text-gray-600">"90"%</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">In Progress</h2>
          <p className="text-sm text-gray-600">{"85"}%</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold">To Do</h2>
          <p className="text-sm text-gray-600">{"70"}%</p>
        </div>
      </div> */}

      <div className=''></div>
      <Chart options={options} series={options.series as number[]} type="radialBar" height={options.chart?.height} />
    </div>
  );
};

export default RadialChart;