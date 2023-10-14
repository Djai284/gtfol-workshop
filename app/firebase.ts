// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { applyActionCode } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtVy33_Rhh6q7qttt5tcnCDfHbFuskHHY",
  authDomain: "gtfol-4c549.firebaseapp.com",
  projectId: "gtfol-4c549",
  storageBucket: "gtfol-4c549.appspot.com",
  messagingSenderId: "928823234610",
  appId: "1:928823234610:web:e6866f9042092f3240ec2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;