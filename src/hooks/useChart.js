import React, { useEffect, useState } from 'react';

const useChart = () => {
     const [chart, setChart] = useState([]);
  console.log(chart);

  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return  [chart, setChart]
};

export default useChart;