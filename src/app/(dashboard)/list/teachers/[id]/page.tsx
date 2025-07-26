"use client"

import { useParams } from "next/navigation"
import { FaUserCheck } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import CountChart from "@/components/CountChart";
import { MdPlayLesson } from "react-icons/md";
import { useEffect } from "react";
import { FcDepartment } from "react-icons/fc";
import { MdClass } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import BigCalendar from "@/components/BigCalendar"
import Events from "@/components/Events"
import { teachersData } from "@/lib/data"


export default function TeacherPage(){



    


    const { id }=useParams();

    const teacherarry=teachersData.filter((item)=>{
            if(Number(item.teacherId )=== Number(id) ){
                return item
            }
            else
                return;
      
    })

const teacher=teacherarry[0];


console.log(teacher)
    return(<div  className="p-4 flex gap-4  flex-col xl:flex-row"> 


                         {/* left side */}
        <div className="flex h-[100%] flex-col w-full lg:w-2/3 ">
                       

            <div className="flex mb-7 items-center justify-center  ml-10 gap-5">   

            <div className="flex flex-col  sm:flex-row w-full rounded-3xl p-4 h-auto sm:h-48 bg-[#4ee75b] gap-3 items-center sm:items-start">

                        
            <div className="w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden">
                <img src={teacher.photo} className="w-full h-full object-cover" alt="Teacher Photo" />
            </div>
                            
            <div className="flex flex-col gap-2 w-full sm:w-[180px] md:w-auto text-center sm:text-left">

                <div>
                    <h1 className="font-bold text-[22px] sm:text-[30px]">{teacher.name}</h1>
                    <p className="text-[13px]">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>

                            
                <div className="flex flex-col gap-4 mt-2 sm:mt-0">

                    <div className="flex flex-row justify-center sm:justify-start items-center gap-3">
                        <FaMapLocationDot /> {teacher.address}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                        <div className="flex justify-center sm:justify-start items-center gap-3">
                            <MdEmail /> {teacher.email}
                        </div>
                        <div className="flex justify-center sm:justify-start items-center gap-3">
                            <FaPhoneAlt /> +{teacher.phone}
                        </div>
                    </div>

                </div>

            </div>

            </div>

            <div className="flex flex-col md:flex-row  lg:flex-row w-full rounded-3xl ml-2 gap-3 items-center lg:items-start">

            {/* العمود الأول */}
            <div className="flex flex-col lg:flex-col gap-3 w-full lg:w-auto justify-center items-center">
                
                <div className="flex flex-col bg-[#00000076] p-5 rounded-3xl justify-center items-center w-[120px]">
                    <h1 className="text-white text-sm flex gap-2 justify-center items-center"> <FaUserCheck /> Attendance</h1>
                    <h2 className="text-white text-lg font-bold">90%</h2>
                </div>

                <div className="flex flex-col bg-[#00000076] p-5 rounded-3xl justify-center items-center w-[120px]">
                    <h1 className="text-white text-sm flex gap-2 justify-center items-center"> <FcDepartment /> branch</h1>
                    <h2 className="text-white text-lg font-bold">3</h2>
                </div>
            </div>

            {/* العمود الثاني */}
            <div className="flex flex-col lg:flex-col gap-3 w-full lg:w-auto justify-center items-center">
                <div className="flex flex-col bg-[#00000076] p-5 rounded-3xl justify-center items-center w-[120px]">
                    <h1 className="text-white text-sm flex gap-2 justify-center items-center"> <MdClass /> class</h1>
                    <h2 className="text-white text-lg font-bold">3</h2>
                </div>

                <div className="flex flex-col bg-[#00000076] p-5 rounded-3xl justify-center items-center w-[120px]">
                    <h1 className="text-white text-sm flex gap-2 justify-center items-center"> <MdPlayLesson /> Lesson</h1>
                    <h2 className="text-white text-lg font-bold">8</h2>
                </div>
            </div>

            </div>

    
        </div>  

                        
                            <BigCalendar />
                    
                    </div>
            
            
            
            
            
            
            
                            {/* Right side */}
                    <div className="flex w-full lg:w-1/3  flex-col gap-8 ">
                    
                            <div className=" bg-[#ffffff06] flex flex-col gap-4 w-full backdrop-blur-2xl border shadow-white   border-[#ffffff6e] py-5 pl-2 pr-1 rounded-xl">
                              <h1 className="text-white">Shortcuts</h1>

                                <div className="flex w-full gap-2 flex-wrap">

                                    <div className="flex w-32 h-7  transition-all delay-[250ms] hover:-translate-y-[1px]  cursor-pointer rounded-full justify-center text-[10px] items-center backdrop-blur-2xl border-solid border border-[#ffffff6e] bg-[#29ff0d24] text-white">Teachers Lesson</div>
                                   
                                    <div className="flex w-32 h-7 transition-all delay-[250ms] hover:-translate-y-[1px]  cursor-pointer rounded-full justify-center text-[10px] items-center backdrop-blur-2xl border-solid border border-[#ffffff6e] bg-[#00ffc327] text-white">Teachers classes</div>
                                   
                                    <div className="flex w-32 h-7 transition-all delay-[250ms] hover:-translate-y-[1px]   cursor-pointer rounded-full justify-center text-[10px] items-center backdrop-blur-2xl border-solid border border-[#ffffff6e] bg-[#29ff0d24] text-white">Teachers Exams</div>
                                   
                                    <div className="flex w-32 h-7 transition-all delay-[250ms] hover:-translate-y-[1px]  cursor-pointer rounded-full justify-center text-[10px] items-center backdrop-blur-2xl border-solid border border-[#ffffff6e] bg-[#00ffc327] text-white">Teachers students</div>
                                   
                                    <div className="flex w-32 h-7  transition-all delay-[250ms] hover:-translate-y-[1px]  cursor-pointer rounded-full justify-center text-[10px] items-center backdrop-blur-2xl border-solid border border-[#ffffff6e] bg-[#29ff0d1f] text-white">Teachers Assignments</div>
                                                                

                                </div>

                            
                            </div>
                

                          
                          <CountChart />
                            
                        
                


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
            
            
        
        
        </div>)


}



