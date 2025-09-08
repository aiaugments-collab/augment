// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmN7HdZYGoAXBcPJG1ZZAvD-yIcXVRXXE",
  authDomain: "aiaugments-fbc8a.firebaseapp.com",
  projectId: "aiaugments-fbc8a",
  storageBucket: "aiaugments-fbc8a.firebasestorage.app",
  messagingSenderId: "593619492192",
  appId: "1:593619492192:web:b8d19ad6827f3b96bb9205",
  measurementId: "G-YG7JZ67RH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
