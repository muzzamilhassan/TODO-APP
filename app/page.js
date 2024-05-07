"use client"
// import Rest from "./Components/apis/page";
// import { Data } from "./home/page";
// import { collection, getDocs, where, query,doc,deleteDoc, updateDoc } from "firebase/firestore";
// import { db } from "@/config/firebase";
// import { useState } from "react";



// export default function Home() {

//   const [student,setStudent]=useState()
// const usefetchdata = async () => {
//   try {
//     // const imp = query(collection(db,"abc"), where("email", "==" ,"muzzamilhassan302@gmail.com")) //condition
//     const querySnapshot = await getDocs(collection(db, "abc"));
//     // const querySnapshot = await getDocs(imp); //condition
//     const studentdata = [];
//     querySnapshot.forEach((doc) => {
//       studentdata.push(
//         {
//           id:doc.id, // for delete opeartion
//           ...doc.data()
//         }
//         )
//     });
//     console.log(studentdata);
//     setStudent(studentdata)
//   } catch (error) {
//     console.log(error);
//   }
// };
  


// //DELeTE OPEARTION
//       // const deleteData = async(id)=>{
//       //   // const docRef = doc(db,"abc",id)
//       //   //   await deleteDoc(docRef)// delete data from firebase 
//       //    await deleteDoc(doc(db, 'abc' ,id))
//       //     const newstudent = student.filter((student)=>id !== student.id)
//       //     setStudent(newstudent)
        
//       // }
//       // const onDeletHandler = async (id)=>{
//       //   await deleteDoc(doc(db, "abc", id));
    
//       //  try {
//       //   // await deleteDoc(docRef)
        
         
//       //   const newStudents = student.filter((student)=>id !== student.id)
//       //   setStudent(newStudents)
         
//       //  } catch (error) {
//       //   alert("error")
//       //  }
//       // }
//     //   const onDeleteHandler = async (id) => {
//     //     try {
//     //         // Delete the document from Firestore
//     //         await deleteDoc(doc(db, "abc", id));
            
//     //         // Filter out the deleted student from the state
//     //         const newStudents = student.filter((student) => id !== student.id);
//     //         setStudent(newStudents);
            
//     //         // Optionally, you can also provide feedback to the user that the deletion was successful
//     //         // alert("Document deleted successfully");
//     //     } catch (error) {
//     //         // Handle any errors that occur during the deletion process
//     //         console.error("Error deleting document: ", error);
//     //         // alert("An error occurred while deleting the document");
//     //     }
//     // }
//     const updatedata =()=>{

//     }
//   return (
//     <div>
//       {/* <Rest/> */}
//       {/* <Data/> */}
//       { student?.map((e)=>{
//           return(
//             <div style={{
//               display:"flex",
//               gap:'20px'
//             }}>
//               <h5>name:{e.text}</h5>
//               <h5>email:{e.email}</h5>
//               <h5>course:{e.course}</h5>
//               {/* <button onClick={()=>onDeletHandler(student.id)}>delete</button> */}
//               <button onClick={updatedata}>update</button>
//             </div>
//           )
//         })
//       }
//       <button onClick={usefetchdata}>hello</button>
//     </div>
//   );
// }
"use client"
import { useState, useEffect } from "react"
import { getDocs, collection, query, where, deleteDoc, doc, updateDoc} from "firebase/firestore"
import { db } from "@/config/firebase"

export default function Home() {

  const [students, setStudents] = useState([])

  // const [id, setId] = useState("")

  // const [loading, setLoading] = useState(false)

  const fetchDocs = async ()=> {
    try {
      const collectionName = collection(db, "abc")
      // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
      const docs = await getDocs(collectionName)
      const studentsData = []
      docs.forEach((doc)=>{
        studentsData.push({
          id:doc.id,
          ...doc.data()
        })
      })
      setStudents(studentsData)
      console.log("students",studentsData)

    } catch (error) {
      console.log("error",error);
    }
  


  }
  useEffect(() => {
   fetchDocs()
  }, [])

  const onDeletHandler = async (id)=>{
    const docRef = doc(db,"abc", id )

   try {
    // setId(id)
    // setLoading(true)
    
    await deleteDoc(docRef)
    
     
    const newStudents = students.filter((student)=>id !== student.id)
    setLoading(false)
    setStudents(newStudents)
     
   } catch (error) {
    alert("error")
   }
  }

  const onUpdateHandler = async (id)=>{
    try {
      const docRef = doc(db,"abc", id)
      // setId(id)
      // setLoading(true)
      await updateDoc(docRef, {
        email:"muzzamilhassan@gmail.com"
      })
      fetchDocs()
      setLoading(false)


    } catch (error) {
      
    }
  }


  
  return (
    <div>

      <h1>List of students</h1>

      <table>
        <tr>
          <td>id</td>
          <td>Student Name</td>
          <td>Student email</td>
          <td>Student course</td>
          <td>Student delete</td>
          <td>Student update</td>
        </tr>
         {
          students.map((student)=>{
            return (
              <tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td><button onClick={()=>onDeletHandler(student.id)}>delete</button></td>
                {/* { student.id == id && loading ? "loading...":"delete"} */}
                <td><button onClick={()=>onUpdateHandler(student.id)}>update</button></td>

              </tr>
            )
          })
         }
      </table>

    </div>
  )
}
