import { Line} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import "chart.js/auto"
import { SalesState } from "../Types/Types";

// Define types for SalesData and chartProps
type ChartProps = {
  chartData: SalesState;
}

export const BarChart = ({ chartData }: ChartProps) => {
  const options = {
    maintainAspectRatio: false, // Prevents automatic resizing while keeping the aspect ratio
    responsive: true,           // Allows the chart to respond to container resizing
  };


  return <Line data={chartData} options={options} />;
};
