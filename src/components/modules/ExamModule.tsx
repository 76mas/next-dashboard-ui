"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface exam 
{ 
    id: number; 
    subject: string;
    class: string;
    teacher: string;
    date: string; 
}


interface FormModalProps {
  open: boolean;
  onClose: () => void;
  exam: exam | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, exam }) => {
  
  const [data, setData] = useState<exam>({
    id: 0,
    subject: "",
    class: "",
    date: "",
    teacher: "",
 
  });

  useEffect(() => {
    if (exam) {
      setData(exam);
    }
  }, [exam]);


  if (!open || !exam) return null;

  return (
     <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Exam</p>
        <p className={styles.message}>Edit the info of Exam.</p>

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
          <span>Sbject</span>
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
            value={data.date}
            onChange={(event)=>{setData({...data , date:event.target.value})}}
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
