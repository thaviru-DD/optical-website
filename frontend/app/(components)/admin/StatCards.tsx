import React from 'react'
import { ChartColumnStacked, EyeDashed, ShoppingBasket, SquareStack } from 'lucide-react'


const StatCard =[
    {title: 'Total Products', value:120, icon: <ShoppingBasket/>, status: '+12% from lastmonth', iconColor: 'text-green-700', iconBgColor: 'bg-green-100', statusColor: 'text-green-700' },
    {title: 'Total Categories', value:120, icon: <ChartColumnStacked />, status: '+2 products lastmonth', iconColor: 'text-blue-700', iconBgColor: 'bg-blue-100', statusColor: 'text-blue-700' },
    {title: 'Total Appoinments', value:120, icon: <EyeDashed />, status: '+12% from lastmonth', iconColor: 'text-red-700', iconBgColor: 'bg-red-100', statusColor: 'text-red-700' },
    {title: 'Total Visits', value:120, icon: <SquareStack />, status: '+12% from lastmonth', iconColor: 'text-green-700', iconBgColor: 'bg-green-100', statusColor: 'text-green-700' },
]

function StatCards() {
  return (


    <div className="flex flex-col md:flex-row gap-4 items-center">
        {StatCard.map((card, index)=> (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/4 mb-4 md:mb-0">
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-black/50">{card.title}</h1>
                    <div className={`${card.iconBgColor} ${card.iconColor} p-2 rounded-lg `}>{card.icon}</div>
                </div>

                <div className="mt-5 flex justify-between items-center  md:flex-col md:items-start">
                    <h2 className="text-3xl font-bold">{card.value}</h2>
                    <p className={`text-sm ${card.statusColor}`}>{card.status}</p>
                </div>
                
            </div>
        ))}
    </div>
  )
}

export default StatCards