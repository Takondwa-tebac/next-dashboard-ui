"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



import Link from 'next/link';

const data = [
    {
      name: 'Mon',
      present: 10,
      absent: 60,
    },
    {
        name: 'Tue',
        present: 0,
        absent: 60,
    },
    {
        name: 'Wed',
        present: 40,
        absent: 20,
    },
    
    {
        name: 'Thu',
        present: 60,
        absent: 0,
    },
    {
        name: 'Fri',
        present: 50,
        absent: 30,
      },
];


export default function AttendanceChart() {
    return (
        <div className="flex flex-col p-2 items-center bg-white shadow-sm gap-3 w-full h-full">
        {/* title */}
        <div className="flex justify-between items-center w-full">
            <h1 className="text-md font-semibold">Attendance</h1>
            <Link href="#">
                <img src="/moreDark.png" alt="more info" className="w-3 h-2" />
            </Link>
        </div>

        {/* chart */}
        <div className="relative w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart  
                    width={500}  
                    height={300} 
                    data={data}  
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
               
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="present" fill="#C3EBFA" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="absent" fill="#FAE27C" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
           
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
    )
}