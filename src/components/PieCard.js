import React from "react";
import PieChart from "./PieChart";

export const PieCard = () => {
  return (
    <div className="bg-white w-auto my-auto shadow-lg h-full items-center  ">
      <div className="flex flex-col  ">
        <h1 className="font-bold font-CardH mx-10 mb-5 my-14">Current Download</h1>
        <PieChart />
      </div>
    </div>
  );
};
