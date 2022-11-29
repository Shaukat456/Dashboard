import React from "react";
import { LineChart } from "./LineChart";

export const LineChartCard = () => {
  return (
    <div className="rounded-2xl flex flex-col  lg:w-full  w-screen p-4 bg-white  shadow-md  ">
      <div className="flex mx-5   justify-between">
        <div className="flex-col">
          <h1 className="font-bold font-CardH">Area installed</h1>
          <h3 className="text-gray-500 text-start">(+43%) than last year</h3>
        </div>

        <select className="bg-gray-100  w-fit outline-none text-base rounded-xl  font-Car h-full p-[3px]   text-gray-600 font-semibold ">
          <option>2019</option>
          <option>2020</option>
        </select>
      </div>
      <LineChart />
    </div>
  );
};
