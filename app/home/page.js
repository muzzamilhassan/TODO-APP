"use client";
import { collection, addDoc } from "firebase/firestore"; 
import { useState } from "react";
import {db} from '@/config/firebase'
 const Data = () => {
    const [text,setText]=useState('')
    const [email,setEmail]=useState('')
    const [course,setCourse]=useState('')
    const submithandler= async()=>{
  
        let student={
            text,
            email,
            course
        }
        try {
            const muzzi = await addDoc(collection(db,'abc'),student);
            console.log("Document written with ID:",muzzi.id);

          } catch (e) {
            console.error("Error adding document: ", e);
          }
      }
      // try {
      //   const docRef = await addDoc(collection(db, "users"), {
      //     text,
      //     email,
      //     course
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    

  return (
    <div>
      <input type="text" name="text" id="text" onChange={(e)=>setText(e.target.value)}/>
      <input type="email" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type="text" name="course" id="course" onChange={(e)=>setCourse(e.target.value)}/>
      <button onClick={submithandler}>submit</button>
    </div>
  );
  }
export default Data;