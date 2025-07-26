"use client"

import { role } from "@/lib/data"
import { useRouter } from"next/navigation";
import { useEffect } from "react";

const Homepage = () => {

const router=useRouter();
  useEffect(()=>{

if(role==="admin"){   
   router.push("/admin")
  }

  else if(role==="student"){   
   router.push("/student")
  }


    else if(role==="parent"){   
   router.push("/parent")
  }

    else if(role==="teacher"){   
   router.push("/teacher")
  }



  },[])


 
  return (
    <div className=''>Homepage
    
  
    
    </div>
  )
}

export default Homepage