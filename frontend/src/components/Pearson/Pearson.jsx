import React, { useEffect } from "react";
import './people_page.sass';


function Pearson({data}) {

    useEffect(() => {

    }, []);

    return (
        <div className="people__item pearson pearson--active p-2">
            <img className="pearson__photo" src={data.photo} alt=""/>
            <div className="pearson__body px-4 pt-2">

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        ФИО:
                    </div>
                    <div className="col-6">
                        {data.firstName}
                    </div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        Должность:
                    </div>
                    <div className="col-6">
                        {data.level}
                    </div>
                </div>

                <div className="row py-1">
                    <div className="col-6 fw-bold">
                        Год участия:
                    </div>
                    <div className="col-6">
                        {data.year}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pearson;
