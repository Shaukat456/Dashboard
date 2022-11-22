import React from 'react'

 const Card2 = () => {
  return (
    <div>
<div id='cardbg' className='flex bg-green-900 text-white w-2/5 p-6  space-x-9 rounded-2xl' >
<div className="radial-progress text-xl  text-green-500" style={{"--value":48 , "--thickness": "4px"}}>
    <h1 className='text-white text-base font-semibold font-CardH'>48%</h1>
</div>

 <div className="flex-col p-2">
    <h1 className='text-4xl font-semibold font-CardH'>38,566</h1>
    <p className='text-gray-300'> Conversion</p>
 </div>

{/* <figure className='relative r-5'>
    <img src={require("../avatar.png")} alt="" />
</figure> */}

</div>



    </div>
  )
}


export default Card2;