import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {db, loginUser} from '../../configs/firebase';
import './login_page.sass';
import {doc, getDoc} from "firebase/firestore";
import {AuthContext} from "../../context/AuthContext";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {currentUser, setCurrentUser, currentUserEmail, setCurrentUserEmail} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(email, password)
            .then((userCredential) => {
                alert('User signed in');
                navigate("/")
            })
            .catch((error) => {
                alert('Something went wrong!');
                const errorCode = error.code;
                console.log(error);
                console.log(errorCode);
            });
    };

    return (
        <section className="login py-2 h-100">
            <div className="container h-100">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-6">
                        <form className="border border-success rounded rounded-3 px-5 py-5">

                            <h1 className="text-center py-3">Вход</h1>

                            <div className="form-group py-1">
                                <label htmlFor="formGroupExampleInput">Почта</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="example@mail.ru"
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>

                            <div className="form-group py-1">
                                <label htmlFor="formGroupExampleInput2">Пароль</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="formGroupExampleInput2"
                                    placeholder="1234qwer"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>

                            <div className="d-grid gap-2 pt-3">
                                <button type="submit"
                                        className="btn btn-primary mb-2"
                                        onClick={handleSubmit}
                                >
                                    Войти
                                </button>
                            </div>

                            <div className="account-exists text-center">
                                <span className="account-exists__question">У вас еще нет аккаунта? </span>
                                <span className="account-exists__link"
                                      onClick={() => navigate('/register')}>
                            Зарегистрироваться!
                            </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default Login;
