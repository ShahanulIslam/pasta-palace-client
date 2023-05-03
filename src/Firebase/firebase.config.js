// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuOx5Fn9L7uV0KxJbIdVJrRwf7DNPhIz0",
  authDomain: "pasta-palace-9ee93.firebaseapp.com",
  projectId: "pasta-palace-9ee93",
  storageBucket: "pasta-palace-9ee93.appspot.com",
  messagingSenderId: "1069412612263",
  appId: "1:1069412612263:web:02ee4d2d5a2ff2b6c00382"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app