"use client"

import * as React from "react"
import  Events  from "./Events"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"











export default function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )
  const [month, setMonth] = React.useState<Date | undefined>(new Date())






  return (

    <div className="flex flex-col w-full gap-2">

      
    <Card  className=" bg-[#ffffff06] w-full backdrop-blur-2xl border shadow-white shadow-inner  border-[#ffffff6e] p-4 rounded-xl">
   
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white ">Appointment</CardTitle>
          <CardDescription>Find a date</CardDescription>
        </div>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            setMonth(new Date())
            setDate(new Date())
          }}
          className="bg-[#ffffff09] text-[#fff]  "
        >
          Today
        </Button>
      </CardHeader>

      
      <CardContent>
          <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={setDate}
          className="bg-transparent w-full text-white p-0"

   
        />

      </CardContent>
    </Card>


    <div className=" bg-[#ffffff06] flex flex-col gap-1 w-full backdrop-blur-2xl border shadow-white   border-[#ffffff6e] p-4 rounded-xl">
   
      <h1 className="text-white">Events</h1>
        <div className="text-white top-2 bg-[#ffffff6e] cursor-pointer text-sm p-1 rounded-md right-3 absolute z-30">view all</div>
        {Events}
     </div>
     


    <div className=" bg-[#ffffff06] flex flex-col gap-1 w-full backdrop-blur-2xl border shadow-white   border-[#ffffff6e] p-4 rounded-xl">
   
      <h1 className="text-white">Announcements</h1>
      <div className="text-white top-2 bg-[#ffffff6e] cursor-pointer text-sm p-1 rounded-md right-3 absolute z-30">view all</div>
        
        {Events}
     </div>


      </div>
  )
}



// 'use client'
// import 'react-calendar/dist/Calendar.css';
// import { useState } from 'react';
// import Calendar from 'react-calendar';

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

// const EventCalendar=()=> {
//   const [value, onChange] = useState<Value>(new Date());

//   return (
//     <div className='w-full flex justify-center items-center rounded-xl  bg-white'>
//       <Calendar  onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default EventCalendar;