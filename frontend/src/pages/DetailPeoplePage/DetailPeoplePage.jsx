import {useParams, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import './detail_page.sass';

function DetailPeoplePage() {

    const [pearson, setPearson] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id)

    const fetchDetailMock = () => {
        const docSnapshot = fetch(`http://localhost:3004/get-people/${id}`)
            .then((response) => {
                response.json().then(data => setPearson(data))
            })
            .catch((e)=>console.log("error"))
    }

    useEffect(() => {
        // TODO mock
        fetchDetailMock()
    }, []);

    if (pearson) {
        return (
            <>
                <div>DetailPeoplePage</div>
                <div>Name {`${pearson.firstName} ${pearson.secondName}`}</div>
                <div className="row">
                    <div className="col-4">
                        <img src={pearson.photo}></img>
                    </div>
                </div>
                <div>Year {`${pearson.year}`}</div>
                <div>Description {`${pearson.description}`}</div>
                <button onClick={()=>navigate("/people")}>Назад</button>
            </>)
    }
    else {
        return (
            <div>Ничего не нашлось</div>
        )
    }

}

export default DetailPeoplePage;
