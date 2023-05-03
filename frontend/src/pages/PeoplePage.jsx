import React, {FC, useCallback, useEffect, useState} from "react";
import { registerUser, db, storage } from '../configs/firebase';
import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    limit,
    onSnapshot,
    query,
    orderBy,
    where,
    startAfter,
} from "firebase/firestore";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";



function PeoplePage() {

    useEffect(() => {
        getBlogs();
    }, []);

    const getBlogs = async () => {
        const blogRef = collection(db, "blogs");
        console.log(blogRef);
        const firstFour = query(blogRef, orderBy("title"), limit(4));
        const docSnapshot = await getDocs(firstFour);
        // распаковка
        console.log(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    };

    return (
        <div>ParticipantsPage</div>
    )
}

export default PeoplePage;
