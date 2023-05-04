import React, {FC, useCallback, useEffect, useState} from "react";
import {registerUser, db, storage} from '../../configs/firebase';
import './people_page.sass';

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

import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage";
import Pearson from "../../components/Pearson/Pearson";


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
        console.log(docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    };

    return (
        <>
            <section className="team-name">
                <div className="container">
                    <h1 className="team-name__header text-center pb-5 pt-5">Участники команды</h1>
                </div>
            </section>

            <section className="description pt-3 pb-3">
                <div className="container">

                    <h2 className="description__header text-center mb-3">О нас</h2>
                    <div className="description__body">
                        <p className="description__text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.
                            Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала X
                            VI века. В то время некий безымянный печатник создал большую коллекцию размеров
                            и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не
                            только успешно пережил без заметных изменений пять веков, но и перешагнул в
                            электронный дизайн. Его популяризации в новое время послужили публикация листов
                            Letraset с образцами Lorem Ipsum в 60-х годах и,
                            в более недавнее время, программы электронной вёрстки типа Aldus PageMaker,
                            в шаблонах которых используется Lorem Ipsum.
                        </p>
                    </div>

                </div>
            </section>

            <section className="people pt-3 pb-3">
                <div className="container">
                    <h2 className="people__header text-center mb-3">Наши участники</h2>

                    <div className="people__body">
                        <div className="container-fluid">
                            <div className="row gy-3 gx-3">

                                {[1, 2, 3, 4, 2].map(el => {
                                        return (
                                            <div className="col-4">
                                                <Pearson/>
                                            </div>
                                        )
                                    }
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PeoplePage;
