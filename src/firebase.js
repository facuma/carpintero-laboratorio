// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm5p7OfhdhMcx80j1cgYslZ-WGdWzrrgQ",
  authDomain: "lanzamiento-curso.firebaseapp.com",
  projectId: "lanzamiento-curso",
  storageBucket: "lanzamiento-curso.firebasestorage.app",
  messagingSenderId: "263993038152",
  appId: "1:263993038152:web:8e441539121bbd86198f7d",
  measurementId: "G-V40TK8KHMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);