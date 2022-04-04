import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../../hooks/useChart";
const Chart = () => {
  const [chart, setChart] = useChart();
  console.log(chart);

  return (
    <LineChart
      width={500}
      height={500}
      data={chart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="investment"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line
        yAxisId="right"
        type="monotone"
        dataKey="revenue"
        stroke="#82ca9d"
      />
    </LineChart>
  );
};

export default Chart;
