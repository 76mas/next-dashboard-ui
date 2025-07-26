
"use client"
import ListNAv from "@/components/ListNav"
import Image from "next/image"
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import FormModal from "@/components/modules/EventModule";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { eventsData, role } from "@/lib/data"
import AlertComponent from "@/components/modules/DeleteModule";
import FormInputs from "@/components/form/Form";

interface event {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
}



const EventsListPage=()=>{

  const [openModal, setOpenModal] = useState(false);
    const [selectedParent, setSelectedParent] = useState<event | null>(null);
  
    const handleEdit = (event: event) => {
      setSelectedParent(event);
      setOpenModal(true);
    }

const deleteTeacherById = (id: number) => {

    return;
    // const updated = teachers.filter((t) => t.id !== id);
    // setTeachers(updated);
    // مستقبلاً تقدر تسوي API call هنا
    // await axios.delete(`/api/teachers/${id}`)
  };

const [add,setadd]=useState(false);

    return(
    <div className="p-4 rounded-md flex-1 m-4 mt-0">
    
    <FormModal open={openModal} onClose={() => setOpenModal(false)} event={selectedParent} />

        {/* top */}

        <div className="">
        <h1 className="text-white mb-3 ml-10 text-[25px]">All Event</h1>
          <ListNAv setadd={setadd}/>
        
        
              {add &&(<FormInputs setadd={setadd}/>)}
        <div className="">
 <div className="mt-4 text-white">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead  className="text-left">Title</TableHead>
              <TableHead  className="text-left">Class</TableHead>
               
            <TableHead  className="text-left">Start Time</TableHead>
            <TableHead  className="text-left">End Time</TableHead>
              <TableHead  className="text-left">Date</TableHead>
            <TableHead className="text-center">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {eventsData.map((item) => (
            <TableRow key={item.id}>

              <TableCell>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium ml-0">{item.title}</div>

                  </div>
                </div>
              </TableCell>
              <TableCell><div className="ml-2">{item.class}</div></TableCell> 
              <TableCell><div className="ml-3">{item.startTime}</div></TableCell> 
              <TableCell> <div className="ml-3">{item.endTime}</div></TableCell>
              <TableCell><div className="ml-0">{item.date}</div></TableCell>
            
          
                
              <TableCell className="text-right   flex justify-center items-center gap-2 mt-1">
                
            {role ==="admin" ?<>   <FiEdit 
                                      onClick={() =>{
                                        handleEdit(item)
                                      }} 
                                      className="text-[#40e423] block bg-white w-7  cursor-pointer h-7 p-1 rounded-full" />
                  
                                   <AlertComponent
                                      item={item}
                                      onDelete={() => deleteTeacherById(item.id)}
                                      displayName={item.title}
                                    />
                                  </> :<></>}
                
                
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-muted-foreground flex text-[20px] justify-center items-center mt-4 text-center gap-2 text-sm">
       
         <div className="border border-solid rounded-sm cursor-not-allowed text-[16px] border-gray-700 h-8 flex justify-center  items-center  w-10">Prev</div>

          <div className="rounded-sm text-[16px] text-black  h-8 flex justify-center cursor-not-allowed  border-gray-700  items-center bg-[#3ee97d] w-8">1</div>
          <div className="border rounded-sm  border-solid text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-8">2</div>
          ...
          <div className="border  rounded-sm  border-solid text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-8">10</div>
          <div className="border border-solid rounded-sm  text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-10">Next</div>



      </div>
    </div>
        </div>
        </div>

{/* list  */}


<div className=""></div>
{/* pagination */}
<div className=""></div>




    </div>)



}



export default  EventsListPage;



