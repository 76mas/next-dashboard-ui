
"use client"
import ListNAv from "@/components/ListNav"
import { role, studentsData } from "@/lib/data";
import { parentsData } from "@/lib/data";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import FormModal from "@/components/modules/ParentMoudle";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AlertComponent from "@/components/modules/DeleteModule";
import FormInputs from "@/components/form/Form";


interface Parent {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  students: string[];
}




const ParentListPage=()=>{

  const [show ,setshow]=useState(false)
  const [openModal, setOpenModal] = useState(false);
  const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

  const handleEdit = (parent: Parent) => {
    setSelectedParent(parent);
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
    return(<>
    <div className="p-4 rounded-md flex-1 justify-center items-center m-4 mt-0 overflow-hidden">
    <FormModal open={openModal} onClose={() => setOpenModal(false)} parent={selectedParent} />

        {/* top */}

        <div className="">
        <h1 className="text-white mb-3 ml-10 text-[25px]">All Parent</h1>
           <ListNAv setadd={setadd}/>
               
               
        {add &&(<FormInputs setadd={setadd}/>)}
        <div className="">
          <div className="mt-4 text-white">
  
      <Table>
         
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>students name</TableHead>
            <TableHead>Location</TableHead>
            {/* <TableHead>subjects</TableHead> */}
           <TableHead className="text-center">phone</TableHead>
             <TableHead className="text-center">action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parentsData.map((item) => (
            <TableRow key={item.id}>

              <TableCell>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <span className=" mt-0.5 text-[#bababa] text-xs">{item.email}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>{item.students.map(st=>{return(<><div>{st}</div></>)})}</TableCell>
              <TableCell>{item.address}</TableCell>
              
              <TableCell className="text-center">{item.phone}</TableCell>
              
              <TableCell className="text-right   flex justify-center items-center gap-2 mt-1">
                
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



{/* {show ? ( <FormModal open={openModal} onClose={() => setOpenModal(false)} parent={selectedParent} />
):<></>}
   */}

    </div>
 
  
    </>)



}



export default ParentListPage;



// "use client"

// import ListNAv from "@/components/ListNav"
// import { parentsData } from "@/lib/data";
// import { FiEdit } from "react-icons/fi";
// import { MdDeleteForever } from "react-icons/md";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import FormModal from "@/components/Moudle"; // هذا هو المودال
// import { useState } from "react";

// interface Parent {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   students: string[];
// }

// const ParentListPage = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedParent, setSelectedParent] = useState<Parent | null>(null);

//   const handleEdit = (parent: Parent) => {
//     setSelectedParent(parent);
//     setOpenModal(true);
//   }

//   return (
//     <div className="p-4 rounded-md flex m-4 relative mt-0">
//       <h1 className="text-white mb-3 ml-10 text-[25px]">All Teachers</h1>
//       <ListNAv />

//       <div className="mt-4 text-white">
//         <Table>
//           <TableHeader>
//             <TableRow className="hover:bg-transparent">
//               <TableHead>Name</TableHead>
//               <TableHead>students name</TableHead>
//               <TableHead>Location</TableHead>
//               <TableHead className="text-center">phone</TableHead>
//               <TableHead className="text-center">action</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {parentsData.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>
//                   <div className="flex items-center gap-3">
//                     <div>
//                       <div className="font-medium">{item.name}</div>
//                       <span className="mt-0.5 text-[#bababa] text-xs">{item.email}</span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell>{item.students.map((st, i) => <div key={i}>{st}</div>)}</TableCell>
//                 <TableCell>{item.address}</TableCell>
//                 <TableCell className="text-center">{item.phone}</TableCell>
//                 <TableCell className="text-right flex justify-center items-center gap-2 mt-1">
               
                    // <FiEdit onClick={() => handleEdit(item)} className="text-[#40e423] block bg-white w-7  cursor-pointer h-7 p-1 rounded-full" />
//                     <MdDeleteForever  className="text-red-600 block bg-white w-7 h-7 p-1 cursor-pointer rounded-full"/>

               
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//   <div className="text-muted-foreground flex text-[20px] justify-center items-center mt-4 text-center gap-2 text-sm">
       
         
//          <div className="border border-solid rounded-sm cursor-not-allowed text-[16px] border-gray-700 h-8 flex justify-center  items-center  w-10">Prev</div>
//           <div className="rounded-sm text-[16px] text-black  h-8 flex justify-center cursor-pointer items-center bg-[#3ee97d] w-8">1</div>
//           <div className="border rounded-sm  border-solid text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-8">2</div>
//           ...
//           <div className="border  rounded-sm  border-solid text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-8">10</div>
//           <div className="border border-solid rounded-sm  text-[16px] border-white h-8 flex justify-center cursor-pointer items-center  w-10">Next</div>



//       </div>
//         <FormModal open={openModal} onClose={() => setOpenModal(false)} parent={selectedParent} />
//       </div>
//     </div>
//   )
// }

// export default ParentListPage;



