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
      Likes: "15.3k",
      Award: <FaTrophy />,
      TrophyColor: "red",
    },
  ];
  return (
    <>
      <div className="rounded-2xl   w-full   p-4  shadow-xl">
        <h1 className="p-3 font-CardH text-2xl font-semibold">Top Installed Countries</h1>
        {Authors.map(({ name, Likes, TrophyColor }, index) => {
          return (
            <>
              <div
                className="flex justify-between space-y-4 px-3  font-CardH text-base "
                key={index}
              >
                <div className="grid grid-cols-4">
                    
                  <figure className="flex items-center  ">
                    <img
                      className="w-9 items-center rounded-2xl  "
                      src="https://minimals.cc/assets/icons/flags/ic_flag_en.svg"
                      alt=""
                    />
                  </figure>
                  
                  <div className="flex  p-3  ">
                    <h1> {} </h1>

                    <div className="flex   py-1 items-center lg:text-sm">
                      <FaHeart className="" />
                      

                      <p>{Likes}</p>
                    </div>
                  </div>

                  <div className="flex  p-3 ">
                    <h1> {} </h1>

                    <div className="flex  py-1 items-center lg:text-sm">
                      <FaHeart className="" />

                      <p>{Likes}</p>
                    </div>
                  </div>


                  <div className="flex  p-3 ">
                    <h1> {} </h1>

                    <div className="flex  py-1 items-center lg:text-sm">
                      <FaHeart className="" />

                      <p>{Likes}</p>
                    </div>
                  </div>


                </div>

                <div
                  className={`rounded-3xl   items-center flex   bg-green-100`}
                >
                 
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