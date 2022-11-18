import React from 'react'

 const Table = ({ProductName, Color , Category , status}) => {
  return (
    <div>

<div class="overflow-x-auto relative text-base shadow-md sm:rounded-lg">
    <table class="w-full text-lg text-left text-gray-500 dark:text-gray-400">
        <thead class=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-lg">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Product name
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
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                    Sliver
                </td>
                <td class="py-4 px-6">
                    Laptop
                </td>
                <td class="py-4 ">
                <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-2/5 rounded-xl px-5'>

In Progress
</h1>
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
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
                       <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-2/5 rounded-xl px-5'>

                       In Progress
                       </h1>
                    {/* </div> */}
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
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
                <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-2/5 rounded-xl px-5'>

In Progress
</h1>
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
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
                <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-2/5 rounded-xl px-5'>

In Progress
</h1>
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
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
                <h1 className='  font-semibold  text-[#B76E79] bg-yellow-100 text-sm w-2/5 rounded-xl px-5'>

In Progress
</h1>
                </td>
                <td class="py-4 px-6">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>



</div>




  )
}


export default Table;