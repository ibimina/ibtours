// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Timestamp, Timestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM1_IH119PaWefFZGFAja00_MzfNHbHKs",
  authDomain: "ibtours.firebaseapp.com",
  projectId: "ibtours",
  storageBucket: "ibtours.appspot.com",
  messagingSenderId: "232619070764",
  appId: "1:232619070764:web:3c053ad6d5af7d5acb0889",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

const timeStamp = Timestamp;

export { db, auth, timeStamp };
