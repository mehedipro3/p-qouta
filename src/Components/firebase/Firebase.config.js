// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0w9nycYcDKY3gmYCepqU38pyJbYHs80w",
  authDomain: "quota-injury-monitor.firebaseapp.com",
  projectId: "quota-injury-monitor",
  storageBucket: "quota-injury-monitor.firebasestorage.app",
  messagingSenderId: "583738999560",
  appId: "1:583738999560:web:8ae781e1bb2c5f3fbea2bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;