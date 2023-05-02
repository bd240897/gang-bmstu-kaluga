import './App.css';
import './style.sass';
import MainPage from "./pages/MainPage";
import PeoplePage from "./pages/PeoplePage";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPeoplePage from "./pages/DetailPeoplePage";
import TestPage from "./pages/TestPage";
import Content from "./components/Content";
import Home from "./pages/Home/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

import PrivateRoute from "./pages/PrivateRoute";
import {AuthProvider} from "./context/AuthContext";

function App() {

    const renderMainPage = routeProps => (
        <MainPage {...routeProps} />
    );

    const navigate = useNavigate();

    function handleClick() {
        navigate("/people");
    }

    return (
        <AuthProvider>
            <div className="App">
            <Header/>
            <Content>
                <Routes>
                    {/*<Route path="/" element={<MainPage/>}/>*/}
                    {/*<Route path="/people" element={<PeoplePage/>}/>*/}
                    {/*<Route path="/people/:id" element={<DetailPeoplePage/>}/>*/}
                    {/*<Route path="/test" element={<TestPage/>}/>*/}
                    // TODO delete test
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/home' element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    } />
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
        </AuthProvider>
    )
}

export default App;
