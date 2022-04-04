import React from "react";
import SpecialChart from "./Chart/BarChart";
import Chart from "./Chart/LineChart";

const Dashboard = () => {
  return (
    <div className=" flex flex-col md:flex-row   p-3 ">
      <div className="left-side  p-2 mr-2  shadow-2xl rounded-sm ">

        <Chart  />
      </div>
      <div className="right-side  p-2 shadow-2xl rounded-smp-1 ">
       <SpecialChart />
      </div>
    </div>
  );
};

export default Dashboard;
