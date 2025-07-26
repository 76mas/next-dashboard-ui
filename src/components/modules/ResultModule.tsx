"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface result 
{ 
   id: number;
    subject: string;
    class: string;
    teacher: string;
    student: string;
    date: string;
    type: string;
    score: number | string;
}


interface FormModalProps {
  open: boolean;
  onClose: () => void;
  result: result | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, result }) => {
  
  const [data, setData] = useState<result>({
    id: 0,
    subject: "",
    class: "",
    date: "",
    teacher: "",
    student:"",
    type:"",
    score:0,
 
  });

  useEffect(() => {
    if (result) {
      setData(result);
    }
  }, [result]);


  if (!open || !result) return null;

  return (
  <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-[747474747447474] relative`}>
        <p className={styles.title}>Edit Result</p>
        <p className={styles.message}>Edit the info of Result.</p>

        <button
          className="absolute top-5 right-5 font-bold text-xl"
          onClick={onClose}
        >
          <MdCloseFullscreen />
        </button>

        <label>
          <input
            value={data.subject}
            className={styles.input}
            type="text"
            onChange={(event)=>{setData({...data , subject:event.target.value})}}
            placeholder=""
          />
          <span>Subject</span>
        </label>




        <label>
          <input
            value={data.class}
            className={styles.input}
            onChange={(event)=>{setData({...data , class:event.target.value})}}
            type="text"
            placeholder=""
      
          />
          <span>Class</span>
        </label>

        <label>
            <input
                value={data.student}
                className={styles.input}
                onChange={(event)=>{setData({...data , student:event.target.value})}}
                type="text"
                placeholder=""
            
            />
            <span>student</span>
        </label>

        <label>
          <input
            value={data.teacher}
            className={styles.input}
            onChange={(event)=>{setData({...data , teacher:event.target.value})}}
            type="text"
            placeholder=""
           
          />
          <span>Teacher</span>
        </label>

     <label>
          <input
            value={data.score}
            className={styles.input}
            onChange={(event)=>{
            const value=event.target.value;
            setData({...data , score: value===""?"":Number(value)})}}
            type="number"
            placeholder=""
           
          />
          <span>score</span>
        </label>



 

        <label>
          <input
            value={data.date}
            onChange={(event)=>{


              
                
                setData({...data , date:event.target.value})
            }}
            className={styles.input}
            type="text"
            placeholder=""
           
          />
          <span>Date</span>
        </label>

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
