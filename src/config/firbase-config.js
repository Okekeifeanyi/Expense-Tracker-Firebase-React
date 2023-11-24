// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDT0l5AaA8bxzcw5zaS4HUTfBs61etdbN8",
  authDomain: "expense-tracker-bc3cd.firebaseapp.com",
  projectId: "expense-tracker-bc3cd",
  storageBucket: "expense-tracker-bc3cd.appspot.com",
  messagingSenderId: "590307628848",
  appId: "1:590307628848:web:961d585f28df09f3949af5",
  measurementId: "G-ZSXH4LMY6Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);