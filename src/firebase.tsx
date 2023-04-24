// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQDQtA1jO1UIsINxvH8zQUzQQBoB-ktC4",
  authDomain: "udemy-b3fb2.firebaseapp.com",
  projectId: "udemy-b3fb2",
  storageBucket: "udemy-b3fb2.appspot.com",
  messagingSenderId: "961488554510",
  appId: "1:961488554510:web:ef23a75f98190319308a5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  db = getFirestore(app);