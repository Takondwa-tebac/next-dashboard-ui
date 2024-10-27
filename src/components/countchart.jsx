"use client"

import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const data = [
    {
      name: 'Boys',
      count: 35,
      fill: '#C3EBFA',
    },
    {
      name: 'Girls',
      count: 65,
      fill: '#FAE27C',
    },
    {
        name: 'Total',
        count: 106,
        fill: 'white',
      },
  ];


const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
  };

export default function CountChart(){
    return(
        <div className="flex flex-col p-2 items-center bg-white shadow-sm gap-3">
            {/* title */}
            <div className="flex justify-between items-center">
                <h1 className="text-md font-semibold">Students</h1>
                <Link href="#">
                   <img src="/moreDark.png" alt="more info" className="w-3 h-2" />
                </Link>
            </div>


            {/* chart */}
            <div className="relative w-full h-[75%]">
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                        background
                        dataKey="count"
                    />
                    {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle"  /> */}
                    </RadialBarChart>
                </ResponsiveContainer>

                <div className="absolute" top-0 right-0 inset-0>
                    <img src="/maleFemale.png" alt="boy and girl" className="w-8 h-8" />
                </div>
            </div>

            {/* bottom   */}
            <div className="flex justify-between gap-16">
                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-green-200 rounded-full"></div>
                    <h1 className="fotn-bold">234</h1>
                    <div className="text-xs text-gray-300">Boys (35%)</div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="w-5 h-5 bg-yellow-200 rounded-full"></div>
                    <h1 className="font-bold">1,234</h1>
                    <div className="text-xs text-gray-300">Girls (65%)</div>
                </div>
            </div>
        </div>
    )
}



