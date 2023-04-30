import './App.css';
import MainPage from "./pages/MainPage";
import PeoplePage from "./pages/PeoplePage";
import {NavLink, Route, Routes, useNavigate} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailPeoplePage from "./pages/DetailPeoplePage";

function App() {

    const renderMainPage = routeProps => (
        <MainPage {...routeProps} />
    );

    const navigate = useNavigate();

    function handleClick() {
        navigate("/people");
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/people" element={<PeoplePage/>}/>
                <Route path="/people/:id" element={<DetailPeoplePage/>}/>
            </Routes>
            <Footer/>

            <button type="button" onClick={handleClick}>
                Go home
            </button>

            <div>
                <NavLink to="/">
                    Main
                </NavLink>
                <NavLink to="/people">
                    People
                </NavLink>
                <NavLink to="/people/1">
                    Detail pearson
                </NavLink>

            </div>

        </>
    )
}

export default App;
