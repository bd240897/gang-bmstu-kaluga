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
import {AuthContext, AuthProvider} from "./context/AuthContext";
import AddPearson from "./pages/AddPearson/AddPearson";
import NotFoundPage from "./pages/NotFoundPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PeoplePage from "./pages/PeoplePage/PeoplePage";

function App() {

    // получим текущего юзера
    const {currentUser} = useContext(AuthContext);

    return (


        <div className="App">
            <Header/>
            <Content>
                <ToastContainer position="top-center"/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/people" element={<PeoplePage/>}/>
                    <Route path="/detail/:id" element={<DetailPeoplePage/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/add' element={<AddPearson/>}/>
                    <Route path="/test" element={<TestPage/>}/>

                    <Route path='/private' element={
                        currentUser ? <PrivatePage /> : <Navigate to="/login" />
                    }
                    />

                    <Route element={<NotFoundPage/>}/>
                </Routes>
            </Content>
            <Footer/>
        </div>

    )
}

export default App;
