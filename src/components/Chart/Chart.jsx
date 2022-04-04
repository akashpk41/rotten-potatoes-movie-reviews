import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const [data,setData] = useState([])
    useEffect( () => {
     fetch('chartData.json')
     .then(res => res.json())
     .then(data => setData(data)
     )

    },[] )
          return (

                 <LineChart
                   width={500}
                   height={500}
                   data={data}
                   margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                   }}
                 >
                   <CartesianGrid strokeDasharray="3 3" />
                   <XAxis dataKey="name" />
                   <YAxis yAxisId="left" />
                   <YAxis yAxisId="right" orientation="right" />
                   <Tooltip />
                   <Legend />
                   <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                   <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                 </LineChart>

          )
};

export default Chart;