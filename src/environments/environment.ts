// Import core Firebase and services
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase config
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAqXBN962QNjJulQgN15dnOweCcbISxAD4",
    authDomain: "clever-fox-eb8d7.firebaseapp.com",
    projectId: "clever-fox-eb8d7",
    storageBucket: "clever-fox-eb8d7.firebasestorage.app",
    messagingSenderId: "897899457950",
    appId: "1:897899457950:web:bdd9c8dec3e2aab1d6fa8f",
    measurementId: "G-DB6RXR5LEC"
  }
};
