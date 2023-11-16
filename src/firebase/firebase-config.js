// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD9Ew8hOh0bvuJHqiLI60oIgA4TU5mipE",
  authDomain: "monkey-blog-ee755.firebaseapp.com",
  projectId: "monkey-blog-ee755",
  storageBucket: "monkey-blog-ee755.appspot.com",
  messagingSenderId: "790674158651",
  appId: "1:790674158651:web:fbc3789b58cc32ed6d581e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
