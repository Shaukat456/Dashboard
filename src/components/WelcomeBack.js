import React from 'react'
import Navbar from './Navbar'

const WelcomeBack = () => {
  return (
    <div className='my-2'>
      {/* <div className='pb-52'> */}

      {/* <Navbar/> */}
      {/* </div> */}
      <section class="text-gray-600 body-font bg-[#ccf2e1] rounded-3xl shadow-lg  font-CardH ">
  <div class="container mx-auto flex p-10 md:flex-row flex-col items-center">
    <div class="lg:flex-grow flex flex-col md:items-start md:text-left lg:flex  mb-10 md:mb-0 items-center text-center ">
      <h1 class="title-font lg:text-2xl    sm:text-xl  text-lg font-bold text-gray-600 font-CardH md:text-4xl">Welcome Back! 
        {/* <br class="hidden lg:inline-block"readymade gluten   /> */}
      </h1>
      <h1 class=" font-CardH   title-font   mb-4  text-gray-600  lg:text-2xl    sm:text-xl  text-lg font-bold">Minimal UI
        {/* <br class="hidden lg:inline-block"readymade gluten   /> */}
      </h1>
      <p class="font-CardH mb-8 leading-relaxed text-gray-500 my-5 lg:text-base    sm:text-sm  text-xs">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-baseC border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded-xl md:text-sm  font-bold  ">Go Now</button>
        
      </div>
    </div>
    <div class="z-0  lg:w-6/6 md:w-1/2 w-5/6 flex -space-x-8 justify-end ">
        <figure>
          <img src={require("../image.png")} alt=""  className=' lg:w-10/12 mx-16'/>
        </figure>
        
      {/* <img className="z-50 object-cover object-center rounded w-1/12 " alt="hero" src="https://minimals.cc/assets/illustrations/characters/character_3.png" style={{zIndex:'50'}} /> */}
    </div>
  </div>
</section>
    </div>
  )
}

export default WelcomeBack
