// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy8kbMHeqKcLAy2jq-X9kl-JXTxcH-N0A",
  authDomain: "gang-bmstu-kaluga.firebaseapp.com",
  projectId: "gang-bmstu-kaluga",
  storageBucket: "gang-bmstu-kaluga.appspot.com",
  messagingSenderId: "298130548899",
  appId: "1:298130548899:web:994cbc2876b2ef984af716",
  measurementId: "G-NJ48KJ4VS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
