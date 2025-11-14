// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqXBN962QNjJulQgN15dnOweCcbISxAD4",
    authDomain: "clever-fox-eb8d7.firebaseapp.com",
    projectId: "clever-fox-eb8d7",
    storageBucket: "clever-fox-eb8d7.firebasestorage.app",
    messagingSenderId: "897899457950",
    appId: "1:897899457950:web:bdd9c8dec3e2aab1d6fa8f",
    measurementId: "G-DB6RXR5LEC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
