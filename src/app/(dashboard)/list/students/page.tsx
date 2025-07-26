
"use client"
import ListNAv from "@/components/ListNav"
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { studentsData } from "@/lib/data";
import Image from "next/image"
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

import { role } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AlertComponent from "@/components/modules/DeleteModule";
import FormModal from "@/components/modules/StudentsModule";
import FormInputs from "@/components/form/Form";

interface student{
    id: number;
    studentId: string;
    name: string;
    email: string;
    photo: string;
    phone: string;
    grade: number;
    class: string;
    address: string;
}





const StudentListPage=()=>{
  

  const [openModal, setOpenModal] = useState(false);
    const [selectedParent, setSelectedParent] = useState<student | null>(null);
  
    const handleEdit = (student: student) => {
      setSelectedParent(student);
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

 <FormModal open={openModal} onClose={() => setOpenModal(false)} student={selectedParent} />
        {/* top */}

        <div className="">
        <h1 className="text-white mb-3 ml-10 text-[25px]">All Students</h1>
            <ListNAv setadd={setadd}/>
        
        
              {add &&(<FormInputs setadd={setadd}/>)}
        <div className="">
 <div className="mt-4 text-white">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            {/* <TableHead>subjects</TableHead> */}
           <TableHead className="text-center">phone</TableHead>
             <TableHead className="text-center">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {studentsData.map((item) => (
            <TableRow key={item.id}>

              <TableCell>
                <div className="flex items-center gap-3">
                 <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <img
                    src={item.photo}
                    width={"100%"}
                    height={"100%"}
                    alt={item.name}
                  />
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <span className=" mt-0.5 text-[#bababa] text-xs">{item.class}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.address}</TableCell>
              
              <TableCell className="text-center">{item.phone}</TableCell>
              
              <TableCell className="text-right   flex justify-center items-center gap-2 mt-1">
                
                <Link href={`/list/students/${item.studentId}`}> <FaEye  className="text-[#40e423] block bg-white w-7 cursor-pointer h-7 p-1 rounded-full"/></Link>
                

                {role ==="admin" ?<>   <FiEdit 
                    onClick={() =>{
                      handleEdit(item)
                    }} 
                    className="text-[#40e423] block bg-white w-7  cursor-pointer h-7 p-1 rounded-full" />

                 <AlertComponent
                    item={item}
                    onDelete={() => deleteTeacherById(item.id)}
                    displayName={item.name}
                  />
                </> :<></>}
              
                
                </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="text-muted-foreground flex text-[20px] justify-center items-center mt-4 text-center gap-2 text-sm">
       
         
         <div className="border border-solid rounded-sm cursor-not-allowed text-[16px] border-gray-700 h-8 flex justify-center  items-center  w-10">Prev</div>
          <div className="rounded-sm text-[16px] text-black  h-8 flex justify-center cursor-pointer items-center bg-[#3ee97d] w-8">1</div>
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



export default StudentListPage;



