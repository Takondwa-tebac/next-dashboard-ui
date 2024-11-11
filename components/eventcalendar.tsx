"use client"
import { useState } from "react"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Link from "next/link";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface event{
    title: String,
    time: String,
    description: String,
} 

const events : event[]= [
    {
        title: "Sports Day",
        time: "12:00 PM - 4:30 PM",
        description:"sports Events coming up"
    },
    {
        title: "Break Time",
        time: "12:00 PM - 1:30 PM",
        description:"students will have to go for lunch, it's time"
    },
    {
        title: "Swimming Lessons",
        time: "12:00 PM - 4:30 PM",
        description:"Swimming Lessons for students"
    },

]

export default function EventCalendar(){
    const [value, onChange] = useState<Value>(new Date());
    return (
        <>
        <div className="w-full bg-white shadow-sm">
             <Calendar onChange={onChange} value={value} />
        </div>

        <div className="flex flex-col my-4 gap-4">
            <div className="flex justify-between">
                <h1 className="text-lg text-gray-600">Events</h1>
                <Link href="#" className="text-gray-600 ">Refresh</Link>
            </div>
            {
                events.map((event,index)=> (
                    <div className="shadow-sm bg-white px-4 even:border-t-[#C3EBFA] border-t-4 border-gray-100 rounded-lg odd:border-t-purple-200" key={index}>
                        <div className="flex justify-between items-center my-2">
                            <h1 className="font-bold tex-lg">{event.title}</h1>
                            <span className="text-xs text-gray-600 capitalize">{event.time}</span>
                        </div>

                        <div className="text-gray-600 my-3 text-xs">
                            {event.description}
                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}