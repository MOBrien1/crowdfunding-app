import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <h1>PETBNK</h1>
            <Link to="/">Home</Link>
            <Link to="/Login">Login</Link>
            <Link to="/projects/">Create Project</Link>
            <Link to="/profile/me">Profile</Link>

        </nav>
    );
}



export default Nav;