"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface clas {
  id: number;
  name: string;
  capacity: number | string;
  grade: number | string;
  supervisor: string;
}


interface FormModalProps {
  open: boolean;
  onClose: () => void;
  clas: clas | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, clas }) => {
  
  const [data, setData] = useState<clas>({
    id: 0,
    name: "",
    capacity:0,
    grade: 0,
    supervisor: "",
 
  });

  useEffect(() => {
    if (clas) {
      setData(clas);
    }
  }, [clas]);


  if (!open || !clas) return null;

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
            value={data.name}
            className={styles.input}
            type="text"
            onChange={(event)=>{setData({...data , name:event.target.value})}}
            placeholder=""
          />
          <span>Name</span>
        </label>




        <label>
          <input
            value={data.capacity}
            className={styles.input} 
            type="number"

            onChange={(event) => {
                const value = event.target.value;
                setData({  ...data,capacity: value === "" ? "" : Number(value)});
                }}

            placeholder=""
          />
          <span>Capacity</span>
        </label>

        <label>
          <input
            value={data.supervisor}
            className={styles.input}
            onChange={(event)=>{setData({...data , supervisor:event.target.value})}}
            type="text"
            placeholder=""
           
          />
          <span>Supervisor</span>
        </label>

        <label>
          <input   
            className={styles.input}
            value={data.grade}

            onChange={(event) => {
            const value = event.target.value;
            setData({...data,grade: value === "" ? "" : Number(value),}); 
            }}

            type="number"
            placeholder=""
          />
          <span>Grade</span>
        </label>

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
