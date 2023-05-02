// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     updateProfile,
// } from "firebase/auth";

const createUserWithEmailAndPassword = require("firebase/auth").createUserWithEmailAndPassword
const auth = require("./firebase.js").auth

// import { auth } from "./firebase.js";

// const { user } = await signInWithEmailAndPassword(
//     auth,
//     email,
//     password
// );

const { user } = createUserWithEmailAndPassword(
    auth,
    "1@gmail.ru",
    "1234qwerS+"
);

console.log(user)
