"use client";
import { FC, useState, useEffect } from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css";

interface student{
    id: number;
    studentId: string;
    name: string;
    email: string;
    photo: string;
    phone: string;
    grade: number;
    class: string;
    address: string;
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  student: student | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, student }) => {
  const [data, setData] = useState<student>({
    id: 0,
    grade:0,
    studentId: "",
    name: "",
    email: "",
    photo: "",
    phone: "",
    class: "",
    address: "",
  });

  useEffect(() => {
    if (student) {
      setData(student);
    }
  }, [student]);

  if (!open || !student) return null;

  return (
   <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Student</p>
        <p className={styles.message}>Edit the Student information.</p>

        <button
          className="absolute top-5 right-5 font-bold text-xl"
          onClick={onClose}
        >
          <MdCloseFullscreen />
        </button>

        {/* Teacher ID */}
        <label>
          <input
            value={data.studentId}
            className={styles.input}
            type="text"
            onChange={(e) =>
              setData({ ...data, studentId: e.target.value })
            }
          />
          <span>Student ID</span>
        </label>

        {/* Name */}
        <label>
          <input
            value={data.name}
            className={styles.input}
            type="text"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <span>Name</span>
        </label>

        {/* Email */}
        <label>
          <input
            value={data.email}
            className={styles.input}
            type="email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <span>Email</span>
        </label>

        {/* Phone */}
        <label>
          <input
            value={data.phone}
            className={styles.input}
            type="text"
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <span>Phone</span>
        </label>

        {/* Address */}
        <label>
          <input
            value={data.address}
            className={styles.input}
            type="text"
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
          <span>Address</span>
        </label>

    
       
  
   <label>
          <input
            value={data.class}
            className={styles.input}
            type="text"
            onChange={(e) => setData({ ...data, class: e.target.value })}
          />
          <span>Class</span>
        </label>

       {/* Photo URL */}
        <label>
          <input
            value={data.photo}
            className={styles.input}
            type="text"
            onChange={(e) => setData({ ...data, photo: e.target.value })}
          />
          <span>Photo URL</span>
        </label>


        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
