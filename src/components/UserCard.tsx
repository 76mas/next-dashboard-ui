import Image from "next/image"
import { MdOutlineMoreHoriz } from "react-icons/md";

export default function UserCard({type} : {type:string}){

return(

<div className="flex-1 rounded-2xl odd:bg-[#49dcbc] even:bg-[#3ee97d]  p-4 min-w-[130px] ">

    <div className="flex justify-between items-center ">
        <span className="justify-center text-[10px] bg-white p-[3px] rounded-full text-green-600">2025/7</span>
        <MdOutlineMoreHoriz  style={{color:"#fff" ,fontSize:"30px"}} />
    </div>
     <div className="flex flex-col gap-2 mt-1 " >

        <h1 >1,282</h1>

        <h2 className="text-white text-shadow-lg">{type}</h2>

     </div>

</div>)




} 










