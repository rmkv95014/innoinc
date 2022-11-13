// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzTsdyqEz9K5P21MwbSINDiGOvswSz_jM",
  authDomain: "innoinc-9a2b8.firebaseapp.com",
  databaseURL: "https://innoinc-9a2b8.firebaseio.com",
  projectId: "innoinc-9a2b8",
  storageBucket: "innoinc-9a2b8.appspot.com",
  messagingSenderId: "404510069985",
  appId: "1:404510069985:web:5597c5febb49de493393a0",
  measurementId: "G-HY77EEBRFE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
