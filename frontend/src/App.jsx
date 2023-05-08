import './App.css';
import './style.sass';
import MainPage from "./pages/MainPage/MainPage";
import {NavLink, Route, Routes, useNavigate, Navigate} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestPage from "./pages/TestPage";
import Content from "./components/Content";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import React, {useContext} from 'react';
import {AuthContext, AuthProvider} from "./context/AuthContext";
import NotFoundPage from "./pages/NotFoundPage";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavigateError from "./components/NavigateError";
import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import EditPage from "./pages/EditPage/EditPage";

function App() {

    // получим текущего юзера
    const {currentUser} = useContext(AuthContext);

    const navigateToLogin = () => {
        toast.info("Страница доступна только вошедшим пользователям");
        return <Navigate to="/login" />
    }

    /*

    MainPage
    ListPage
    DetailPage
    EditPage

     */

    return (
        <div className="App">
            <Header/>
            <Content>
                <ToastContainer position="top-center"/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/list" element={<ListPage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path='/edit' element={<EditPage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path="/test" element={<TestPage/>}/>

                    <Route path='/private' element={
                        currentUser ? <PrivatePage /> : <NavigateError massage="Страница доступна только вошедшим пользователям" to="/login" />
                    }
                    />

                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            <Footer/>
        </div>

    )
}

export default App;
