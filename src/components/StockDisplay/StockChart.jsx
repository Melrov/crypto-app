import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Bubble } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartCon = styled.div`
  width: 100%;
`;


//https://react-chartjs-2.netlify.app/examples/line-chart
//https://www.chartjs.org/docs/latest/configuration/responsive.html
function StockChart({ chartData }) {
  let currentChartData = chartData
  
  const reversedData = [];
  let c = [];
  for (let i = currentChartData.length - 1; i >= 0; i--) {
    reversedData.push(currentChartData[i]);
  }

  for (let i = 0; i < currentChartData.length; i++) {
    c.push("");
  }
  const options = {
    responsive: true,
    plugins: {
      Line: {
        borderWidth: 0,
        borderColor:
          currentChartData[currentChartData.length - 1].close >
          currentChartData[0].close
            ? "rgb(255, 0 ,0)"
            : "rgb(0, 255, 0)",
      },
      Tooltip: {
        enabled: false,
      },
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  const data = {
    labels: chartData.map((item) => ""),
    datasets: [
      {
        label: "",
        backgroundColor:
          currentChartData[currentChartData.length - 1].close >
          currentChartData[0].close
            ? "rgb(0, 128, 0)"
            : "rgb(255, 0 ,0)",
        borderColor:
          currentChartData[currentChartData.length - 1].close >
          currentChartData[0].close
            ? "rgb(0, 128, 0)"
            : "rgb(255, 0 ,0)",
        fill: {
          target: "shape",
          above: "rgb(255, 0, 0)", // Area will be red above the origin
          below: "rgb(0, 0, 255)", // And blue below the origin
        },
        data: reversedData,
      },
    ],
  };
  return (
    <ChartCon>
      <Line options={options} data={data} />
    </ChartCon>
  );
}

export default StockChart;
