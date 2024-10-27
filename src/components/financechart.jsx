"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Link from 'next/link';

const data = [
    {
      name: 'Jan',
      income: 140000,
      expense: 60000,
      amt: 2210
    },
    {
      name: 'Feb',
      income: 140000,
      expense: 60000,
      amt: 2210,
    },
    {
      name: 'Mar',
      income: 140000,
      expense: 60000,
      amt: 2290,
    },
    {
      name: 'Apr',
      income: 140000,
      expense: 60000,
      amt: 2000,
    },
    {
      name: 'May',
      income: 140000,
      expense: 60000,
      amt: 2181,
    },
    {
      name: 'Jun',
      income: 140000,
      expense: 60000,
      amt: 2500,
    },
    {
      name: 'Jul',
      income: 140000,
      expense: 60000,
      amt: 2100,
    },
    {
        name: 'Jul',
        income: 140000,
        expense: 60000,
        amt: 2100,
      },
      {
        name: 'Aug',
        income: 140000,
        expense: 60000,
        amt: 2100,
      },
      {
        name: 'Sept',
        income: 140000,
        expense: 60000,
        amt: 2100,
      },
      {
        name: 'Oct',
        income: 140000,
        expense: 60000,
        amt: 2100,
      },
      {
        name: 'Nov',
        income: 140000,
        expense: 60000,
        amt: 2100,
      },
      {
      name: 'Dec',
      income: 140000,
      expense: 60000,
      amt: 2100,
    },
  ];

export default  function FinanceChart(){
    return (
        <div className="flex flex-col p-2 items-center bg-white shadow-sm gap-3 w-full h-full">
        {/* title */}
        <div className="flex justify-between items-center w-full">
            <h1 className="text-md font-semibold">Finance</h1>
            <Link href="#">
                <img src="/moreDark.png" alt="more info" className="w-3 h-2" />
            </Link>
        </div>

          {/* top */}
          <div className="flex my-4 flex-row gap-2 w-full hidden">
            <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#C3EBFA' }}></div>
                <h1 className="text-sm text-gray-600">Present</h1>
            </div>

            <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#FAE27C' }}></div>
                <h1 className="text-sm text-gray-600">Absent</h1>
            </div>
        </div>

        {/* chart */}
        <div className="relative w-full h-[200px]">
            <ResponsiveContainer width="100%" height="90%">
                        <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="income" stroke="#C3EBFA" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="expense" stroke="#FAE27C" />
                        </LineChart>
            </ResponsiveContainer>
        </div>

      
    </div>
    )
}