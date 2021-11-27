import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Current Month Actual",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Previous Month Estimate",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
    {
      label: "Previous Year Actual",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

const LineChart = () => {
  Chart.register();
  return (
    <>
      <Line data={data} />
    </>
  );
};

export default LineChart;
