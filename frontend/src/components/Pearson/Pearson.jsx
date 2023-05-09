import React, { useEffect } from "react";
import './people_page.sass';


function Pearson({data}) {

    useEffect(() => {

    }, []);

    return (
        <div className="people__item pearson pearson--active p-2 h-100">
            {
                data.photo ?
                    <img className="pearson__photo" src={data.photo} alt=""/>
                    :
                    <img className="pearson__photo"
                         src="https://placehold.jp/800x800.png" alt=""/>
            }

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
                        {data.category}
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
