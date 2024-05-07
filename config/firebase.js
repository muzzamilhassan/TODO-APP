
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//   apiKey: process.env.APIKEY,

const firebaseConfig = {
  apiKey: "AIzaSyAoInOvtU_317iV3jCnfyCg2cOpfB9NhDc",
  authDomain: "nextjsproject-e4957.firebaseapp.com",
  projectId: "nextjsproject-e4957",
  storageBucket: "nextjsproject-e4957.appspot.com",
  messagingSenderId: "24870873989",
  appId: "1:24870873989:web:6ee903108c590dd0e772ec",
  measurementId: "G-V1D8X4P6J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);