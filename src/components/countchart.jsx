"use client";

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

export default function CountChart() {
    return (
        <div className="flex flex-col p-2 items-center bg-white shadow-sm gap-3 w-full h-full">
            {/* title */}
            <div className="flex justify-between items-center w-full">
                <h1 className="text-md font-semibold">Students</h1>
                <Link href="#">
                    <img src="/moreDark.png" alt="more info" className="w-3 h-2" />
                </Link>
            </div>

            {/* chart */}
            <div className="relative w-full h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                        <RadialBar background dataKey="count" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex justify-center items-center">
                    <img src="/maleFemale.png" alt="boy and girl" className="w-8 h-8" />
                </div>
            </div>

            {/* bottom */}
            <div className="flex justify-between gap-2 w-full">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5" style={{ backgroundColor: '#C3EBFA' }}></div>
                    <h1 className="font-bold">234</h1>
                    <div className="text-xs text-gray-300">Boys (35%)</div>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="w-5 h-5" style={{ backgroundColor: '#FAE27C' }}></div>
                    <h1 className="font-bold">1,234</h1>
                    <div className="text-xs text-gray-300">Girls (65%)</div>
                </div>
            </div>
        </div>
    );
}
