import React from 'react'

const Slider = () => {
  return (
    <div>
      
      <div className="carousel w-auto h-full bg-yellow-400 blur-sm bg-opacity-5  ">
  <div id="item1" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
  </div>
  sdasdasdasd
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">.</a> 
  <a href="#item2" className="btn btn-xs">.</a> 
  <a href="#item3" className="btn btn-xs">.</a> 
  <a href="#item4" className="btn btn-xs">.</a>
</div>
    </div>
  )
}

export default Slider
