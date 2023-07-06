// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcmxBFMg-NSLwAWPzZDhlL6ZEYn0hVmUA",
  authDomain: "lokseva-5af2a.firebaseapp.com",
  projectId: "lokseva-5af2a",
  storageBucket: "lokseva-5af2a.appspot.com",
  messagingSenderId: "761670829505",
  appId: "1:761670829505:web:e66d2a3fd643a66a785b40",
  measurementId: "G-FG9SKB1220"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db= getFirestore(app);