import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav>
            <h1>PETBNK</h1>
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Profile</Link>
            <Link to="/project">Project</Link>
            <Link>Login</Link>
            <Link>Signup</Link>
            <Link>Contact</Link>
        </nav>
    );
}



export default Nav;