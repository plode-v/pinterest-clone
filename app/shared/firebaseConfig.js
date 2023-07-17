// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pinterest-clone-56645.firebaseapp.com",
  projectId: "pinterest-clone-56645",
  storageBucket: "pinterest-clone-56645.appspot.com",
  messagingSenderId: "337370717647",
  appId: "1:337370717647:web:3e2ff54313f72bc0be06ba",
  measurementId: "G-2W5CQLTZMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;