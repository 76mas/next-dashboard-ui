"use client"
import {calendarEvents} from "@/lib/data"
import { useState } from "react"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "@/app/calendar.css"
const localizer = momentLocalizer(moment)

const  BigCalendar = () => {



    
    const [view,setView]=useState<View>(Views.WORK_WEEK);


    const handlechangeview=(selectedView:View)=>{
        setView(selectedView);
    }

    return(
        <div className=" h-[100%]  p-2 text-white text-center">
            <Calendar
            className="p-2"
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week","day"]}
            view={view}
            onView={handlechangeview}
            style={{height:"50%",width:"100%" }}
            min={new Date(2025,0,0,8,0,0,0)}
            max={new Date(2025,0,0,17,0,0,0)}
            
            />
        </div>
  )
}


export default BigCalendar;