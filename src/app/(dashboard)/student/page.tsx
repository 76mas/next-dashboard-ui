
import EventCalendar from "@/components/EventCalendar"

import BigCalendar from "@/components/BigCalendar"


export default function StudentPage(){

    return(<div  className="p-4 flex gap-4 flex-col xl:flex-row"> 


                         {/* left side */}
                    <div className="flex flex-col w-full lg:w-2/3 ">
                       
                       
                                <h1 className="pl-4 flex text-white ">Mahmoud Abbas (A)</h1>
                            <BigCalendar />
                    
                    </div>
            
            
            
            
            
            
            
                            {/* Right side */}
                    <div className="flex w-full lg:w-1/3  flex-col gap-8 ">
                    
                
                    <EventCalendar />
                    
                    </div>
            
            
        
        
        </div>)


}



