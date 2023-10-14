import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCof0GJ_P0ntqdM0tJoSj4TSHoAYdcLzJg",
  authDomain: "gtfol-workshop.firebaseapp.com",
  projectId: "gtfol-workshop",
  storageBucket: "gtfol-workshop.appspot.com",
  messagingSenderId: "147805482218",
  appId: "1:147805482218:web:5ea6e343014dd596263b93",
  measurementId: "G-R1TY074LY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
