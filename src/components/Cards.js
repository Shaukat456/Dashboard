import React from "react";
import { FaTrophy, FaHeart ,FaWindows,FaAndroid ,FaApple ,FaSignal,FaShare} from "react-icons/fa";

const Cards = ({ total=2, qty = '18,500', percentg = 2.5, arrow, graph }) => {
  return (
    // <div classNameName="font-CardH  ">
      <div className="w-full  p-6  flex justify-center  bg-white border border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700  ">

        <div className="flex flex-col">
          <a href="#">
            <h5 className="mb-2 text-base my-1 font-semibold tracking-tight text-gray-900 dark:text-white">
              Total Active Users {total}
            </h5>
          </a>
          {/* <div className='flex '> */}


          <p className="mb-1 flex text-gray-500 dark:text-gray-400 font-bold">
            <div className="bg-green-200 rounded-3xl w-fit py-1 px-2 ">
            <FaShare color="green" />

            </div>
            <figure className="mx-1"> 
            
                {/* <img src="https://minimals.cc/assets/illustrations/characters/character_3.png" width={9} height={5} alt="" /> */}
            </figure>
            {percentg}%
          </p>

          {/* <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
        See our guideline
    </a> */}
          {/* </div> */}
          <h1 className="font-CardH font-semibold text-3xl "> {qty} </h1>
        </div>
        <figure className="mx-auto"> 
                {/* <img src="https://minimals.cc/assets/illustrations/characters/character_3.png" width={9} height={15} alt="" /> */}
           
            </figure>
           
           <div className="text-4xl flex items-center">

           <FaSignal />
           </div>


        {/* <svg
          className="mx-auto  w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
            clip-rule="evenodd"
          ></path>
          <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
        </svg> */}
        {/* <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg> */}
      </div>
    // </div>
  );
};

export default Cards;
