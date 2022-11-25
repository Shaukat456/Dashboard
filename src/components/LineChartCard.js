import React from 'react'
import { LineChart } from './LineChart'

export const LineChartCard = () => {
  return (
    <div className='rounded-2xl flex flex-col  lg:w-full  w-min p-10 bg-white  shadow-xl  '>
            <div className="flex mx-5  flex-col">
            <h1 className='font-bold font-CardH'>Area installed</h1>

            <h3 className='text-gray-500 text-start'>(+43%) than last year</h3>


            </div>
        <LineChart/>

    </div>
  )
}
