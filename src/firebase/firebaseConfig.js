// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv0UZkm36fjCjxEBhoW_di8usYn0R9_o4",
  authDomain: "food-and-beverage-ab95c.firebaseapp.com",
  projectId: "food-and-beverage-ab95c",
  storageBucket: "food-and-beverage-ab95c.appspot.com",
  messagingSenderId: "617001270823",
  appId: "1:617001270823:web:e368567e10e612a6055802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;