import React from "react";

import { FaTrophy , FaHeart} from "react-icons/fa";
import Avatar from '../avatar.png'
export const TopAuthors = () => {
  const Authors = [
    {
      name: "Deja  Brady",
      Likes: "15.3k",
      Award : <FaTrophy/>, 
      TrophyColor : 'Green',
    //   img:
    },
    {
      name: "Someone Else",
      Likes: "63.k",
      Award : <FaTrophy/>, 
      TrophyColor : 'blue',
    //   img:
    },
    {
      name: "Deja  Brady",
      Likes: "15.3k",
      Award : <FaTrophy/>, 
      TrophyColor : 'Red',
    //   img:
    },
  ];
  return (
    <>
    <div className="">

    <div className="flex justify-between bg-blue-200 p-5 w-4/12 font-CardH text-base">
    {/* <h1>Top Authors</h1> */}


        <div className="flex flex-col">



            <h1> Shaukat </h1>
        </div>
            {/* <div className="flex">

        <FaHeart/>
            <p> 34.k likes</p>
            </div> */}

            {/* <FaTrophy /> */}



    </div>
    </div>
   
    </>    
  )
};
