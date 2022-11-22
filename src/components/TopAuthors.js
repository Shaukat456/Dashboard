import React from "react";

import { FaTrophy , FaHeart} from "react-icons/fa";
import Avatar from '../avatar.png'
export const TopAuthors = () => {
  const Authors = [
    {
      name: "Deja  Brady",
      Likes: "15.3k",
      Award : <FaTrophy/>, 
      TrophyColor : 'green',
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
      TrophyColor : 'red',
    //   img:
    },
  ];
  return (
    <>
    <div className="rounded-2xl  w-3/12 p-4 bg-white ">

    <h1 className="p-3 font-CardH text-2xl font-semibold">Top Authors</h1>
    {
      Authors.map(({name , Likes, TrophyColor},index)=>{
        return (
          <>
          <div className="flex justify-between space-y-4 px-3  font-CardH text-base " key={index}>
    


    <div className="flex ">
    <figure className="flex items-center  ">
<img className="w-9 items-center rounded-2xl  " src={require('../avatar.png')} alt="" />
</figure>
    <div className="flex flex-col p-3 ">

        <h1> {name} </h1>

        

    <div className="flex space-x-2 py-1 items-center ">
    
    <FaHeart className="" />
   
        <p> 
          {Likes}
        </p>
        </div>
    </div>
    </div>

  <div className={`rounded-3xl   items-center flex   bg-green-100`}    >

        <FaTrophy className={` rounded-2xl  text-${TrophyColor}-400 w-12 text-2xl `} />
  </div>



</div>
          </>
        )
      })
    }
    

    </div>
   
    </>    
  )
};
