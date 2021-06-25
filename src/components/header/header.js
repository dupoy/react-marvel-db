import {Link} from "react-router-dom";
import './header.css'
import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img width="64" alt="Marvel Logo" className="d-inline-block align-text-top"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/512px-Marvel_Logo.svg.png"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/comics/">Comics</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header