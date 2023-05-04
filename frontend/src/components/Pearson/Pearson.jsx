import React, { useEffect } from "react";
import './people_page.sass';


function Pearson() {

    useEffect(() => {

    }, []);



    return (
        <div className="people__item pearson pearson--active p-2">
            <img className="pearson__photo" src="https://placehold.jp/800x800.png" alt=""/>
            <div className="pearson__body px-4 pt-2">

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        ФИО:
                    </div>
                    <div className="col-6">
                        Иванов Иван
                    </div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        Должность:
                    </div>
                    <div className="col-6">
                        Капитан
                    </div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        Год участия:
                    </div>
                    <div className="col-6">
                        2023
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pearson;
