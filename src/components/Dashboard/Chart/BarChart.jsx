import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../../hooks/useChart";

const SpecialChart = () => {
  const [chart, setChart] = useChart();
  console.log(chart);

  return <BarChart width={500} height={500} data={chart}>
       <Bar dataKey='month' fill='#8884d8'/>
       <XAxis dataKey='investment' />
       <Tooltip />
       <YAxis dataKey='revenue' type="monotone"
        stroke="#8884d8" />
  </BarChart>;
};

export default SpecialChart;
