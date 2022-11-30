import React from "react";

import { FaTrophy, FaHeart ,FaWindows,FaAndroid ,FaApple ,FaSignal} from "react-icons/fa";
import Avatar from "../avatar.png";
 const TopC = () => {
  const Authors = [
    {
      name: "Germany",
      Likes: "15.3k",

      Award: <FaTrophy />,
      TrophyColor: "green",
    },
    {
      name: "Japan",
      Likes: "15.k",
      Award: <FaTrophy />,
      TrophyColor: "blue",
    },
    {
      name: "Srilanka",
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
      <div className=" rounded-2xl text-gray-700    lg:w-[550px] w-screen   p-4 pr-5   shadow-lg hover:overflow-x-scroll overflow-x-hidden  scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin  scrollbar-rounded     ">
        <h1 className="p-2 pb-5 font-CardH text-xl font-semibold">Top Installed Countries</h1>
        {Authors.map(({ name, Likes, TrophyColor }, index) => {
          return (
            <>
             <div className="grid  lg:grid-cols-4 sm:grid-col-5    p-2  space-x-3 py-2  md:text-base text-sm ">
              <div className="flex md:col-span-1 col-span-4 space-x-2  w-full items-center jstify-center ">
                {/* <figure> */}
                  <img className="" src="https://minimals.cc/assets/icons/flags/ic_flag_de.svg" alt="" />
                {/* </figure> */}
                <p className="font-CardH font-semibold">{name}</p>
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