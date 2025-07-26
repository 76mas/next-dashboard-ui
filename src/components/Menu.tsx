import Link from "next/link";
import Image from "next/image";
import { role } from "@/lib/data";
import { CiHome } from "react-icons/ci";
import { FaChalkboardTeacher, FaUsers, FaUserGraduate, FaUserFriends } from "react-icons/fa";
import { MdSubject, MdClass } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { BsFileEarmarkTextFill, BsClipboardCheckFill } from "react-icons/bs";
import { PiExamBold } from "react-icons/pi";
import { MdOutlineEventNote, MdOutlineMessage } from "react-icons/md";
import { IoIosMegaphone } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        j: CiHome,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: FaChalkboardTeacher,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        j: FaUserGraduate,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        j: FaUserFriends,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        j: MdSubject,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        j: MdClass,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        j: GiBlackBook,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        j: PiExamBold,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: BsFileEarmarkTextFill,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: BsClipboardCheckFill,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: FaUsers,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: MdOutlineEventNote,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: MdOutlineMessage,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: IoIosMegaphone,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },

  {
    title: "OTHER",
    items: [
      {
        j: CgProfile,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: IoSettingsSharp,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        j: RiLogoutBoxRFill,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];






export default function Menu(){

const mynavbar=menuItems.map(i=>{
return(
<>
  <div className="flex flex-col gap-2" key={i.title}>
    <span className= "hidden lg:block  text-gray-400 font-light my-4">{i.title}</span>





      {i.items.map(item=>{
        return(<>

        {item.visible.includes(role)?  <Link href={item.href} className="flex gap-2 hover:bg-[#3ee97de4]  text-white hover:text-black justify-center px-1 rounded-sm items-center lg:justify-start  py-2">
              {/* <Image width={32} height={32} src={item.icon} alt=""  /> */}
                {item.j? <item.j color="#fff" size={32} /> : <></> }
              <span className= "hidden lg:block ">{item.label}</span>
            </Link>:<></>}
          
          </>)
      })}




      
  </div>
</>

) 



})

  return(
  <div className="mt-4 text-sm">

    {mynavbar}




  </div> 
  
)
}