import React, { useRef , useState } from "react";
import Sidebar_menu from "../SidebarData";
import { FaEllipsisV } from "react-icons/fa";
import Avatar from "../avatar.png";
import logo from '../spotfy.png'
export const Sidebar = () => {
  const [active, setActive] = useState(null);

  const reference =useRef(null)
  
  var GeneralArr, Management;
  Sidebar_menu.forEach((e , index) => {
    const { General, Management } = e;
    GeneralArr = General;
  });

  // console.log(typeof GeneralArr)

  return (
    <div className="lg:h-screen lg:flex sm:hidden   " >
      <aside className="w-72  " aria-label="Sidebar">
        <div className="   transition ease-in-out delay-1000    h-screen fixed w-72 px-3 py-10  rounded dark:bg-gray-800    duration-700 hover:overflow-y-scroll overflow-y-hidden  scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin  scrollbar-rounded ">
         
          {/* <a
            className="flex  w-5/6 mb-5"
            onClick={() => {
              this.classList.add=''
            }}
                
            
          > */}

             <a 
        // href}`} 
        className={ `flex  w-5/6 mb-5 nav-link  `}
        onClick={(e)=>{
            console.log("E" , e)
            // e.currentTarget.classList.toggle("m-3")
            // e.currentTarget.classList.add("mx-5")
        }}
        // onClick={() => setActive(link)}
      >
            
            <img src={logo} className="lg:h-10 mb-4 md:h-6 sm:h-4 h-5 "  />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mr-3 h-6 sm:h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg> */}
            
              {/* s')} */}

            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> </span>
          </a>

          {/* User Card */}
          <div className="bg-gray-100 p-4 mx-3 items-center rounded-xl ">
            <div className="flex items-center">
              {/* <FaEllipsisV/> */}
              <figure>
                <img width={40} src={Avatar} alt="" className='rounded-2xl'/>
              </figure>
              
              <div className="flex font-semibold mx-5 flex-col ">
            <h1 className="">Minimal UI</h1>
            <p className="font-thin text-gray-600">admin</p>
              </div>
            </div>
          </div>

     

          <ul className="space-y-2 py-5  text-gray-100">
          <p className="mx-5 text-xs font-semibold text-gray-400 font-CardH capitalize ">GENERAL </p>
            {/* <li> 
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li> */}
            {GeneralArr.map((e) => {
              // console.log('e',e )
              const { name, img } = e;
              return (
                <>
                  <li>
                    <a
                      href="#"
                    
                      className={`   flex items-center  p-2 text-base font-normal text-[#637381] text-ellipsis rounded-lg dark:text-white hoverg-gray-100 hover:text-green-900 dark:hover:bg-gray-700`}
                      onMouseOver={(elmt)=>{
                        // elmt.currentTarget.classList.remove("text-[#637381]")
                        // elmt.currentTarget.classList.add("   elmt.currentTarget.classList.remove("text-[#637381]")
                        // elmt.currentTarget.classList.add("activeClass")
                      }}
                      onMouseLeave={(elmt)=>{
                        // elmt.currentTarget.classList.remove("activeClass")
                        
                    
                      }}
                    >
                      
                      {/* 
             <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg> */}
                      <figure className="flex-shrink-0 p-3    text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900  font-CardH">
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
                
              >
                {/* <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg> */}
                {/* <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span> */}
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
