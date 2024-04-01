// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh3HJzrqaDPBuZSOGpnsCiXM9D1-SciKY",
  authDomain: "coffeekiosk24-9e18a.firebaseapp.com",
  projectId: "coffeekiosk24-9e18a",
  storageBucket: "coffeekiosk24-9e18a.appspot.com",
  messagingSenderId: "1060075448766",
  appId: "1:1060075448766:web:00f8ae825ff234aa0131ef",
  measurementId: "G-QJYC8BTBKY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
