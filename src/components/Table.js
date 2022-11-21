import React from 'react'
import { FaEllipsisV } from "react-icons/fa";

 const Table = ({ProductName, Color , Category , status}) => {
  return (
    <div>

<div class="overflow-x-auto relative text-base shadow-md sm:rounded-lg">
    <h1 className='p-5 lg:text-3xl md:text-2xl font-semibold'>NEW INVOICE</h1>
    <table class="w-full text-lg text-left  dark:text-gray-400 ">
        <thead class="  text-gray-500 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400 lg:text-lg md:text-sm  text-xs  " >
            <tr>
                <th scope="col" class="py-3 px-6">
                Invoice ID
                </th>
                <th scope="col" class="py-3 px-6">
                    Color
                </th>
                <th scope="col" class="py-3 px-6">
                    Category
                </th>
                <th scope="col" class="py-3 px-6">
                    Status
                </th>
                <th scope="col" class="py-3 px-6">
                    
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 md:text-sm  text-xs">
                <th scope="row" class="md:text-sm  text-xs py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 ">
                <h1 className='  font-semibold  text-red-800 bg-red-200  sm:w-fit  rounded-xl px-5   min-w-fit max-w-fit md:text-sm  text-xs'>

Out of Date
</h1>
                </td>
                <td class="py-4 px-6">
                    <button>
                        {/* <FaDotCircle/> */}
                    <FaEllipsisV/>
                    </button>
                </td>
            </tr>
            <tr class="md:text-sm  text-xs  bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    White
                </td>
                <td class="py-4 px-6">
                    Laptop PC
                </td>
                <td class="py-4  ">
                    
                    {/* <div class="flex text-orange-600 items-center w-4/12 rounded-md  text-sm bg-yellow-400 mr-2"> */}
                        {/* <div class="h-2.5 w-1/5  bg-orange-400 mr-2">
                           
                           

                            </div> */}
                       <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-fit rounded-xl px-5 md:text-sm  text-xs'>

                       In Progress
                       </h1>
                    {/* </div> */}
                </td>
                <td class="py-4 px-6">
                <button>
                        {/* <FaDotCircle/> */}
                    <FaEllipsisV/>
                    </button>
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">  </a> */}
                </td>
            </tr>
            <tr class="bg-white border-b md:text-sm  text-xs dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Accessories
                </td>
                <td class="py-4 ">
                <h1 className='  font-semibold  text-red-800 bg-red-200  w-fit  rounded-xl px-5 md:text-sm   text-xs'>

Out of Date
</h1>
                </td>
                <td class="py-4 px-6">
                <button>
                        {/* <FaDotCircle/> */}
                    <FaEllipsisV/>
                    </button>
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                </td>
            </tr>
            <tr class="md:text-sm  text-xs  bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="py-4 px-6">
                    Gray
                </td>
                <td class="py-4 px-6">
                    Phone
                </td>
                <td class="py-4 ">
                <h1 className=' md:text-sm  text-xs font-semibold  text-[#B76E79] bg-yellow-100  w-fit rounded-xl px-5'>

In Progress
</h1>
                </td>
                <td class="py-4 px-6 ">
                <button>
                        {/* <FaDotCircle/> */}
                    <FaEllipsisV/>
                    </button>
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> */}
                </td>
            </tr>
            <tr className='md:text-sm  text-xs'>
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="py-4 px-6">
                    Red
                </td>
                <td class="py-4 px-6">
                    Wearables
                </td>
                <td class="py-4 ">
                <h1 className=' md:text-sm  text-xs font-semibold  text-blue-500 bg-blue-200  w-fit rounded-xl px-5'>

Paid
</h1>
                </td>
                <td class="py-4 px-6">
                    {/* <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> */}
                    <button>
                        {/* <FaDotCircle/> */}
                    <FaEllipsisV/>
                    </button>
                    {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical"  className='text-black bg-black' /> */}
                    {/* </a> */}
                </td>
            </tr>
        </tbody>
    </table>
</div>



</div>




  )
}


export default Table;