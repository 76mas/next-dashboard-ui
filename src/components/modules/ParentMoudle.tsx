"use client";
import { FC, useState ,useEffect} from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css"; 

interface Parent {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  students: string[];
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  parent: Parent | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, parent }) => {
  
  const [data, setData] = useState<Parent>({
    id: 0,
    name: "",
    email: "",
    phone: "",
    address: "",
    students: [],
  });

  useEffect(() => {
    if (parent) {
      setData(parent);
    }
  }, [parent]);


  if (!open || !parent) return null;

  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Parent</p>
        <p className={styles.message}>Edit the info of Parent.</p>

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


   

       {data.students.map((item, index) => (
        <label key={index}>
          <input
            value={item}
            className={styles.input}
            type="text"
            onChange={(event) => {
              const updatedStudents = [...data.students];
              updatedStudents[index] = event.target.value;
              setData({ ...data, students: updatedStudents });
            }}
            placeholder=""
          />
          <span>Child {index+1}</span>
        </label>
      ))}


        <label>
          <input
            value={data.email}
            className={styles.input}
            onChange={(event)=>{setData({...data , email:event.target.value})}}
            type="email"
            placeholder=""
      
          />
          <span>Email</span>
        </label>

        <label>
          <input
            value={data.phone}
            className={styles.input}
            onChange={(event)=>{setData({...data , phone:event.target.value})}}
            type="text"
            placeholder=""
           
          />
          <span>Phone Number</span>
        </label>

        <label>
          <input
            value={data.address}
            onChange={(event)=>{setData({...data , address:event.target.value})}}
            className={styles.input}
            type="text"
            placeholder=""
           
          />
          <span>Address</span>
        </label>

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
