import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<div className="min-h-screen flex relative">

{/* left */}
 <div className="p-4 w-[14%] md:w-[8%] lg:w-[14%] bg-black left-side"  >
    

    <Link className="flex justify-center items-center lg:justify-start  gap-2" href="/">
        <div className="rounded-full overflow-hidden w-10  h-10">
          <img src="/MYLOGO.png"  alt="logo" style={{width:"100%" ,height:"100%"}} />
        </div>
     <span className="hidden text-white lg:block">MASchoole</span>
    </Link>
    
    
    <Menu/>
    
    </div>

 {/* Right */}
 <div className="w-[86%] md:w-[92%] lg:w-[86%] right-side "> 


   <Navbar />

{children}

 </div>


</div>


  );
}
