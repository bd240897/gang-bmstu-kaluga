import React, {FC, useCallback, useEffect, useState} from "react";
import { registerUser, db, storage } from '../configs/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


// TODO this apge will be unused!!!!!
function SendFilePage() {

    const [progress, setProgress] = useState(0);

    // это обработчик для формы
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    // при загрузке файла сразу кидай его на сервер
    const uploadFiles = (file) => {

        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
    };

    return (
        <div className="App">
            <form onSubmit={formHandler}>
                <input type="file" className="input" />
                <button type="submit">Upload</button>
            </form>
            <hr />
            <h2>Uploading done {progress}%</h2>
        </div>
    );
}

export default SendFilePage;


