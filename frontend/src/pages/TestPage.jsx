import React, {FC, useCallback, useEffect, useState} from "react";
// import {auth} from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

function TestPage() {

    const [state, setState] = useState(initialState);
    const [user, setUser] = useState(null);

    const createUser = () =>{
        // createUserWithEmailAndPassword(
        //     auth,
        //     "5@gmail.ru",
        //     "1234qwerS+"
        // ).then((user)=>console.log(user));
    }


    const login = async () => {
        // const {user} = await signInWithEmailAndPassword(
        //     auth,
        //     "1@gmail.ru",
        //     "1234qwerS+"
        // );
        // console.log(user)
        // setUser(user);
    }


    const handleCreateUser = () =>{
        createUser()
        console.log("handleCreateUser")
    }

    const handleLogin = () =>{
        login().then(()=>console.log("handleLogin"))
    }

    return (
        <>
        <div>Test</div>
        <button onClick={handleCreateUser}>Create user</button>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default TestPage;


