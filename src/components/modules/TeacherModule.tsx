"use client";
import { FC, useState, useEffect } from "react";
import { MdCloseFullscreen } from "react-icons/md";

import styles from "@/app/editform.module.css";

interface teachers {
  id: number;
  teacherId: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  teachers: teachers | null;
}

const FormModal: FC<FormModalProps> = ({ open, onClose, teachers }) => {
  const [data, setData] = useState<teachers>({
    id: 0,
    teacherId: "",
    name: "",
    email: "",
    photo: "",
    phone: "",
    subjects: [],
    classes: [],
    address: "",
  });

  useEffect(() => {
    if (teachers) {
      setData(teachers);
    }
  }, [teachers]);

  if (!open || !teachers) return null;

  return (
    <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center
    data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  bg-black/30 backdrop-blur-md
    ">
      <div className={`${styles.form} w-[400px] z-50 relative`}>
        <p className={styles.title}>Edit Teacher</p>
        <p className={styles.message}>Edit the teacher information.</p>

        <button
          className="absolute top-5 right-5 font-bold text-xl"
          onClick={onClose}
        >
          <MdCloseFullscreen />
        </button>

        {/* Teacher ID */}
        <label>
          <input
            value={data.teacherId}
            className={styles.input}
            type="text"
            onChange={(e) =>
              setData({ ...data, teacherId: e.target.value })
            }
          />
          <span>Teacher ID</span>
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

        {/* Subjects */}
        <label>
          <input
            value={data.subjects.join(", ")}
            className={styles.input}
            type="text"
            onChange={(e) =>
              setData({ ...data, subjects: e.target.value.split(",").map(s => s.trim()) })
            }
          />
          <span>Subjects</span>
        </label>

        {/* Classes */}
        <label>
          <input
            value={data.classes.join(", ")}
            className={styles.input}
            type="text"
            onChange={(e) =>
              setData({ ...data, classes: e.target.value.split(",").map(c => c.trim()) })
            }
          />
          <span>Classes</span>
        </label>

        <button className={styles.submit}>Done</button>
      </div>
    </div>
  );
};

export default FormModal;
