import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './detail_page.sass';
import {collection, doc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../configs/firebase";

function DetailPage() {

    const [pearson, setPearson] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();

    const fetchDetailMock = () => {
        const docSnapshot = fetch(`http://localhost:3004/get-people/${id}`)
            .then((response) => {
                response.json().then(data => setPearson(data))
            })
            .catch((data)=>console.log("error"))
    }

    const fetchDetail = async () => {
        const docRef = doc(db, "blogs", id);
        const blogDetail = await getDoc(docRef);
        setPearson(blogDetail.data())
        console.log("fetchDetail", blogDetail.data());
    }

    useEffect(() => {
        // TODO mock
        fetchDetailMock()
        // fetchDetail()
    }, []);

    if (pearson) {
        return (
            <>
                <section className="detail-title py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center">
                                <button onClick={()=>navigate("/list")} className="detail-title__btn btn btn-success w-100">назад</button>
                            </div>
                            <div className="col-10">
                                <h1 className="detail-title__header  text-center pb-5 pt-5">Подробная информация об
                                    участнике</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="detail-card py-3">
                    <div className="container">

                        <h2 className="detail-card__header text-center my-4">{`${pearson.firstName} ${pearson.secondName}`}</h2>

                        <div className="detail-card__body pearson-detail">

                            <div className="row">

                                <div className="pearson-photography col">
                                    <div className="pearson-photography__row">
                                        <div className="pearson-photography__col">
                                            {
                                                // TODO если нет фотки ставить плейс холдер
                                                pearson.photo ?
                                                    <img className="pearson-photography__img" src={pearson.photo} alt="" />
                                                    :
                                                    <img className="pearson-photography__img"
                                                         src="https://placehold.jp/800x800.png" alt=""/>
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="pearson-content col">
                                    <div className="pearson-content__row">
                                        <div className="pearson-content__col">
                                            <div className="pearson-content__year">
                                                <span className="fw-bold">Год участия: </span>
                                                <span className="">{`${pearson.year}`}</span>
                                            </div>
                                            <div className="pearson-content__role">
                                                <span className="fw-bold">Роль в команде:  </span>
                                                <span className="">участник</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

                <section className="detail-description py-3">
                    <div className="container">
                        <div className=" py-3">
                            <h3 className="detail-description__header text-center mb-3">Об участнике</h3>
                            <div className="detail-description__body">
                                <p className="detail-description__text">
                                    {`${pearson.description}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </>)
    }
    else {
        return (
            <div>Ничего не нашлось</div>
        )
    }

}

export default DetailPage;
