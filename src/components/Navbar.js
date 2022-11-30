import React, { useEffect, useRef } from "react";

const Navbar = ({}) => {
  const reference = useRef(null);
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (90 > currentScrollPos) {
      reference.current.classList.add("py-4");
    } else {
      reference.current.classList.remove("py-4");
    }
  };

  const sidebar= useRef(null)
useEffect(()=>{
  localStorage.setItem("sidebar_State", "hidden")    
                
},[])


  return (
    <>
      <div
        ref={reference}
        className="  transition-all bgover text-gray-600 body-font backdrop-blur-sm fixed lg:w-5/6 md:w-screen   sm:w-[105vw] w-[111vw] z-50 bg-blend-lighten hover:bg-blend-darken bg-transparent NavOver "
      >
        <div className="md:container px-5 py-8 mx-auto flex items-center sm:flex-row animSide  sm:justify-between  justify-between ">
          {/* hamburger menu icon */}
       <div>
     
          <label className=" btn-circle swap swap-rotate lg:hidden md:flex">
              <input type="checkbox"  onClick={()=>{
                
                 
                const sidebar_state=   localStorage.getItem("sidebar_State");
                  console.log(sidebar_state) 
                if (sidebar_state=="flex"){
                    localStorage.setItem("sidebar_State", "hidden")     
                  }
                  if (sidebar_state=="hidden")
                  {
                    localStorage.setItem("sidebar_State", "flex")     
                  }





                }}/>

              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
             
       </div>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-5 items-center ">
            


            <a className="ml-3 text-gray-500">
              <figure>
                <img
                  src="https://minimals.cc/assets/icons/flags/ic_flag_en.svg"
                  alt="flag"
                />
              </figure>
            </a>

            <a className="ml-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                />
              </svg>
            </a>
            <a href="">
              <figure>
                <img
                  width={30}
                  src={require("../avatar.png")}
                  alt=""
                  className="rounded-2xl"
                />
              </figure>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
