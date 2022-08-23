// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1_TtJHeT9JsAv8MdPH-DWYiO4bON3G7k",
  authDomain: "fir-project-bd165.firebaseapp.com",
  projectId: "fir-project-bd165",
  storageBucket: "fir-project-bd165.appspot.com",
  messagingSenderId: "70187172312",
  appId: "1:70187172312:web:f621d062dd03fc953732ad",
  measurementId: "G-5ME712WNVC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);
