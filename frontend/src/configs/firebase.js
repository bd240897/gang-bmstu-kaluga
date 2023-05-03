// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import 'firebase/storage';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`,
};

console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


//### REGISTER USER WITH FIREBASE AUTHENTICATION ###//
export const registerUser = (email, password) => {
  const auth = getAuth(app);
  return createUserWithEmailAndPassword(auth, email, password);
};

//### LOGIN USER WITH FIREBASE ###//
export const loginUser = (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};

//### LOGOUT USER ###//
export const logoutUser = () => {
  const auth = getAuth();
  signOut(auth).then(() => {
    alert('User signed out!');
  }).catch((error) => {
    alert('Something went wrong!');
    const errorCode = error.code;
    console.log(errorCode);
  });
};

export { auth, db, storage };
