"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface subject {
    id: number;
    name: string;
    teachers: string[];
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  subject: subject | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, subject }) => {
  
  const [data, setData] = useState<subject>({
    id: 0,
    name: "",
    teachers: [],
  });

  useEffect(() => {
    if (subject) {
      setData(subject);
    }
  }, [subject]);


  if (!open || !subject) return null;

  return (
     <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Sujects</p>
        <p className={styles.message}>Edit the info of Subjects.</p>

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

       {data.teachers.map((item, index) => (
  <label key={index}>
    <input
      value={item}
      className={styles.input}
      type="text"
      onChange={(event) => {
        const updatedStudents = [...data.teachers];
        updatedStudents[index] = event.target.value;
        setData({ ...data, teachers: updatedStudents });
      }}
      placeholder=""
    />
    <span>Teacher {index+1}</span>
  </label>
))}

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
