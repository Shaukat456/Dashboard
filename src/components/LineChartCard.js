import React from 'react'
import { LineChart } from './LineChart'

export const LineChartCard = () => {
  return (
    <div className='rounded-2xl flex flex-col  w-3/5 p-10 bg-gray-100   '>
            <div className="flex mx-5  space-y-6">
            <h1>Area installed</h1>

            </div>
        <LineChart/>

    </div>
  )
}
