"use client"
import { useState } from "react"
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar(){
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className="w-full">
             <Calendar onChange={onChange} value={value} />
        </div>
    )
}