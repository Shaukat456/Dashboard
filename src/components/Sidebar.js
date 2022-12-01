import React, { useEffect, useRef, useState } from "react";
import Sidebar_menu from "../SidebarData";
import { FaEllipsisV } from "react-icons/fa";
import Avatar from "../avatar.png";
import logo from "../spotfy.png";

export const Sidebar = ({ SIDEBAR }) => {
  const [active, setActive] = useState(null);


  const reference = useRef(null);

  var GeneralArr, Management;
  Sidebar_menu.forEach((e, index) => {
    const { General, Management } = e;
    GeneralArr = General;
  });

  
  return (
    <>
      <div className={`lg:h-screen lg:flex lg:w-fit   `}>
        <aside className="w-72  " aria-label="Sidebar" >
          <div className=" sideborder  transition ease-in-out delay-1000    h-screen fixed w-72 px-3 py-10  rounded dark:bg-gray-800    duration-700 hover:overflow-y-scroll overflow-y-hidden  scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin  scrollbar-rounded ">
            <a className={`container flex  w-5/6 mb-5 nav-link  `}>
              <img src={logo} className="lg:h-10 mb-4 md:h-6 sm:h-4 h-5 " />

              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                {" "}
              </span>
            </a>

            {/* User Card */}
            <div className="bg-gray-100 p-4 mx-3 items-center rounded-xl ">
              <div className="flex items-center">
                <figure>
                  <img width={40} src={Avatar} alt="" className="rounded-2xl" />
                </figure>

                <div className="flex font-semibold mx-5 flex-col ">
                  <h1 className="">Minimal UI</h1>
                  <p className="font-thin text-gray-600">admin</p>
                </div>
              </div>
            </div>

            <ul className="space-y-2 py-5  text-gray-100">
              <p className="mx-5 text-xs font-semibold text-gray-400 font-CardH capitalize ">
                GENERAL{" "}
              </p>

              {GeneralArr.map((e) => {
                // console.log('e',e )
                const { name, img } = e;
                return (
                  <>
                    <li>
                      <a
                        href="#"
                        className={`   flex items-center  p-2 text-base font-normal text-[#637389] text-ellipsis rounded-lg dark:text-white hoverg-gray-100 hover:text-green-900 dark:hover:bg-gray-700`}
                      >
                        <figure className="flex-shrink-0 px-3 py-2    text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900  font-CardH">
                          <img src={img} alt="" />
                          {img}
                        </figure>

                        <span className="flex-1 text-gray-500 mx-4 whitespace-nowrap font-CardH font-medium">
                          {name}
                        </span>
                        <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-700 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"></span>
                      </a>
                    </li>
                  </>
                );
              })}

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                ></a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};
