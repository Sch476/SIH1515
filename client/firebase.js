// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUTmFXhuqPOT0QiLzjYV9Kx1qnzI6R-LI",
  authDomain: "tryauth-48edc.firebaseapp.com",
  projectId: "tryauth-48edc",
  storageBucket: "tryauth-48edc.appspot.com",
  messagingSenderId: "892806080123",
  appId: "1:892806080123:web:b6cf0e4f70145903f424de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
