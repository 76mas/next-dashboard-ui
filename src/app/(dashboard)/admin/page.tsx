import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";




export default function AdminPage(){

    return(
    
    <div className="p-4 flex flex-col md:flex-row">
                
                {/* left side */}
        <div className="flex flex-col w-full lg:w-2/3 ">
            {/* Cards */}
                <div className="flex items-center  p-2 w-full flex-wrap justify-center gap-4">
                        <UserCard type="Student"/>
                        <UserCard type="Teacher"/>  
                        <UserCard type="Parent"/>
                        <UserCard type="Staff"/>
                </div>

                {/* chart */}
                   <div className="flex gap-4 flex-col  p-4">

            <div className="flex gap-4 flex-col lg:flex-row p-4">
                {/* COUNT CHART */}
                    <div className=" lg:w-1/2 h-[450px]">
                        <CountChart />
                    </div>

                    <div className="w-full h-[450px] ">
                        <AttendanceChart />
                    </div> 
                 </div>

            <div className="w-full h-[500px]">
                                    <FinanceChart />
            </div>
                
            </div>

                    
        
        </div>







                {/* Right side */}
        <div className="flex w-full lg:w-1/3  flex-col gap-8 ">
        
    
        <EventCalendar />
        
        </div>






    </div>)


}



