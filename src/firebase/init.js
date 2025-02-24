// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApTdQb3e81QUr9OP7aLN2Fmsyg4LZxfkk",
  authDomain: "fir-practise-bf00a.firebaseapp.com",
  projectId: "fir-practise-bf00a",
  storageBucket: "fir-practise-bf00a.firebasestorage.app",
  messagingSenderId: "217291058979",
  appId: "1:217291058979:web:da173703482f57073ce696"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();