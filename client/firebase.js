// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhcSvXkV0Dbzad1CqcNeUbWJZEvc9epIA",
  authDomain: "auth-57242.firebaseapp.com",
  projectId: "auth-57242",
  storageBucket: "auth-57242.appspot.com",
  messagingSenderId: "474491711916",
  appId: "1:474491711916:web:29190fde6d27eda62c0a09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
