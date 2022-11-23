import React from 'react'

 const Card3 = () => {
  return (
    <div>
<div id='cardbg' className='flex bg-blue-500 my-4 text-white w-2/5 p-6  space-x-9 rounded-2xl' >
<div className="radial-progress text-xl  text-green-800" style={{"--value":75 , "--thickness": "4px"}}>
    <h1 className='text-white text-base font-semibold font-CardH'>75%</h1>
</div>

 <div className="flex-col p-2">
    <h1 className='text-4xl font-semibold font-CardH'> 55,566</h1>
    <p className='text-gray-300'> Applications</p>
 </div>

{/* <figure className='relative r-5'>
    <img src={require("../avatar.png")} alt="" />
</figure> */}

</div>


    </div>
  )
}


export default Card3;