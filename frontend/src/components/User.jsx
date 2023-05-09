import React, { useContext, useEffect, useState } from 'react';
import { logoutUser, db } from '../configs/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

const User = () => {

    const { currentUser } = useContext(AuthContext);

    const [email, setEmail] = useState(null);
    const [registered, setRegistered] = useState(null);

    const getUserInformation = async () => {
        const docRef = doc(db, "users", currentUser);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            setEmail(userData.email);
            setRegistered(userData.registeredAt.toDate().toISOString().substring(0,10));
        } else {
            console.log("This document does not exists");
        }
    };

    useEffect(() => {
        getUserInformation();
    }, []);

    return (
        <>
            {email}
        </>
    );
};

export default User;
