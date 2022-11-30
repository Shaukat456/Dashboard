import React from "react";
import {
  FaTrophy,
  FaHeart,
  FaWindows,
  FaAndroid,
  FaApple,
  FaSignal,
  FaShare,
} from "react-icons/fa";

const Cards = ({
  total = 2,
  qty = "18,500",
  percentg = 2.5,
  arrow,
  color = "yellow",
}) => {
  return (
    <div className="w-full   md:p-6 sm:p-4 p-3  flex flex-wrap  justify-center  bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700  ">
      <div className="flex flex-col">
        <a href="#">
          <h5 className="mb-4 text-base my-1 font-semibold tracking-tight text-gray-700 dark:text-white">
            Total Active Users
          </h5>
        </a>
        {/* <div className='flex '> */}

        <p className="mb-4 flex text-gray-500 dark:text-gray-400 font-bold">
          <div className="bg-green-200 rounded-3xl w-fit p-1">
            <FaShare color="green" className="w-fit p-1 " />
          </div>
          <figure className="mx-1">
          </figure>
          +{percentg}%
        </p>

        
        <h1 className="font-CardH font-semibold text-3xl text-gray-700 ">
          {" "}
          {qty}{" "}
        </h1>
      </div>
      <figure className="mx-auto">
      </figure>

      <div className={`text-4xl flex items-center green-300`}>
        <FaSignal color={color} />
      </div>

    </div>
  );
};

export default Cards;
