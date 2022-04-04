import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../../hooks/useChart";

const SpecialChart = () => {
  const [chart, setChart] = useChart();
  console.log(chart);

  return (
    <BarChart
          width={500}
          height={500}
          data={chart}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="month" stackId="a" fill="#8884d8" />
          <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
          <Bar dataKey="revenue" fill="#ffc658" />
        </BarChart>
  );
};

export default SpecialChart;
