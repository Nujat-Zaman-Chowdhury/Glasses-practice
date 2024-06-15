// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLye-RE2_1YZQp-6nfVecJ33Ms6zwg50I",
  authDomain: "cs-glasses-auth.firebaseapp.com",
  projectId: "cs-glasses-auth",
  storageBucket: "cs-glasses-auth.appspot.com",
  messagingSenderId: "940196193588",
  appId: "1:940196193588:web:6fcf498905a7490cf7f161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;