// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCN5XDKG5t4RhDZuzy05-8jjd8C0Z8kZyQ",
  authDomain: "test-project-d5cbd.firebaseapp.com",
  projectId: "test-project-d5cbd",
  storageBucket: "test-project-d5cbd.appspot.com",
  messagingSenderId: "290160491890",
  appId: "1:290160491890:web:d25efaa57b3dafcd57b1eb",
  measurementId: "G-CTSMH4BN0X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
