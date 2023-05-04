import './App.css';
import './style.sass';
import MainPage from "./pages/MainPage/MainPage";
import {NavLink, Route, Routes, useNavigate, Navigate} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPeoplePage from "./pages/DetailPeoplePage/DetailPeoplePage";
import TestPage from "./pages/TestPage";
import Content from "./components/Content";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import React, {useContext} from 'react';
import PrivateRoute from "./pages/PrivateRoute";
import {AuthContext, AuthProvider} from "./context/AuthContext";
import AddPearson from "./pages/AddPearson/AddPearson";
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PeoplePage from "./pages/PeoplePage/PeoplePage";

function App() {

    // получим текущего юзера
    const {currentUser} = useContext(AuthContext);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/people");
    }

    return (


        <div className="App">
            <Header/>
            <Content>
                <ToastContainer position="top-center"/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/people" element={<PeoplePage/>}/>
                    <Route path="/people/:id" element={<DetailPeoplePage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/add' element={<AddPearson/>}/>
                    <Route path="/test" element={<TestPage/>}/>

                    <Route path='/home' element={
                        currentUser ? <PrivatePage /> : <Navigate to="/" />
                    }
                    />

                    <Route element={<NotFoundPage/>}/>
                </Routes>

                <button type="button" onClick={handleClick}>
                    Go home
                </button>

                <div className="admin-panel">
                    <div>
                        <NavLink to="/">
                            Main
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/people">
                            People
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/people/1">
                            Detail pearson
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/test">
                            Test
                        </NavLink>
                    </div>
                </div>
            </Content>
            <Footer/>
        </div>

    )
}

export default App;
