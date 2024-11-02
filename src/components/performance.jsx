"use client"
import Link from "next/link";
import { PieChart,ResponsiveContainer,Pie } from "recharts";

const data = [
    {name: "People", value:92 , fill: "#C3EBFA"},
    {name: "Persons",value:8, fill: "#FAE27C"},
];

export default function Performance(){
    return (

        <div className="bg-white shadow-sm p-4 rounded-md ">
           <div className="flex justify-between">
           <h1 className="font-bold text-lg text-gray-600 my-3">Performance</h1>
           <Link href="#" className="text-lg text-gray-600">...</Link>
           </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={300}>
                        <Pie
                            data={data}  
                            dataKey={"value"}
                            cy={"50%"}
                            cx={"50%"}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={0}
                        />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}