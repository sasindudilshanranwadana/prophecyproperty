// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMUHq02NkvhvmAjN_EVIY4u6AS2jAYnGo",
  authDomain: "prophecyproperty-219dc.firebaseapp.com",
  databaseURL: "https://prophecyproperty-219dc-default-rtdb.firebaseio.com",
  projectId: "prophecyproperty-219dc",
  storageBucket: "prophecyproperty-219dc.firebasestorage.app",
  messagingSenderId: "1037329080305",
  appId: "1:1037329080305:web:bcf331eb2f9e0b94216e50",
  measurementId: "G-6XD7BPC3Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const analytics = getAnalytics(app);

export { auth, db, analytics }; // Export db
