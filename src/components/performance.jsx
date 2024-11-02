"use client"
import Link from "next/link";
import { PieChart, ResponsiveContainer, Pie } from "recharts";

const data = [
    { name: "People", value: 92, fill: "#C3EBFA" },
    { name: "Persons", value: 8, fill: "#FAE27C" },
];

export default function Performance() {
    return (
        <div className="bg-white shadow-sm p-4 rounded-md ">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg text-gray-600 my-3">Performance</h1>
                <Link href="#" className="text-lg text-gray-600">...</Link>
            </div>
            <div className="h-64 relative"> 
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            startAngle={180}
                            endAngle={0}
                            data={data}
                            dataKey="value"
                            cy="50%"
                            cx="50%"
                            innerRadius={60}
                        />
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1 className="text-3xl font-bold">9.2</h1>
                    <p className="text-xs tex-gray-300">of 10 max LTS</p>
                </div>
                <div className="absolute bottom-16 left-0 right-0 m-auto tex-center">1st semester - 2nd semester </div>
            </div>
        </div>
    );
}
