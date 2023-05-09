import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {doc, setDoc, Timestamp} from 'firebase/firestore';
import {registerUser, db} from '../../configs/firebase';
import './register_page.sass';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    // const handleRegisterMock = () => {
    //     registerUser(email, password)
    //         .then((userCredential) => {
    //             alert('User created successfully!')
    //         })
    //         .catch((error) => {
    //             alert('Something went wrong!')
    //             const errorCode = error.code;
    //             console.log(errorCode);
    //         });
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
        registerUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user
                setDoc(doc(db, 'users', user.uid), {
                    email: email,
                    registeredAt: Timestamp.fromDate(new Date()),
                });
                alert('User created successfully!')
                navigate("/")
            })
            .catch((error) => {
                alert('Something went wrong!');
                const errorCode = error.code;
                console.log(error);
                console.log(errorCode);
            });
    }

    return (

        <section className="register py-2 h-100">
            <div className="container h-100">
                <div className="row h-100 d-flex justify-content-center align-items-center">
                    <div className="col-6">
                        <form className="border border-success rounded rounded-3 px-5 py-5">

                            <h1 className="text-center py-3">Регистрация</h1>

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
                                    Зарегистрироваться
                                </button>
                            </div>

                            <div className="account-exists text-center">
                                <span className="account-exists__question">У вас уже есть аккаунт? </span>
                                <span className="account-exists__link"
                                      onClick={() => navigate('/login')}
                                >
                                Войти!
                                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Register;

