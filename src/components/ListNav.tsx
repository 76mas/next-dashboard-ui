"use client"

import { useId, useState } from "react"
import {  Contact, PlusIcon, SearchIcon } from "lucide-react"
import { IoFilterSharp } from "react-icons/io5";


import { MdOutlineSettings } from "react-icons/md";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { role } from "@/lib/data";

export default function ListNAv ({ setadd }: { setadd: React.Dispatch<React.SetStateAction<boolean>> })  {
  const id = useId()
  const [checked, setChecked] = useState<boolean>(true)
  const [params, setParams] = useState<string>("")


  return (
    <header className="border border-[#ffffff5d] rounded-2xl  backdrop-blur-xl  bg-[#ffffff0d]  px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="relative flex-1">
          <Input
            id={`input-${id}`}
            className="peer h-8 w-full max-w-xs ps-8 pe-2"
            placeholder="Search..."
            type="search"
          />
          <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
            <SearchIcon size={16} />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Test mode */}
     
          <div className="flex items-center gap-2">
         
       
        
            
             <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground size-8 rounded-full shadow-none"
              aria-label="Open layout menu"
            >
              <IoFilterSharp size={16} aria-hidden="true" />
            </Button>

                <Button
              size="icon"
              variant="ghost"
              className="text-muted-foreground size-8 rounded-full shadow-none"
              aria-label="Open layout menu"
            >
              <MdOutlineSettings size={16} aria-hidden="true" />
            </Button>


          </div>
          {/* Add button */}

          {role==="admin" && (   <Button
            className="size-8 bg-white  hover:bg-[#efeeee] rounded-full"
            size="icon"
            aria-label="Add new item"
            onClick={()=>{
            setadd(true);
            }}
          >
            <PlusIcon size={16} className="text-black" aria-hidden="true" />
          </Button>)}
       
        </div>
      </div>
    </header>
  )
}
