import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">

                <div className="container-fluid">

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <a className="navbar-brand" href="#">Navbar</a>
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
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                            </Link>

                            {/*TODO add active link */}
                            <Link to="/people" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">People</a>
                                </li>
                            </Link>

                            <Link to="/add" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Add pearson</a>
                                </li>
                            </Link>

                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login</a>
                                </li>
                            </Link>

                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Register</a>
                                </li>
                            </Link>

                            <Link to="/private" style={{ textDecoration: "none" }}>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Private</a>
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;
