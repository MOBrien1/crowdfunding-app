import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <h1>PETBNK</h1>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>

        </nav>
    );
}



export default Nav;