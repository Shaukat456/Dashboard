import React from "react";

import { FaTrophy, FaHeart ,FaWindows,FaAndroid ,FaApple ,FaSignal} from "react-icons/fa";
import Avatar from "../avatar.png";
 const TopC = () => {
  const Authors = [
    {
      name: "Country",
      Likes: "15.3k",

      Award: <FaTrophy />,
      TrophyColor: "green",
    },
    {
      name: "Country",
      Likes: "15.k",
      Award: <FaTrophy />,
      TrophyColor: "blue",
    },
    {
      name: "Country",
      Likes: "15.k",
      Award: <FaTrophy />,
      TrophyColor: "blue",
    },
    {
      name: "Country",
      Likes: "15.k",
      Award: <FaTrophy />,
      TrophyColor: "blue",
    },
    {
      name: "Country",
      Likes: "15.3k",
      Award: <FaTrophy />,
      TrophyColor: "red",
    },
  ];
  return (
    <>
      <div className="rounded-2xl text-gray-700    w-[550px]   p-4 pr-5   shadow-lg">
        <h1 className="p-3 font-CardH text-xl font-semibold">Top Installed Countries</h1>
        {Authors.map(({ name, Likes, TrophyColor }, index) => {
          return (
            <>
             <div className="grid  lg:grid-cols-4  p-3  space-x-5  ">
              <div className="flex md:col-span-1 space-x-1  w-full items-center justify-center ">
                {/* <figure> */}
                  <img className="w-full" src="https://minimals.cc/assets/icons/flags/ic_flag_de.svg" alt="" />
                {/* </figure> */}
                <p className="">{name}</p>
              </div>
              
              <div className="flex  text-gray-500 space-x-2 items-center">
                  <FaAndroid className=""/>
                   <p> 42.6K</p>
              </div>
              
              <div className="flex text-gray-500 space-x-2 items-center">
                  <FaWindows/>
                   <p>2.33k </p>
              </div>
              
              <div className="flex text-gray-500 space-x-2 items-center">
                  <FaApple/>
                  <p>34.2k</p>
              </div>
              
                           </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default TopC;