import React, { useContext, useEffect, useState } from 'react';

import { logoutUser, db } from '../../configs/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/AuthContext';

const Home = () => {

    const { currentUser } = useContext(AuthContext);

    const [email, setEmail] = useState(null);
    const [registered, setRegistered] = useState(null);

    useEffect(() => {
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

        getUserInformation();
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Welcome {email}!</h1>
            <div>
                If you are here, you are allowed to it.
            </div>
            <div>
                Date of register: {registered}
            </div>
            <button onClick={logoutUser}>
                Logout
            </button>
        </div>
    );
};

export default Home;
