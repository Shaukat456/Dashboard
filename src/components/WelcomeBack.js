import React from 'react'

const WelcomeBack = () => {
  return (
    <div className='rounded-3xl'>
      <section class="text-gray-600 body-font bg-[#ccf2e1]  ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2   lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left lg:flex  mb-16 md:mb-0 items-center text-center ">
      <h1 className="title-font lg:text-7xl    sm:text-4xl  text-2xl font-bold text-gray-600 font-CardH md:text-4xl">Welcome Back! 
        {/* <br class="hidden lg:inline-block"readymade gluten   /> */}
      </h1>
      <h1 className=" font-CardH   title-font   mb-4  text-gray-600  text-2xl lg:text-7xl  md:text-4xl   sm:text-4xl font-bold">Minimal UI
        {/* <br class="hidden lg:inline-block"readymade gluten   /> */}
      </h1>
      <p className="mb-8 leading-relaxed text-gray-500 my-5 lg:text-3xl">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-base border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded-xl md:text-lg  font-bold  ">Go Now</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex ">
        {/* <svg></svg> */}
      <img className="object-cover object-center rounded" alt="hero" src="https://minimals.cc/assets/illustrations/characters/character_3.png"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default WelcomeBack
