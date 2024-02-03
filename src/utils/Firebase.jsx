
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyZla1rVz8fy11NLeGs66Qkc9fC9FjzEU",
  authDomain: "shopping-8c5ee.firebaseapp.com",
  projectId: "shopping-8c5ee",
  storageBucket: "shopping-8c5ee.appspot.com",
  messagingSenderId: "398155941346",
  appId: "1:398155941346:web:1f91804a2331beca2ae5bb",
  measurementId: "G-267H0EGCHM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = getAuth();