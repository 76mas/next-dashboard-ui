"use client"

import { CiCircleRemove } from "react-icons/ci";

import { usePathname } from "next/navigation";




export default function FormInputs ({ setadd }: { setadd: React.Dispatch<React.SetStateAction<boolean>> }){

  const pathname=usePathname();

  const listpage:string=pathname.split("/").pop() as string;


  function Input({typeinput, plsceHolder}:{typeinput:string,plsceHolder:string}){
    return(<>
          <input placeholder={plsceHolder} className="bg-[#3f3f3f] text-[#fff] border-0 rounded-md p-2 mb-4 focus:bg-[#4ee97d5f] focus:outline-none focus:ring-1 focus:ring-[#4ee97d] transition ease-in-out duration-150" type={typeinput} />
    </>)
  }

    return(
      
  <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-black/30 backdrop-blur-md
    ">
    <div className="w-full relative max-w-md bg-[#1a1a1a]  border-solid border-[1px] border-[#87878767] rounded-3xl shadow-md p-6">
    
    <CiCircleRemove className="absolute cursor-pointer top-5 right-5 text-[40px] text-white" 
    onClick={()=>{
      setadd(false);
    }}
    
    />
      <h2 className="text-2xl font-bold  text-[#4ee97d] mb-4">Add New {listpage}</h2>

      <div className="flex flex-col">

    {listpage==="teachers" &&
    (<><Input plsceHolder="Full Name" typeinput="text" /> 
        <Input plsceHolder="userName" typeinput="text" /> 
        <Input plsceHolder="Email" typeinput="email" /> 
        <Input plsceHolder="Password" typeinput="password" /> 
        <Input plsceHolder="Phone Number" typeinput="text" /> 
        <Input plsceHolder="Address" typeinput="text" /> 
        <Input plsceHolder="Subjects (comma separated)" typeinput="text" /> 
        <Input plsceHolder="Classes (comma separated)" typeinput="text" /> 
        <input placeholder="Resume" className="bg-[#3f3f3f] text-[#fff] border-0 rounded-md p-2 mb-4 focus:bg-[#4ee97d5f] focus:outline-none focus:ring-1 focus:ring-[#4ee97d] transition ease-in-out duration-150" type="file" />
        </> 
        )}

        {listpage === "students" && (
        <>
          <Input plsceHolder="Full Name" typeinput="text" />
           <Input plsceHolder="userName" typeinput="text" /> 
          <Input plsceHolder="Email" typeinput="email" />
          <Input plsceHolder="Password" typeinput="password" />
          <Input plsceHolder="Phone Number" typeinput="text" />
          <Input plsceHolder="Address" typeinput="text" />
          <Input plsceHolder="Grade (Number)" typeinput="number" />
          <Input plsceHolder="Class" typeinput="text" />
          <input placeholder="Resume" className="bg-[#3f3f3f] text-[#fff] border-0 rounded-md p-2 mb-4 focus:bg-[#4ee97d5f] focus:outline-none focus:ring-1 focus:ring-[#4ee97d] transition ease-in-out duration-150" type="file" />
        </>
      )}

      {listpage === "parents" && (
      <>
        <Input plsceHolder="Full Name" typeinput="text" />
        <Input plsceHolder="userName" typeinput="text" /> 
        <Input plsceHolder="Email" typeinput="email" />
        <Input plsceHolder="Password" typeinput="password" />
        <Input plsceHolder="Phone Number" typeinput="text" />
        <Input plsceHolder="Address" typeinput="text" />
        <Input plsceHolder="Children userNames (comma separated)" typeinput="text" />
      </>
    )}

    {listpage === "subjects" && (
  <>
    <Input plsceHolder="Subject Name" typeinput="text" />
    <Input plsceHolder="Teacher userNames (comma separated)" typeinput="text" />
  </>
)}


{listpage === "classes" && (
  <>
    <Input plsceHolder="Class Name (e.g. 1A)" typeinput="text" />
    <Input plsceHolder="Capacity" typeinput="number" />
    <Input plsceHolder="Grade" typeinput="number" />
    <Input plsceHolder="Supervisor userName" typeinput="text" />
  </>
)}

{listpage === "lessons" && (
  <>
    <Input plsceHolder="Subject Name" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Teacher userName" typeinput="text" />
  </>
)}


{listpage === "exams" && (
  <>
    <Input plsceHolder="Subject Name" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Teacher userName" typeinput="text" />
    <Input plsceHolder="Exam Date" typeinput="date" />
  </>
)}

{listpage === "assignments" && (
  <>
    <Input plsceHolder="Subject Name" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Teacher userName" typeinput="text" />
    <Input plsceHolder="Due Date" typeinput="date" />
  </>
)}

{listpage === "results" && (
  <>
    <Input plsceHolder="Subject Name" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Teacher userName" typeinput="text" />
    <Input plsceHolder="Student userName" typeinput="text" />
    <Input plsceHolder="Date" typeinput="date" />
    <Input plsceHolder="Result Type (exam / assignment)" typeinput="text" />
    <Input plsceHolder="Score" typeinput="number" />
  </>
)}

{listpage === "events" && (
  <>
    <Input plsceHolder="Event Title" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Date" typeinput="date" />
    <Input plsceHolder="Start Time" typeinput="time" />
    <Input plsceHolder="End Time" typeinput="time" />
  </>
)}


{listpage === "announcements" && (
  <>
    <Input plsceHolder="Announcement Title" typeinput="text" />
    <Input plsceHolder="Class Name" typeinput="text" />
    <Input plsceHolder="Date" typeinput="date" />
  </>
)}




        <button className="bg-[#3fba7e]  text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-[#4ee79d] hover:to-[#2b855a] transition ease-in-out duration-150" type="submit">
          Apply</button>
      </div>


    </div>
  </div>
  )



  }



