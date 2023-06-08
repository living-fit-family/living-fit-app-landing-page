// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBniF2cyINJlWkmrBzYk1HCU6qA_oODU_A",
  authDomain: "living-fit-family-32db6.firebaseapp.com",
  databaseURL: "https://living-fit-family-32db6-default-rtdb.firebaseio.com",
  projectId: "living-fit-family-32db6",
  storageBucket: "living-fit-family-32db6.appspot.com",
  messagingSenderId: "226820754783",
  appId: "1:226820754783:web:219b35e3690a2fd767baea",
  measurementId: "G-X1SHRVJV29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
