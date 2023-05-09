import {Link, useNavigate} from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import {AuthContext} from "../context/AuthContext";
import { logoutUser, db } from '../configs/firebase';
import {doc, getDoc} from "firebase/firestore";
import User from "./User";

function Header() {

    // получим текущего юзера
    const {currentUser, setCurrentUser, currentUserEmail, setCurrentUserEmail} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () =>{
        logoutUser()
        setCurrentUser(null)
        navigate("/")
    }

    return (
        <div className="header">
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">

                <div className="container-fluid">

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <a className="navbar-brand" href="#">Команда</a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <Link to="/" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Главная</a>
                                </li>
                            </Link>

                            {/*TODO add active link */}
                            <Link to="/list" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Люди</a>
                                </li>
                            </Link>

                            <Link to="/edit" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Добавить</a>
                                </li>
                            </Link>



                            <Link to="/private" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Скрытая</a>
                                </li>
                            </Link>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        {currentUser &&
                            <li className="nav-item nav-link">
                                <User/>
                            </li>
                        }

                            { currentUser ?
                                <Link to="#" style={{ textDecoration: "none" }}>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                           onClick={()=>handleLogout()}
                                           href="#">Выйти</a>
                                    </li>
                                </Link>
                                :
                                <Link to="/login" style={{ textDecoration: "none" }}>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Войти</a>
                                    </li>
                                </Link>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
