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
import {Link} from "react-router-dom";


function PeoplePage() {

    const [people, setPeople] = useState([]);


    // TODO it test just delete it
    // useEffect(() => {
    //     getBlogs();
    // }, []);
    //
    // const getBlogs = async () => {
    //     const blogRef = collection(db, "blogs");
    //     console.log(blogRef);
    //     const firstFour = query(blogRef, orderBy("title"), limit(4));
    //     const docSnapshot = await getDocs(firstFour);
    //     // распаковка
    //     console.log(docSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    // };

    const fetchPeople = async () => {
        // получим список участник из ФБ
        let list = []

        const blogRef = collection(db, "blogs")
        const docSnapshot = await getDocs(blogRef);

        docSnapshot.docs.forEach((doc) => {
            list.push({id: doc.id, ...doc.data()});
        });
        setPeople(list);
    };

    const fetchPeopleMock = () => {
        fetch("http://localhost:3004/get-people").then((response) => {
            response.json().then(data => setPeople(data))
        })
    }

    useEffect(() => {
        // TODO mock
        fetchPeople()
        // fetchPeopleMock()
    }, []);


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


            {/*TODO вынсти эту секцию в отдельный компонент!!!!*/}
            <section className="people pt-3 pb-3">
                <div className="container">
                    <h2 className="people__header text-center mb-3">Наши участники</h2>

                    <div className="people__body">
                        <div className="container-fluid">
                            <div className="row gy-3 gx-3">
                                {
                                    people.length ?
                                        people.map(el => {
                                            return (
                                                <div className="col-4">
                                                    <Link style={{textDecoration: "none", color:"inherit"}} to={`/detail/${el.id}`}>
                                                        <Pearson data={el}/>
                                                    </Link>
                                                </div>
                                            )
                                        }) :
                                        // TODO make text
                                        <div>Ничего нет</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PeoplePage;
