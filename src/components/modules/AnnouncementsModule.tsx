"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface announcementsData {
    id: number;
    title: string;
    class: string;
    date: string;
}


interface FormModalProps {
  open: boolean;
  onClose: () => void;
  announcementsData: announcementsData | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, announcementsData }) => {
  
  const [data, setData] = useState<announcementsData>({
    id: 0,
    title: "",
    class:"",
    date: "",
 
  });

  useEffect(() => {
    if (announcementsData) {
      setData(announcementsData);
    }
  }, [announcementsData]);


  if (!open || !announcementsData) return null;

  return (
   <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Class</p>
        <p className={styles.message}>Edit the info of Class.</p>

        <button
          className="absolute top-5 right-5 font-bold text-xl"
          onClick={onClose}
        >
          <MdCloseFullscreen />
        </button>

        <label>
          <input
            value={data.class}
            className={styles.input}
            type="text"
            onChange={(event)=>{setData({...data , class:event.target.value})}}
            placeholder=""
          />
          <span>Class</span>
        </label>




        <label>
          <input
            value={data.date}
            className={styles.input} 
            type="text"

            onChange={(event) => {
                setData({  ...data, date:event.target.value});
                }}

            placeholder=""
          />
          <span>Date</span>
        </label>

        <label>
          <input
            value={data.title}
            className={styles.input}
            onChange={(event)=>{setData({...data , title:event.target.value})}}
            type="text"
            placeholder=""
           
          />
          <span>Supervisor</span>
        </label>

     

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
