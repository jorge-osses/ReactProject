// import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyALcY4bwP9ZK5WfbDdyPAWrOBF9VFHM0OE",
  authDomain: "eccomerce-ecotomito.firebaseapp.com",
  projectId: "eccomerce-ecotomito",
  storageBucket: "eccomerce-ecotomito.appspot.com",
  messagingSenderId: "749624273606",
  appId: "1:749624273606:web:f649b989660237c29685c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);