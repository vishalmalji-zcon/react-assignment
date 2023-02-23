// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWLqFmxqnoc0AlZDCUNJz6TtUS4yVUyvs",
    authDomain: "crud-fed70.firebaseapp.com",
    projectId: "crud-fed70",
    storageBucket: "crud-fed70.appspot.com",
    messagingSenderId: "280529311841",
    appId: "1:280529311841:web:8d24278d2163b90759b220",
    measurementId: "G-TXNNL2Q1S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);