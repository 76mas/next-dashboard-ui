import BigCalendar from "@/components/BigCalendar"
import Events from "@/components/Events"


export default function ParentPage(){

    return(<div  className="p-4 flex gap-4 flex-col xl:flex-row"> 


                         {/* left side */}
                    <div className="flex h-[100%] flex-col w-full lg:w-2/3 ">
                       
                       
                            <h1 className="pl-4 flex text-white ">Mahmoud Abbas(A)</h1>
                            <BigCalendar />
                    
                    </div>
            
            
            
            
            
            
            
                            {/* Right side */}
                    <div className="flex w-full lg:w-1/3  flex-col gap-8 ">
                    
                
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



